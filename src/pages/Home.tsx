import React, { useEffect, useState, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";
import { motion, AnimatePresence, useInView } from "motion/react";
import { ArrowRight, X, MapPin, Mail, Phone, ExternalLink, ShieldCheck, FileText, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { PricingSection } from "@/components/PricingSection";
import { LanguageSwitcher } from "../components/LanguageSwitcher";

// Replace this with your actual YouTube video ID
const YOUTUBE_VIDEO_ID = "8mAITcNt710";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const TUTORIAL_PLACEHOLDER_IMAGES = [
  "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1200&h=675&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1200&h=675&auto=format&fit=crop"
];

const FEATURE_PLACEHOLDER_IMAGES = [
  "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=1200&h=675&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?q=80&w=1200&h=675&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&h=675&auto=format&fit=crop"
];

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  key?: React.Key | null;
}

function Section({ children, className = "" }: SectionProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      variants={stagger}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const { t, locale, setLocale } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [activeModal, setActiveModal] = useState<null | 'about' | 'contact' | 'privacy' | 'terms'>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#features", label: t("nav_features") },
    { href: "#pricing", label: t("nav_pricing") },
  ];

  const FEATURES = [
    { title: t("feature_1_title"), desc: t("feature_1_desc") },
    { title: t("feature_2_title"), desc: t("feature_2_desc") },
    { title: t("feature_3_title"), desc: t("feature_3_desc") },
  ];

  const TUTORIALS = [
    { title: t("tutorial_1_title"), desc: t("tutorial_1_desc") },
    { title: t("tutorial_2_title"), desc: t("tutorial_2_desc") },
  ];

  const STATS = [
    { val: t("hero_stat_students_val"), label: t("hero_stat_students_label") },
    { val: t("hero_stat_courses_val"), label: t("hero_stat_courses_label") },
    { val: t("hero_stat_languages_val"), label: t("hero_stat_languages_label") },
    { val: t("hero_stat_instructors_val"), label: t("hero_stat_instructors_label") },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-[hsl(var(--brand-accent)/0.3)]">

      {/* ── NAVBAR ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/90 backdrop-blur-xl border-b border-foreground/[0.06]" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center shrink-0">
            <span className="font-extrabold text-xl tracking-tight">
              NEX<span style={{ color: "hsl(var(--brand-accent))" }}>CLASS</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-[13.5px] font-medium text-foreground/60">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-foreground transition-colors py-1">
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop right — language selector */}
          <div className="hidden md:flex items-center gap-2">
            <LanguageSwitcher variant="desktop" />
          </div>

          {/* Mobile right — language selector */}
          <div className="flex md:hidden items-center gap-1">
            <LanguageSwitcher variant="desktop" />
          </div>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="relative min-h-[100svh] flex items-center pt-36 pb-16 overflow-hidden">
        {/* Background glow */}
        <div
          className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(700px,90vw)] aspect-square rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, hsl(var(--brand-accent)/0.18) 0%, transparent 70%)", filter: "blur(60px)" }}
        />
        <div
          className="absolute bottom-0 right-[-10%] w-[min(500px,70vw)] aspect-square rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, hsl(var(--brand-accent)/0.07) 0%, transparent 70%)", filter: "blur(80px)" }}
        />

        <div className="container mx-auto px-5 sm:px-8 relative z-10">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1
              variants={fadeUp}
              className="text-[clamp(2.6rem,8vw,5.5rem)] font-black tracking-tight leading-[1.05] mb-6 whitespace-pre-line"
            >
              {t("hero_headline")}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-[clamp(1rem,2.5vw,1.2rem)] text-foreground/50 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              {t("hero_subheadline")}
            </motion.p>

            {/* YouTube embed */}
            <motion.div variants={fadeUp} className="mb-8 w-full max-w-2xl mx-auto">
              <div className="relative w-full rounded-2xl overflow-hidden border border-foreground/[0.08]" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`}
                  title="NexClass Introduction"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link to="/courses" className="w-full sm:w-auto">
                <button
                  className="group w-full sm:w-auto h-13 sm:h-12 px-8 rounded-full text-[15px] font-semibold text-white flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
                  style={{ background: "hsl(var(--brand-accent))", boxShadow: "0 0 32px hsl(var(--brand-accent)/0.4)" }}
                >
                  {t("hero_primary_cta")}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              className="mt-10 pt-10 border-t border-foreground/[0.07] grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4"
            >
              {STATS.map((s, i) => (
                <div key={i} className="flex flex-col items-center sm:items-start gap-1">
                  <span className="text-[clamp(1.6rem,4vw,2.2rem)] font-black tracking-tight text-foreground">
                    {s.val}
                  </span>
                  <span className="text-[11.5px] font-medium text-foreground/40 uppercase tracking-widest leading-tight text-center sm:text-left">
                    {s.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="features" className="pt-14 sm:pt-16 pb-4 sm:pb-6 relative overflow-hidden">
        <div
          className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-[min(400px,60vw)] aspect-square rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, hsl(var(--brand-accent)/0.08) 0%, transparent 70%)", filter: "blur(80px)" }}
        />
        <div className="relative z-10 pl-2 sm:pl-4 pr-5 sm:pr-8">
          <Section className="mb-10 text-center max-w-2xl mx-auto">
            <motion.h2 variants={fadeUp} className="text-[clamp(1.8rem,5vw,3rem)] font-bold tracking-tight">
              {t("features_label")}
            </motion.h2>
          </Section>

          <Section className="grid md:grid-cols-3 gap-x-8">
            {FEATURES.map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="flex items-stretch">
                {/* Checkmark + connector */}
                <div className="flex flex-col items-center mr-4">
                  <div
                    className="relative z-10 flex items-center justify-center w-6 h-6 shrink-0 rounded-full border border-foreground/10 transition-colors duration-300"
                    style={{
                      background: "hsl(var(--brand-accent))",
                      boxShadow: "0 4px 12px hsl(var(--brand-accent)/0.3)",
                    }}
                  >
                    <span className="text-white font-bold text-xs leading-none">✔</span>
                  </div>
                  {i !== FEATURES.length - 1 && (
                    <div className="w-[1.5px] bg-foreground/10 mt-1 flex-1 md:hidden" />
                  )}
                </div>
                {/* Text */}
                <div className="pb-8 pt-0 flex-1">
                  <div className="relative rounded-xl border border-foreground/10 bg-foreground/[0.03] overflow-hidden mb-3">
                    <img
                      src={FEATURE_PLACEHOLDER_IMAGES[i]}
                      alt=""
                      className="w-full aspect-video object-cover"
                      loading="lazy"
                      aria-hidden="true"
                    />
                    {/* Deep professional gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent pointer-events-none" />
                  </div>
                  <h3 className="text-[17px] font-semibold mb-1.5 leading-snug">{item.title}</h3>
                  <p className="text-[15px] text-foreground/50 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </Section>
        </div>
      </section>

      {/* ── TUTORIAL ── */}
      <section id="tutorial" className="pt-4 sm:pt-6 pb-14 sm:pb-16 relative overflow-hidden">
        <div
          className="absolute left-[-5%] top-1/2 -translate-y-1/2 w-[min(400px,60vw)] aspect-square rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, hsl(var(--brand-accent)/0.08) 0%, transparent 70%)", filter: "blur(80px)" }}
        />
        <div className="relative z-10 pl-2 sm:pl-4 pr-5 sm:pr-8">
          <Section className="mb-10 text-center max-w-2xl mx-auto">
            <motion.h2 variants={fadeUp} className="text-[clamp(1.8rem,5vw,3rem)] font-bold tracking-tight">
              {t("tutorial_label")}
            </motion.h2>
          </Section>

          <Section className="w-full">
            {TUTORIALS.map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="flex items-stretch">
                {/* Number + connector */}
                <div className="flex flex-col items-center mr-4">
                  <div
                    className="relative z-10 flex items-center justify-center w-6 h-6 shrink-0 rounded-full border border-foreground/10 transition-colors duration-300"
                    style={{
                      background: "hsl(var(--brand-accent))",
                      boxShadow: "0 4px 12px hsl(var(--brand-accent)/0.3)",
                    }}
                  >
                    <span className="text-white font-bold text-[10px] leading-none">{i + 1}</span>
                  </div>
                  {i !== TUTORIALS.length - 1 && (
                    <div className="w-[1.5px] bg-foreground/10 mt-1 flex-1" />
                  )}
                </div>
                {/* Text */}
                <div className="pb-8 pt-0 flex-1">
                  <div className="rounded-xl border border-foreground/10 bg-foreground/[0.03] overflow-hidden mb-3">
                    <img
                      src={TUTORIAL_PLACEHOLDER_IMAGES[i]}
                      alt=""
                      className="w-full aspect-video object-cover"
                      loading="lazy"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-[17px] font-semibold mb-1.5 leading-snug">{item.title}</h3>
                  <p className="text-[15px] text-foreground/50 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </Section>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" className="py-14 sm:py-16 bg-black">
        <PricingSection onNavigate={() => console.log("Navigate to payment")} />
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-foreground/[0.06] py-8 bg-[#06070d] relative z-20 text-[13px] text-foreground/50">
        <div className="container mx-auto px-5 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Brand and Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <div className="flex items-center gap-2">
              <div
                className="w-6 h-6 rounded flex items-center justify-center text-white font-bold text-[11px]"
                style={{ background: "hsl(var(--brand-accent))" }}
              >
                EA
              </div>
              <span className="font-bold text-white tracking-tight">
                NEX<span style={{ color: "hsl(var(--brand-accent))" }}>CLASS</span>
              </span>
            </div>
            <span className="hidden sm:inline text-foreground/15">|</span>
            <span className="text-[11px] text-foreground/30 font-mono">{t("footer_copyright")}</span>
          </div>

          {/* Right: Quick transparency links inline */}
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <button
              onClick={() => setActiveModal('about')}
              className="hover:text-white transition-colors cursor-pointer text-xs"
            >
              Tentang Kami
            </button>
            <button
              onClick={() => setActiveModal('privacy')}
              className="hover:text-white transition-colors cursor-pointer text-xs"
            >
              Kebijakan Privasi
            </button>
            <button
              onClick={() => setActiveModal('terms')}
              className="hover:text-white transition-colors cursor-pointer text-xs"
            >
              Syarat & Ketentuan
            </button>
          </div>
        </div>
      </footer>

      {/* ── MODALS SYSTEM FOR TRANSPARENCY ── */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/75 backdrop-blur-md z-[100] flex items-center justify-center p-4"
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative bg-neutral-900 border border-neutral-800 rounded-2xl w-full max-w-lg overflow-hidden flex flex-col max-h-[85vh] text-left shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-950/60">
                <div className="flex items-center gap-2">
                  {activeModal === 'about' && <Users className="w-5 h-5" style={{ color: "hsl(var(--brand-accent))" }} />}
                  {activeModal === 'contact' && <MapPin className="w-5 h-5" style={{ color: "hsl(var(--brand-accent))" }} />}
                  {activeModal === 'privacy' && <ShieldCheck className="w-5 h-5" style={{ color: "hsl(var(--brand-accent))" }} />}
                  {activeModal === 'terms' && <FileText className="w-5 h-5" style={{ color: "hsl(var(--brand-accent))" }} />}
                  <h3 className="font-bold text-lg text-white">
                    {activeModal === 'about' && "Tentang NEXCLASS"}
                    {activeModal === 'contact' && "Hubungi Kami & Alamat"}
                    {activeModal === 'privacy' && "Kebijakan Privasi"}
                    {activeModal === 'terms' && "Syarat & Ketentuan"}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveModal(null)}
                  className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto space-y-5 text-sm text-neutral-300 leading-relaxed">
                {activeModal === 'about' && (
                  <div className="space-y-5">
                    <div>
                      <h4 className="font-semibold text-white mb-1.5">Cerita Singkat</h4>
                      <p className="text-neutral-400 text-[13.5px]">
                        NEXCLASS didirikan untuk menghadirkan revolusi dalam pembelajaran digital. Kami fokus memberikan materi yang relevan dengan kebutuhan industri saat ini, memadukan teori fundamental dengan praktik coding langsung dalam browser, sehingga setiap lulusan kami siap bersaing secara global.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-1">
                      <div>
                        <h4 className="font-semibold text-white mb-1">Visi Kami</h4>
                        <p className="text-neutral-400 text-[12.5px] leading-snug">
                          Menjadi ekosistem pendidikan teknologi digital paling inklusif, inovatif, dan diakui secara global.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Misi Kami</h4>
                        <ul className="text-neutral-400 text-[12.5px] leading-snug list-disc pl-4 space-y-1">
                          <li>Kurikulum standar industri dunia.</li>
                          <li>Materi interaktif berbasis praktik.</li>
                          <li>Koneksi mentor ahli langsung.</li>
                        </ul>
                      </div>
                    </div>

                    <div className="border-t border-neutral-800 pt-4">
                      <h4 className="font-semibold text-white mb-3 flex items-center gap-1.5">
                        <Users className="w-4 h-4" style={{ color: "hsl(var(--brand-accent))" }} />
                        Pendiri & Tim Pengembang
                      </h4>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <img
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&h=300&auto=format&fit=crop"
                            alt="Adrian Wijaya"
                            className="w-11 h-11 rounded-full object-cover border border-neutral-700"
                            referrerPolicy="no-referrer"
                          />
                          <div>
                            <div className="font-semibold text-white text-[13.5px]">Adrian Wijaya, M.T.</div>
                            <div className="text-neutral-500 text-xs">CEO & Founder (Ex-Technical Architect Netflix)</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <img
                            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&h=300&auto=format&fit=crop"
                            alt="Dr. Sarah Amanda"
                            className="w-11 h-11 rounded-full object-cover border border-neutral-700"
                            referrerPolicy="no-referrer"
                          />
                          <div>
                            <div className="font-semibold text-white text-[13.5px]">Dr. Sarah Amanda</div>
                            <div className="text-neutral-500 text-xs">Chief Academic Officer (Senior AI Researcher)</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeModal === 'contact' && (
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-white mb-1">Alamat Kantor Fisik</h4>
                      <p className="text-neutral-400 text-[13px] flex items-start gap-2">
                        <MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "hsl(var(--brand-accent))" }} />
                        <span>Menara Edukasi Digital, Lantai 12, Jl. Jendral Sudirman No. 45, Kebayoran Baru, Jakarta Selatan, DKI Jakarta 12190</span>
                      </p>
                    </div>

                    {/* Google Maps embed code as an iframe */}
                    <div className="overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950/40">
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.27364670003!2d106.816666!3d-6.222222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3fb7d9d6eef%3A0x673edc8cf7df5a2b!2sPacific%20Place!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid" 
                        width="100%" 
                        height="180" 
                        style={{ border: 0 }} 
                        allowFullScreen={false} 
                        loading="lazy" 
                        referrerPolicy="no-referrer"
                        title="Lokasi Kantor NEXCLASS"
                      />
                    </div>

                    <div className="border-t border-neutral-800 pt-4 grid grid-cols-2 gap-3">
                      <a
                        href="https://wa.me/6281234567890?text=Halo%20NEXCLASS,%20saya%20ingin%20bertanya%20mengenai%20kelas%20pembelajaran."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col p-3 rounded-xl border border-emerald-500/10 bg-emerald-500/[0.02] hover:bg-emerald-500/[0.05] hover:border-emerald-500/20 transition-all text-left"
                      >
                        <span className="text-emerald-400 font-semibold text-[11px] tracking-wider uppercase mb-1 font-mono flex items-center gap-1">
                          <Phone className="w-3 h-3" /> WhatsApp Resmi
                        </span>
                        <span className="text-white text-xs font-semibold">+62 812-3456-7890</span>
                        <span className="text-neutral-500 text-[10px] mt-1 underline flex items-center gap-0.5">Kirim pesan <ExternalLink className="w-2.5 h-2.5" /></span>
                      </a>

                      <a
                        href="mailto:halo@nexclass.id"
                        className="flex flex-col p-3 rounded-xl border border-blue-500/10 bg-blue-500/[0.02] hover:bg-blue-500/[0.05] hover:border-blue-500/20 transition-all text-left"
                      >
                        <span className="text-blue-400 font-semibold text-[11px] tracking-wider uppercase mb-1 font-mono flex items-center gap-1">
                          <Mail className="w-3 h-3" /> Email Bisnis
                        </span>
                        <span className="text-white text-xs font-semibold">halo@nexclass.id</span>
                        <span className="text-neutral-500 text-[10px] mt-1 underline flex items-center gap-0.5">Kirim email <ExternalLink className="w-2.5 h-2.5" /></span>
                      </a>
                    </div>
                  </div>
                )}

                {activeModal === 'privacy' && (
                  <div className="space-y-4">
                    <p className="text-neutral-400 text-xs">Pembaruan terakhir: Juli 2026</p>
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-semibold text-white mb-1">1. Pengumpulan Informasi</h5>
                        <p className="text-neutral-400 text-[12.5px]">Kami mengumpulkan informasi yang Anda berikan secara sukarela seperti nama lengkap, alamat email, dan nomor kontak saat melakukan pendaftaran akun untuk keperluan penyediaan layanan pembelajaran.</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-white mb-1">2. Keamanan Data Pribadi</h5>
                        <p className="text-neutral-400 text-[12.5px]">Seluruh informasi dilindungi dengan enkripsi SSL/TLS tingkat tinggi. Kami menjamin kerahasiaan penuh dan tidak akan pernah menjual, menyewakan, atau mendistribusikan data pribadi Anda ke pihak ketiga.</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-white mb-1">3. Penggunaan Cookies</h5>
                        <p className="text-neutral-400 text-[12.5px]">Platform kami menggunakan cookies fungsional untuk menyimpan preferensi bahasa belajar, mempermudah navigasi, serta meningkatkan pengalaman belajar interaktif Anda.</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-white mb-1">4. Hak Akses & Penghapusan</h5>
                        <p className="text-neutral-400 text-[12.5px]">Anda berhak meminta akses penuh ke data Anda atau meminta penghapusan akun secara permanen dari server kami melalui permohonan ke email tim dpo kami di <span className="text-white hover:underline">privacy@nexclass.id</span>.</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeModal === 'terms' && (
                  <div className="space-y-4">
                    <p className="text-neutral-400 text-xs">Pembaruan terakhir: Juli 2026</p>
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-semibold text-white mb-1">1. Pendaftaran & Akun</h5>
                        <p className="text-neutral-400 text-[12.5px]">Anda wajib memberikan informasi akurat dan menjaga kerahasiaan login akun pribadi Anda. Berbagi kredensial masuk dengan pengguna lain dilarang dan dapat mengakibatkan penangguhan layanan.</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-white mb-1">2. Hak Kekayaan Intelektual</h5>
                        <p className="text-neutral-400 text-[12.5px]">Seluruh konten video, materi silabus, diagram, dan kode latihan dalam NEXCLASS adalah milik intelektual berlisensi resmi. Tindakan penggandaan atau distribusi ilegal akan dikenakan sanksi hukum.</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-white mb-1">3. Kebijakan Refund & Kepuasan</h5>
                        <p className="text-neutral-400 text-[12.5px]">Setiap pembelian kursus dilindungi garansi 14-hari uang kembali apabila Anda tidak puas dengan kualitas materi atau menemukan kendala teknis yang tidak dapat diselesaikan oleh tim bantuan kami.</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-white mb-1">4. Batasan Tanggung Jawab</h5>
                        <p className="text-neutral-400 text-[12.5px]">NEXCLASS berupaya menghadirkan materi terbaik, namun kami tidak bertanggung jawab atas kegagalan dalam pencarian kerja yang disebabkan oleh faktor eksternal atau di luar kendali pengajaran platform kami.</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-4 border-t border-neutral-800 bg-neutral-950/60 flex justify-end">
                <button
                  onClick={() => setActiveModal(null)}
                  className="px-4 py-2 bg-white hover:bg-neutral-200 text-black text-xs font-bold rounded-lg transition-colors cursor-pointer"
                >
                  Selesai
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
