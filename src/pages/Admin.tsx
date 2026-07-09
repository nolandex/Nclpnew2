import React, { useEffect, useState } from 'react';
import { db, auth } from '../lib/firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { motion } from 'motion/react';
import { 
  collection, 
  serverTimestamp, 
  getDocs, 
  deleteDoc, 
  doc, 
  query, 
  setDoc, 
  getDoc 
} from 'firebase/firestore';
import { 
  Loader2, 
  Plus, 
  Trash2, 
  Copy, 
  LogOut, 
  CheckCheck, 
  Eye, 
  EyeOff, 
  Link2, 
  Layers, 
  Chrome, 
  ShieldAlert,
  Sparkles,
  Zap,
  Globe
} from 'lucide-react';
import { handleFirestoreError, OperationType } from '../lib/firestoreError';

const ADMIN_PASSWORD = 'nexclass-admin-2024';
const SESSION_KEY = 'admin_session';

interface AccessToken {
  id: string;
  type: 'single' | 'multi';
  uses: number;
  createdAt: Date;
  createdBy: string;
}

export default function Admin() {
  const [authed, setAuthed] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);
  const [showPasscodeFallback, setShowPasscodeFallback] = useState(false);
  const [passcode, setPasscode] = useState('');

  const [tokens, setTokens] = useState<AccessToken[]>([]);
  const [loading, setLoading] = useState(false);
  const [generating, setGenerating] = useState(false);
  
  // Link settings state
  const [activeTab, setActiveTab] = useState<'bulk' | 'custom'>('bulk');
  const [bulkCount, setBulkCount] = useState(5);
  const [linkType, setLinkType] = useState<'single' | 'multi'>('single');
  const [customSlug, setCustomSlug] = useState('');
  const [customError, setCustomError] = useState('');
  
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [allCopied, setAllCopied] = useState(false);

  // Restore session on mount
  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY) === 'true') {
      setAuthed(true);
      fetchTokens();
    }
  }, []);

  const handlePasscodeLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode.trim() === ADMIN_PASSWORD) {
      sessionStorage.setItem(SESSION_KEY, 'true');
      setAuthed(true);
      setLoginError('');
      fetchTokens();
    } else {
      setLoginError('Kode akses salah. Silakan coba lagi.');
      setPasscode('');
    }
  };

  const handleGoogleLogin = async () => {
    setLoginError('');
    setLoginLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const email = result.user?.email?.toLowerCase() || '';
      
      const allowedEmails = ['ykidardni12345@gmail.com', 'ykidardni1234@gmail.com'];
      if (allowedEmails.includes(email)) {
        sessionStorage.setItem(SESSION_KEY, 'true');
        setAuthed(true);
        fetchTokens();
      } else {
        await auth.signOut();
        setLoginError('Akses ditolak. Email Google Anda tidak terdaftar sebagai administrator.');
      }
    } catch (error: any) {
      console.error('Google Sign-In Error:', error);
      setLoginError('Sign-in Google gagal. Harap izinkan popup browser dan coba lagi.');
    } finally {
      setLoginLoading(false);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem(SESSION_KEY);
    setAuthed(false);
    setTokens([]);
  };

  const fetchTokens = async () => {
    setLoading(true);
    try {
      const q = query(collection(db, 'tokens'));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map(d => {
        const item = d.data();
        return {
          id: d.id,
          type: item.type || 'single',
          uses: item.uses || 0,
          createdAt: item.createdAt?.toDate() || new Date(),
          createdBy: item.createdBy || 'admin',
        };
      });
      data.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
      setTokens(data);
    } catch (error) {
      handleFirestoreError(error, OperationType.LIST, 'tokens');
    } finally {
      setLoading(false);
    }
  };

  const generateBulkTokens = async () => {
    setGenerating(true);
    const newIds: string[] = [];
    try {
      const allowedChars = 'abcdefghijklmnopqrstuvwxyz0123456789';
      for (let i = 0; i < bulkCount; i++) {
        let randomId = '';
        for (let j = 0; j < 8; j++) {
          randomId += allowedChars.charAt(Math.floor(Math.random() * allowedChars.length));
        }

        await setDoc(doc(db, 'tokens', randomId), {
          createdAt: serverTimestamp(),
          createdBy: auth.currentUser?.email || 'admin',
          type: linkType,
          uses: 0,
        });
        newIds.push(randomId);
      }
      await fetchTokens();
    } catch (error) {
      alert('Gagal membuat link bulk. Silakan periksa koneksi atau Firestore rules.');
      handleFirestoreError(error, OperationType.CREATE, 'tokens');
      setGenerating(false);
      return;
    }
    setGenerating(false);

    // Auto-copy newly generated links
    try {
      const links = newIds.map(id => `${window.location.origin}/${id}`).join('\n');
      await navigator.clipboard.writeText(links);
      setAllCopied(true);
      setTimeout(() => setAllCopied(false), 4000);
    } catch (clipErr) {
      console.warn('Clipboard copy skipped', clipErr);
    }
  };

  const handleCustomSlugChange = (val: string) => {
    // Sanitize to only alphanumeric, hyphens, and underscores
    const sanitized = val.toLowerCase().replace(/[^a-z0-9_-]/g, '');
    setCustomSlug(sanitized);
    setCustomError('');
  };

  const createCustomLink = async (e: React.FormEvent) => {
    e.preventDefault();
    const slug = customSlug.trim();
    if (!slug) return;

    setGenerating(true);
    setCustomError('');

    try {
      const docRef = doc(db, 'tokens', slug);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setCustomError('Nama link kustom ini sudah digunakan. Harap gunakan nama lain.');
        setGenerating(false);
        return;
      }

      await setDoc(docRef, {
        createdAt: serverTimestamp(),
        createdBy: auth.currentUser?.email || 'admin',
        type: linkType,
        uses: 0,
      });

      setCustomSlug('');
      await fetchTokens();

      // Copy custom link to clipboard
      const url = `${window.location.origin}/${slug}`;
      await navigator.clipboard.writeText(url);
      setCopiedId(slug);
      setTimeout(() => setCopiedId(null), 3000);
    } catch (error) {
      setCustomError('Gagal membuat link kustom.');
      handleFirestoreError(error, OperationType.CREATE, `tokens/${slug}`);
    } finally {
      setGenerating(false);
    }
  };

  const deleteToken = async (id: string) => {
    if (!confirm(`Hapus link "/${id}"?`)) return;
    try {
      await deleteDoc(doc(db, 'tokens', id));
      setTokens(prev => prev.filter(t => t.id !== id));
    } catch (error) {
      alert('Gagal menghapus link.');
      handleFirestoreError(error, OperationType.DELETE, `tokens/${id}`);
    }
  };

  const copyLink = async (id: string) => {
    const url = `${window.location.origin}/${id}`;
    await navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const copyAllLinks = async () => {
    if (tokens.length === 0) return;
    const links = tokens.map(t => `${window.location.origin}/${t.id}`).join('\n');
    await navigator.clipboard.writeText(links);
    setAllCopied(true);
    setTimeout(() => setAllCopied(false), 4000);
  };

  // ── Login screen ──────────────────────────────────────────
  if (!authed) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-4 relative overflow-hidden">
        {/* Dynamic Background Light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none opacity-25 filter blur-[100px] bg-gradient-to-br from-purple-600 to-indigo-600" />

        <div className="max-w-md w-full bg-neutral-950 border border-neutral-900 p-8 rounded-3xl shadow-2xl relative z-10">
          <div className="flex flex-col items-center text-center mb-6">
            <div className="w-12 h-12 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-3">
              <Sparkles className="w-5 h-5 text-purple-400" />
            </div>
            <h1 className="text-2xl font-black tracking-tight text-white">NEXCLASS Admin Portal</h1>
            <p className="text-xs text-neutral-400 mt-1 max-w-[280px]">
              Kelola link akses undangan privat khusus untuk siswa NEXCLASS.
            </p>
          </div>

          {/* Login Error */}
          {loginError && (
            <div className="mb-4 p-3.5 rounded-xl bg-destructive/10 border border-destructive/20 flex items-start gap-2.5">
              <ShieldAlert className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
              <span className="text-xs text-destructive leading-relaxed font-medium">{loginError}</span>
            </div>
          )}

          {/* Google Login Button */}
          {!showPasscodeFallback ? (
            <>
              <button
                type="button"
                onClick={handleGoogleLogin}
                disabled={loginLoading}
                className="w-full h-12 bg-white hover:bg-neutral-200 text-black rounded-xl font-bold flex items-center justify-center gap-3 transition-all active:scale-[0.98] cursor-pointer shadow-md mt-4"
              >
                {loginLoading ? (
                  <Loader2 className="w-4 h-4 animate-spin text-neutral-900" />
                ) : (
                  <Chrome className="w-4 h-4 text-neutral-900" />
                )}
                <span>Sign In dengan Google</span>
              </button>

              <div className="mt-6 text-center">
                <button
                  type="button"
                  onClick={() => { setShowPasscodeFallback(true); setLoginError(''); }}
                  className="text-xs text-neutral-500 hover:text-white font-medium underline underline-offset-4 cursor-pointer"
                >
                  Alternatif: Masuk dengan Kode Akses
                </button>
              </div>
            </>
          ) : (
            <form onSubmit={handlePasscodeLogin} className="flex flex-col gap-4 mt-4">
              <div>
                <label className="block text-[11px] font-semibold text-neutral-400 uppercase tracking-wider mb-1.5 font-mono">Kode Akses Admin</label>
                <input
                  type="password"
                  value={passcode}
                  onChange={e => { setPasscode(e.target.value); setLoginError(''); }}
                  placeholder="Masukkan kode akses admin"
                  className="w-full h-12 bg-neutral-900 border border-neutral-800 rounded-xl px-4 text-sm text-white focus:outline-none focus:ring-1 focus:ring-purple-500 font-mono"
                  autoFocus
                />
              </div>

              <button
                type="submit"
                className="h-12 w-full bg-white hover:bg-neutral-200 text-black font-semibold rounded-xl text-sm transition-all active:scale-[0.98] cursor-pointer"
              >
                Masuk
              </button>

              <div className="text-center mt-2">
                <button
                  type="button"
                  onClick={() => { setShowPasscodeFallback(false); setLoginError(''); }}
                  className="text-xs text-neutral-500 hover:text-white font-medium underline underline-offset-4 cursor-pointer"
                >
                  Kembali ke Sign In Google
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    );
  }

  // ── Admin dashboard ───────────────────────────────────────
  return (
    <div className="min-h-screen bg-black text-white p-6 sm:p-10">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-8 pb-6 border-b border-neutral-900">
          <div>
            <h1 className="text-2xl font-black tracking-tight">Access Link Manager</h1>
            <p className="text-xs text-neutral-400 mt-1">
              Buat dan hapus link kustom atau bulk untuk membuka akses kelas NEXCLASS.
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-neutral-400 border border-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
            Keluar
          </button>
        </div>

        {/* Creator Controls */}
        <div className="bg-neutral-950 border border-neutral-900 rounded-3xl p-6 sm:p-8 mb-8 shadow-sm">
          <div className="flex border-b border-neutral-900 mb-6">
            <button
              onClick={() => setActiveTab('bulk')}
              className={`pb-3 text-sm font-bold border-b-2 px-4 transition-all cursor-pointer ${
                activeTab === 'bulk' ? 'border-white text-white' : 'border-transparent text-neutral-500'
              }`}
            >
              Bulk Link (Acak)
            </button>
            <button
              onClick={() => setActiveTab('custom')}
              className={`pb-3 text-sm font-bold border-b-2 px-4 transition-all cursor-pointer ${
                activeTab === 'custom' ? 'border-white text-white' : 'border-transparent text-neutral-500'
              }`}
            >
              Custom Link (Sesuai Keinginan)
            </button>
          </div>

          <p className="text-xs text-neutral-400 mb-6 leading-relaxed">
            {activeTab === 'bulk' 
              ? 'Fitur bulk memungkinkan Anda membuat banyak link acak sekaligus dengan satu kali klik. Sangat berguna untuk dibagikan ke sekelompok siswa.'
              : 'Fitur custom link memungkinkan Anda menentukan sendiri teks setelah tanda miring domain Anda, misalnya domain.com/vip-kelas-a.'
            }
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
            {/* Tab: Bulk Link */}
            {activeTab === 'bulk' && (
              <div>
                <label className="block text-[11px] font-bold text-neutral-400 uppercase tracking-wider mb-2 font-mono">Jumlah Link</label>
                <input
                  type="number"
                  min="1"
                  max="100"
                  value={bulkCount}
                  onChange={e => setBulkCount(Math.max(1, Number(e.target.value)))}
                  className="w-full h-11 bg-neutral-900 border border-neutral-800 rounded-xl px-4 text-sm text-white focus:outline-none focus:ring-1 focus:ring-purple-500"
                />
              </div>
            )}

            {/* Tab: Custom Link */}
            {activeTab === 'custom' && (
              <form onSubmit={createCustomLink} className="col-span-1">
                <label className="block text-[11px] font-bold text-neutral-400 uppercase tracking-wider mb-2 font-mono">Nama Link Kustom</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-600 text-xs font-mono select-none">
                    /
                  </span>
                  <input
                    type="text"
                    value={customSlug}
                    onChange={e => handleCustomSlugChange(e.target.value)}
                    placeholder="vip-siswa"
                    className="w-full h-11 bg-neutral-900 border border-neutral-800 rounded-xl pl-8 pr-4 text-sm text-white focus:outline-none focus:ring-1 focus:ring-purple-500 font-mono"
                  />
                </div>
                {customError && (
                  <p className="text-xs text-red-400 mt-2 font-medium">{customError}</p>
                )}
              </form>
            )}

            {/* Common: Use type (single vs multi) */}
            <div>
              <label className="block text-[11px] font-bold text-neutral-400 uppercase tracking-wider mb-2 font-mono">Tipe Penggunaan Link</label>
              <div className="grid grid-cols-2 gap-2 bg-neutral-900 p-1 rounded-xl border border-neutral-800">
                <button
                  type="button"
                  onClick={() => setLinkType('single')}
                  className={`h-9 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    linkType === 'single' ? 'bg-neutral-800 text-white' : 'text-neutral-500 hover:text-white'
                  }`}
                >
                  Sekali Pakai (Single)
                </button>
                <button
                  type="button"
                  onClick={() => setLinkType('multi')}
                  className={`h-9 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    linkType === 'multi' ? 'bg-neutral-800 text-white' : 'text-neutral-500 hover:text-white'
                  }`}
                >
                  Banyak Pakai (Multi)
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-neutral-900 flex justify-end">
            {activeTab === 'bulk' ? (
              <button
                onClick={generateBulkTokens}
                disabled={generating}
                className="h-11 px-6 bg-white hover:bg-neutral-200 text-black font-semibold rounded-xl text-sm flex items-center justify-center gap-2 transition-all active:scale-[0.98] disabled:opacity-50 cursor-pointer w-full sm:w-auto"
              >
                {generating ? <Loader2 className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4" />}
                <span>Buat {bulkCount} Link Bulk</span>
              </button>
            ) : (
              <button
                onClick={createCustomLink}
                disabled={generating || !customSlug.trim()}
                className="h-11 px-6 bg-white hover:bg-neutral-200 text-black font-semibold rounded-xl text-sm flex items-center justify-center gap-2 transition-all active:scale-[0.98] disabled:opacity-50 cursor-pointer w-full sm:w-auto"
              >
                {generating ? <Loader2 className="w-4 h-4 animate-spin" /> : <Link2 className="w-4 h-4" />}
                <span>Buat Link Kustom</span>
              </button>
            )}
          </div>

          {allCopied && (
            <motion.div 
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 flex items-center gap-2 text-xs text-green-400 font-medium"
            >
              <CheckCheck className="w-4 h-4" />
              Semua link bulk berhasil disalin ke clipboard!
            </motion.div>
          )}
        </div>

        {/* Link List */}
        <div className="bg-neutral-950 border border-neutral-900 rounded-3xl overflow-hidden shadow-sm">
          <div className="px-6 py-4.5 border-b border-neutral-900 bg-neutral-950 flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-white">
                Daftar Link Aktif ({tokens.length})
              </h2>
            </div>
            {tokens.length > 0 && (
              <button
                onClick={copyAllLinks}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-white bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                {allCopied ? <CheckCheck className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>Salin Semua</span>
              </button>
            )}
          </div>

          {loading ? (
            <div className="p-16 flex justify-center">
              <Loader2 className="w-6 h-6 animate-spin text-purple-400" />
            </div>
          ) : tokens.length === 0 ? (
            <div className="p-16 text-center text-neutral-500 text-xs">
              Belum ada link undangan aktif yang dibuat. Buat satu di atas untuk mulai.
            </div>
          ) : (
            <ul className="divide-y divide-neutral-900">
              {tokens.map(token => (
                <li
                  key={token.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:px-6 hover:bg-neutral-900/40 transition-colors"
                >
                  <div className="mb-3 sm:mb-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="font-mono text-sm text-purple-400 font-bold break-all">
                        /{token.id}
                      </span>
                      {token.type === 'single' ? (
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-neutral-900 text-neutral-400 border border-neutral-800 rounded">
                          Sekali Pakai
                        </span>
                      ) : (
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-purple-950/40 text-purple-400 border border-purple-900/30 rounded">
                          Banyak Pakai
                        </span>
                      )}
                    </div>
                    <div className="text-[11px] text-neutral-500 font-mono flex flex-wrap gap-x-4 gap-y-1">
                      <span>Dibuat: {token.createdAt.toLocaleString('id-ID')}</span>
                      {token.type === 'multi' && (
                        <span className="text-neutral-400 font-bold flex items-center gap-1">
                          <Zap className="w-3 h-3" /> Dipakai: {token.uses} kali
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => copyLink(token.id)}
                      className="flex items-center justify-center gap-1.5 h-9 px-3 rounded-lg text-xs font-semibold text-neutral-200 bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 hover:text-white transition-colors cursor-pointer"
                    >
                      {copiedId === token.id
                        ? <CheckCheck className="w-3.5 h-3.5 text-green-400" />
                        : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedId === token.id ? 'Tersalin!' : 'Salin'}</span>
                    </button>
                    <button
                      onClick={() => deleteToken(token.id)}
                      className="flex items-center justify-center gap-1.5 h-9 px-3 rounded-lg text-xs font-semibold text-destructive bg-destructive/5 border border-destructive/10 hover:bg-destructive/10 transition-colors cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Hapus</span>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
