import React from 'react';
import { ArrowRight, Tag } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const PRICING_COPY: Record<string, {
  title: string;
  lvl: string;
  access: string;
  strikePrice: string;
  mainPrice: string;
  promoLabel: string;
  promoPlaceholder: string;
  applyBtn: string;
  autoNote: string;
}> = {
  "id-ID": {
    title: "Daftar & Join Sekarang",
    lvl: "NEXCLASS",
    access: "Akses Premium Selamanya",
    strikePrice: "Rp999.000",
    mainPrice: "RP99.000",
    promoLabel: "Kode Promo",
    promoPlaceholder: "Masukkan kode...",
    applyBtn: "Terapkan",
    autoNote: "Akses otomatis terbuka setelah pembayaran berhasil",
  },
  "en-US": {
    title: "Register & Join Now",
    lvl: "NEXCLASS",
    access: "Lifetime Premium Access",
    strikePrice: "$99",
    mainPrice: "$9.99",
    promoLabel: "Promo Code",
    promoPlaceholder: "Enter code...",
    applyBtn: "Apply",
    autoNote: "Instant automatic access unlocked upon successful payment",
  },
  "es-ES": {
    title: "Regístrate y Únete Ahora",
    lvl: "NEXCLASS",
    access: "Acceso Premium de por Vida",
    strikePrice: "99 €",
    mainPrice: "9,99 €",
    promoLabel: "Código Promocional",
    promoPlaceholder: "Introduce código...",
    applyBtn: "Aplicar",
    autoNote: "Acceso automático instantáneo al completar el pago",
  },
  "fr-FR": {
    title: "Inscrivez-vous et Rejoignez",
    lvl: "NEXCLASS",
    access: "Accès Premium à Vie",
    strikePrice: "99 €",
    mainPrice: "9,99 €",
    promoLabel: "Code Promo",
    promoPlaceholder: "Entrez le code...",
    applyBtn: "Appliquer",
    autoNote: "Accès automatique débloqué après un paiement réussi",
  },
  "ja-JP": {
    title: "登録して今すぐ参加",
    lvl: "NEXCLASS",
    access: "永久プレミアムアクセス",
    strikePrice: "¥14,000",
    mainPrice: "¥1,400",
    promoLabel: "プロモコード",
    promoPlaceholder: "コードを入力...",
    applyBtn: "適用",
    autoNote: "お支払い完了後、自動的にアクセスが有効になります",
  },
  "de-DE": {
    title: "Registrieren & Beitreten",
    lvl: "NEXCLASS",
    access: "Lebenslanger Premium-Zugang",
    strikePrice: "99 €",
    mainPrice: "9,99 €",
    promoLabel: "Gutscheincode",
    promoPlaceholder: "Code eingeben...",
    applyBtn: "Anwenden",
    autoNote: "Automatischer Zugang sofort nach erfolgreicher Zahlung",
  },
  "zh-CN": {
    title: "立即注册加入",
    lvl: "NEXCLASS",
    access: "终身高级会员权限",
    strikePrice: "¥699",
    mainPrice: "¥69",
    promoLabel: "优惠码",
    promoPlaceholder: "输入代码...",
    applyBtn: "应用",
    autoNote: "支付成功后自动解锁访问权限",
  },
  "ru-RU": {
    title: "Зарегистрируйтесь и Присоединяйтесь",
    lvl: "NEXCLASS",
    access: "Пожизненный Премиум-доступ",
    strikePrice: "9 990 ₽",
    mainPrice: "990 ₽",
    promoLabel: "Промокод",
    promoPlaceholder: "Введите код...",
    applyBtn: "Применить",
    autoNote: "Мгновенный автоматический доступ после успешной оплаты",
  },
  "ar-SA": {
    title: "سجل وانضم الآن",
    lvl: "NEXCLASS",
    access: "وصول مميز مدى الحياة",
    strikePrice: "$99",
    mainPrice: "$9.99",
    promoLabel: "رمز ترويجي",
    promoPlaceholder: "أدخل الرمز...",
    applyBtn: "تطبيق",
    autoNote: "يتم فتح الوصول تلقائيًا فور نجاح الدفع",
  },
  "ko-KR": {
    title: "가입하고 지금 시작하기",
    lvl: "NEXCLASS",
    access: "평생 프리미엄 멤버십",
    strikePrice: "₩99,000",
    mainPrice: "₩19,000",
    promoLabel: "프로모션 코드",
    promoPlaceholder: "코드 입력...",
    applyBtn: "적용",
    autoNote: "결제 완료 후 즉시 액세스 권한이 자동으로 활성화됩니다",
  },
};

function PricingSection({ onNavigate }: { onNavigate: () => void }) {
  const { locale } = useLanguage();
  const copy = PRICING_COPY[locale] || PRICING_COPY["en-US"] || PRICING_COPY["id-ID"];

  return (
    <div className="w-full px-4 sm:px-6">
      <header className="mb-10 text-center">
        <h2 className="text-[28px] sm:text-3xl font-bold tracking-tight leading-tight text-white">
          {copy.title}
        </h2>
      </header>

      <div className="w-full max-w-sm mx-auto aspect-square">
        <div
          className="p-[2px] rounded-3xl h-full"
          style={{
            background: "linear-gradient(135deg, hsl(var(--brand-accent)), #000000 35%, hsl(var(--brand-accent)) 50%, #000000 65%, hsl(var(--brand-accent)))",
            boxShadow: "0 0 60px 5px hsl(var(--brand-accent)/0.3)",
          }}
        >
          <div className="relative bg-black rounded-[22.5px] overflow-hidden h-full">
            <div className="p-6 sm:p-8 relative z-10 h-full flex flex-col justify-between">
              
              <div>
                <div className="font-bold text-3xl tracking-tighter text-white mb-2">
                  {copy.lvl}
                </div>

                <p className="text-card-foreground text-xs sm:text-sm font-medium tracking-wide mb-6 uppercase">
                  {copy.access}
                </p>

                <div className="mb-1">
                  <span className="text-destructive line-through text-lg font-medium">{copy.strikePrice}</span>
                </div>
                <div>
                  <span className="text-white text-4xl sm:text-5xl font-extrabold tracking-tight">{copy.mainPrice}</span>
                </div>
              </div>

              <div className="space-y-3 mt-auto">
                <div>
                  <label className="text-muted-foreground text-[10px] font-bold uppercase tracking-widest mb-1.5 flex items-center gap-1.5 ml-1">
                    <Tag size={10} />
                    {copy.promoLabel}
                  </label>
                  <div className="flex gap-2 h-10 sm:h-11">
                    <input
                      type="text"
                      placeholder={copy.promoPlaceholder}
                      className="flex-1 min-w-0 bg-muted border border-border rounded-xl px-4 text-foreground text-xs sm:text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-muted-foreground"
                    />
                    <button className="shrink-0 bg-black hover:bg-muted text-foreground text-xs font-bold uppercase tracking-wider px-4 rounded-xl border border-border transition-colors">
                      {copy.applyBtn}
                    </button>
                  </div>
                </div>


                <p className="text-center text-muted-foreground text-[10px]">
                  {copy.autoNote}
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { PricingSection };
