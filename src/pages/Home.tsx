import React, { useEffect, useState, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";
import { motion, AnimatePresence, useInView } from "motion/react";
import { ArrowRight } from "lucide-react";
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
  "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=640&h=360&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=640&h=360&auto=format&fit=crop"
];

const FEATURE_PLACEHOLDER_IMAGES = [
  "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=640&h=360&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?q=80&w=640&h=360&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=640&h=360&auto=format&fit=crop"
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
                  title="ElevateAcademy Introduction"
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
                  <div className="rounded-xl border border-foreground/10 bg-foreground/[0.03] overflow-hidden mb-3">
                    <img
                      src={FEATURE_PLACEHOLDER_IMAGES[i]}
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
      <footer className="border-t border-foreground/[0.06] py-10 bg-[#06070d]">
        <div className="container mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center text-white font-bold text-xs"
              style={{ background: "hsl(var(--brand-accent))" }}
            >
              EA
            </div>
            <span className="font-semibold text-[15px]">ElevateAcademy</span>
          </div>
          <span className="text-[12px] text-foreground/25">{t("footer_copyright")}</span>
        </div>
      </footer>
    </div>
  );
}
