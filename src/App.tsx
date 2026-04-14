import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { services as serviceData, caseStudies } from "./data";

const PANEL_COUNT = 9;
const SECTIONS = ["INTRO", "ABOUT", "SERVICES", "WORK", "PROCESS", "VOICES", "PRICING", "CONTACT"];

const quotes = [
  { q: "The site feels like a campaign film, but loads incredibly fast.", by: "Maya — Product Lead" },
  { q: "Exactly the aesthetic and performance balance we wanted.", by: "Riya — Founder" },
  { q: "Our brand now looks unmistakable and conversion improved instantly.", by: "Noah — CMO" },
];

const pricing = [
  { tier: "Starter", price: "$49", detail: "Single-page launch site", featured: false },
  { tier: "Studio", price: "$149", detail: "Full multi-section website", featured: true },
  { tier: "Enterprise", price: "Custom", detail: "Scalable design system + engineering", featured: false },
];

const marqueeParts = [
  "BRAND SYSTEM", "·", "WEB EXPERIENCE", "·", "PRODUCT DESIGN", "·",
  "CREATIVE DEV", "·", "MOTION IDENTITY", "·", "EDITORIAL LAYOUTS", "·",
];

export default function App() {
  const driverRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const targetXRef = useRef(0);
  const currentXRef = useRef(0);
  const rafRef = useRef<number>(0);
  const [activePanel, setActivePanel] = useState(0);
  const [progress, setProgress] = useState(0);
  const [quoteIdx, setQuoteIdx] = useState(0);
  const [introVisible, setIntroVisible] = useState(true);
  const [introLeaving, setIntroLeaving] = useState(false);

  /* ── Intro screen ── */
  useEffect(() => {
    const t1 = setTimeout(() => setIntroLeaving(true), 1800);
    const t2 = setTimeout(() => setIntroVisible(false), 2500);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  /* ── Horizontal scroll via RAF lerp ── */
  useEffect(() => {
    const isMobile = () => window.innerWidth < 768;

    const onScroll = () => {
      if (isMobile()) return;
      const driver = driverRef.current;
      const track = trackRef.current;
      if (!driver || !track) return;
      const maxScroll = driver.offsetHeight - window.innerHeight;
      const prog = maxScroll > 0 ? Math.min(Math.max(window.scrollY / maxScroll, 0), 1) : 0;
      setProgress(prog);
      setActivePanel(Math.round(prog * (PANEL_COUNT - 1)));
      targetXRef.current = -prog * (track.offsetWidth - window.innerWidth);
    };

    const tick = () => {
      if (!isMobile()) {
        const track = trackRef.current;
        if (track) {
          const diff = targetXRef.current - currentXRef.current;
          currentXRef.current += diff * 0.1;
          if (Math.abs(diff) < 0.3) currentXRef.current = targetXRef.current;
          track.style.transform = `translateX(${currentXRef.current}px)`;
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  /* ── Keyboard arrow navigation ── */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        scrollToPanel(Math.min(activePanel + 1, PANEL_COUNT - 1));
      }
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        scrollToPanel(Math.max(activePanel - 1, 0));
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activePanel]);

  /* ── Custom cursor ── */
  useEffect(() => {
    if (window.innerWidth < 768) return;
    let tx = 0, ty = 0, cx = 0, cy = 0;
    const ring = cursorRingRef.current;
    const dot = cursorDotRef.current;
    if (!ring || !dot) return;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX; ty = e.clientY;
      dot.style.transform = `translate(${tx - 3}px, ${ty - 3}px)`;
    };
    let animId: number;
    const animCursor = () => {
      cx += (tx - cx) * 0.12;
      cy += (ty - cy) * 0.12;
      ring.style.transform = `translate(${cx - 18}px, ${cy - 18}px)`;
      animId = requestAnimationFrame(animCursor);
    };
    window.addEventListener("mousemove", onMove);
    animId = requestAnimationFrame(animCursor);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  const scrollToPanel = (idx: number) => {
    const driver = driverRef.current;
    if (!driver) return;
    const maxScroll = driver.offsetHeight - window.innerHeight;
    window.scrollTo({ top: (idx / (PANEL_COUNT - 1)) * maxScroll, behavior: "smooth" });
  };

  return (
    <>
      {/* ── Intro screen ── */}
      {introVisible && (
        <div
          className="fixed inset-0 z-[200] bg-black flex items-center justify-center"
          style={{
            opacity: introLeaving ? 0 : 1,
            transition: "opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <div className="text-center">
            <div
              className="size-14 rounded-full bg-white flex items-center justify-center text-black text-2xl mx-auto mb-6"
              style={{
                transform: introLeaving ? "scale(0.8)" : "scale(1)",
                transition: "transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              ✳
            </div>
            <p
              className="text-xs tracking-[0.35em] text-white/60 uppercase"
              style={{
                opacity: introLeaving ? 0 : 1,
                transform: introLeaving ? "translateY(-8px)" : "translateY(0)",
                transition: "opacity 0.5s ease, transform 0.5s ease",
              }}
            >
              SUPERINTELLIGENCE
            </p>
          </div>
        </div>
      )}

      {/* Custom cursor */}
      <div ref={cursorRingRef} className="cursor-ring" />
      <div ref={cursorDotRef} className="cursor-dot" />

      {/* Film grain */}
      <div className="noise-overlay" />
      <div className="guide-lines" />

      {/* ── TOP NAV ── */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-12 py-5 mix-blend-difference pointer-events-none">
        <Link to="/" className="flex items-center gap-3 pointer-events-auto hover:opacity-75 transition-opacity">
          <div className="size-8 rounded-full bg-white flex items-center justify-center text-black text-sm font-bold select-none">
            ✳
          </div>
          <span className="text-white text-xs tracking-[0.22em] font-medium hidden sm:block">
            SUPERINTELLIGENCE
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-7 pointer-events-auto">
          {SECTIONS.map((s, i) => (
            <button
              key={s}
              onClick={() => scrollToPanel(i + 1)}
              className="text-white/55 text-[0.65rem] tracking-[0.18em] hover:text-white transition-colors duration-200"
            >
              {s}
            </button>
          ))}
        </nav>
        <button
          onClick={() => scrollToPanel(8)}
          className="pointer-events-auto text-white text-[0.65rem] tracking-[0.18em] px-5 py-2 border border-white/30 rounded-full hover:bg-white hover:text-black transition-all duration-300"
        >
          LAUNCH APP
        </button>
      </header>

      {/* ── SIDE NAV DOTS ── */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-[7px]">
        {Array.from({ length: PANEL_COUNT }).map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToPanel(i)}
            title={i === 0 ? "Hero" : SECTIONS[i - 1]}
            className="rounded-full transition-all duration-500 focus:outline-none"
            style={{
              width: "5px",
              height: i === activePanel ? "28px" : "5px",
              background: i === activePanel ? "#c8ff47" : "rgba(255,255,255,0.22)",
            }}
          />
        ))}
      </div>

      {/* ── KEYBOARD HINT (bottom center, fades after first interaction) ── */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center gap-2 pointer-events-none"
        style={{ opacity: activePanel === 0 ? 0.4 : 0, transition: "opacity 0.5s" }}>
        <span className="text-[0.55rem] tracking-[0.2em] text-white/60">USE ARROW KEYS</span>
        <span className="text-white/40 text-xs">← →</span>
      </div>

      {/* ── BOTTOM PROGRESS BAR ── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 h-px bg-white/10">
        <div className="h-full bg-[#c8ff47] transition-none" style={{ width: `${progress * 100}%` }} />
      </div>

      {/* ── CURRENT SECTION LABEL ── */}
      <div className="fixed bottom-5 left-8 z-50 hidden md:block">
        <p className="text-[0.6rem] tracking-[0.28em] text-white/35 uppercase">
          {activePanel === 0 ? "00 / HERO" : `0${activePanel} / ${SECTIONS[activePanel - 1]}`}
        </p>
      </div>

      {/* ══════════════════════════════════════
          SCROLL DRIVER
      ══════════════════════════════════════ */}
      <div ref={driverRef} className="scroll-driver" style={{ height: `${PANEL_COUNT * 100}vh` }}>
        <div className="sticky-wrapper sticky top-0 h-screen overflow-hidden">
          <div ref={trackRef} className="h-track" style={{ width: `${PANEL_COUNT * 100}vw` }}>

            {/* ════════════════════════════════
                PANEL 1 — HERO
            ════════════════════════════════ */}
            <section className="panel bg-black">
              <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover video-zoom">
                <source src="https://res.cloudinary.com/dfonotyfb/video/upload/v1775585556/dds3_1_rqhg7x.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-black/65 z-[1]" />
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-8">
                <p className="animate-fade-rise text-[0.65rem] tracking-[0.35em] uppercase text-white/65 mb-7">
                  AI-first Assistant
                </p>
                <h1 className="animate-fade-rise-delay font-serif text-[clamp(3.2rem,9.5vw,9rem)] leading-[0.9] tracking-tight max-w-6xl">
                  Superintelligence<br /><em>on-device</em>
                </h1>
                <p className="animate-fade-rise-delay-2 mt-6 text-white/55 text-sm max-w-sm leading-relaxed">
                  The most advanced AI assistant. Private. Fast. Entirely yours.
                </p>
                <button
                  onClick={() => scrollToPanel(1)}
                  className="animate-fade-rise-delay-2 mt-10 px-8 py-3 text-xs tracking-[0.18em] rounded-full border border-white/30 bg-white/[0.06] backdrop-blur-md hover:bg-white hover:text-black transition-all duration-300"
                >
                  EXPLORE →
                </button>
              </div>
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 animate-fade-rise-delay-2">
                <span className="text-white/35 text-[0.6rem] tracking-[0.3em] uppercase">Scroll</span>
                <div className="scroll-hint-line" />
              </div>
            </section>

            {/* ════════════════════════════════
                PANEL 2 — MANIFESTO
            ════════════════════════════════ */}
            <section className="panel bg-[#040404] flex items-center justify-center">
              <span aria-hidden className="font-serif absolute top-1/2 right-6 -translate-y-1/2 text-[28vw] leading-none text-white/[0.028] pointer-events-none select-none">01</span>
              <div className="relative z-10 px-12 md:px-20 max-w-5xl w-full">
                <p className="panel-label mb-10">01 — INTRO</p>
                <h2 className="font-serif text-[clamp(2.8rem,6.5vw,6.5rem)] leading-[0.92] tracking-tight">
                  We build digital experiences that feel&nbsp;
                  <em className="text-accent">inevitable.</em>
                </h2>
                <div className="mt-16 grid grid-cols-3 gap-10 border-t border-white/[0.08] pt-10">
                  {[
                    { val: "48h", label: "Average turnaround" },
                    { val: "100%", label: "Client satisfaction" },
                    { val: "2026", label: "Design recognition" },
                  ].map((s) => (
                    <div key={s.label}>
                      <p className="font-serif text-[clamp(2.5rem,4.5vw,4.5rem)] text-white leading-none">{s.val}</p>
                      <p className="mt-2 text-xs text-white/45 tracking-[0.1em]">{s.label}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-10 flex gap-4">
                  <Link to="/about" className="text-[0.65rem] tracking-[0.2em] text-white/45 hover:text-accent transition-colors flex items-center gap-2">
                    OUR STORY <span className="h-px w-6 bg-current inline-block" />
                  </Link>
                  <Link to="/blog" className="text-[0.65rem] tracking-[0.2em] text-white/45 hover:text-accent transition-colors flex items-center gap-2">
                    JOURNAL <span className="h-px w-6 bg-current inline-block" />
                  </Link>
                </div>
              </div>
            </section>

            {/* ════════════════════════════════
                PANEL 3 — ABOUT
            ════════════════════════════════ */}
            <section className="panel bg-[#070707] flex">
              <span aria-hidden className="font-serif absolute bottom-0 left-0 text-[28vw] leading-none text-white/[0.025] pointer-events-none select-none translate-y-[20%]">WE</span>
              <div className="w-1/2 h-full relative border-r border-white/[0.06] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=1200&q=80"
                  alt="About visual"
                  className="absolute inset-0 w-full h-full object-cover opacity-45 scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#070707]/60" />
              </div>
              <div className="w-1/2 h-full flex flex-col justify-center px-12 md:px-16 relative z-10">
                <p className="panel-label mb-10">02 — ABOUT</p>
                <h2 className="font-serif text-[clamp(2.2rem,3.8vw,4.2rem)] leading-[0.93] tracking-tight mb-8">
                  Premium digital<br />experiences for<br />next-generation<br />brands.
                </h2>
                <p className="text-white/55 text-sm leading-relaxed max-w-sm">
                  We combine art direction, product strategy, and engineering to craft websites that feel iconic, perform fast, and convert with intent.
                </p>
                <Link
                  to="/about"
                  className="mt-10 inline-flex items-center gap-3 text-[0.72rem] tracking-[0.2em] text-accent hover:gap-5 transition-all duration-300"
                >
                  <span>VIEW STORY</span>
                  <span className="h-px w-10 bg-current" />
                </Link>
              </div>
            </section>

            {/* ════════════════════════════════
                PANEL 4 — SERVICES
            ════════════════════════════════ */}
            <section className="panel bg-black flex flex-col justify-center px-12 md:px-20">
              <span aria-hidden className="font-serif absolute right-0 top-1/2 -translate-y-1/2 translate-x-[20%] text-[25vw] leading-none text-white/[0.025] pointer-events-none select-none">03</span>
              <p className="panel-label mb-14">03 — SERVICES</p>
              <div>
                {serviceData.map((s) => (
                  <Link key={s.slug} to={`/service/${s.slug}`} className="service-row group">
                    <span className="service-num">{s.num}</span>
                    <span className="service-title">{s.title}</span>
                    <span className="service-desc hidden lg:block">{s.shortDesc}</span>
                    <span className="service-arrow">→</span>
                  </Link>
                ))}
              </div>
            </section>

            {/* ════════════════════════════════
                PANEL 5 — WORK
            ════════════════════════════════ */}
            <section className="panel bg-[#040404] flex flex-col justify-center px-12 md:px-20">
              <p className="panel-label mb-10">04 — WORK</p>
              <div className="grid grid-cols-3 gap-5" style={{ height: "62vh" }}>
                {caseStudies.map((w, i) => (
                  <Link key={w.slug} to={`/work/${w.slug}`} className="work-card" style={{ marginTop: i === 1 ? "3vh" : "0" }}>
                    <img src={w.heroImg} alt={w.name} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-transparent" />
                    <div className="work-card-body">
                      <p className="text-[0.6rem] text-white/38 tracking-[0.22em] mb-2">{w.num}</p>
                      <h3 className="font-serif text-[clamp(1.6rem,2.2vw,2.2rem)] text-white leading-tight mb-2">{w.name}</h3>
                      <p className="work-result text-[0.72rem] tracking-[0.12em]">{w.result}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* ════════════════════════════════
                PANEL 6 — PROCESS
            ════════════════════════════════ */}
            <section className="panel bg-black flex flex-col justify-center px-12 md:px-20">
              <span aria-hidden className="font-serif absolute left-0 top-0 -translate-x-[18%] -translate-y-[18%] text-[32vw] leading-none text-white/[0.022] pointer-events-none select-none">DO</span>
              <p className="panel-label mb-10">05 — PROCESS</p>
              <h2 className="font-serif text-[clamp(2.8rem,5vw,5rem)] leading-[0.92] mb-16 max-w-xl">
                How we<br /><em>make it</em><br />happen.
              </h2>
              <div className="grid grid-cols-3 gap-10 max-w-4xl">
                {[
                  { n: "01", title: "Editorial Layouts", desc: "Asymmetric grids and rhythm-led composition for unforgettable first impressions." },
                  { n: "02", title: "Bold Typography", desc: "High-contrast typographic hierarchy with premium pacing and perfect scale." },
                  { n: "03", title: "Motion Identity", desc: "Subtle animation that supports narrative flow without sacrificing speed." },
                ].map((f) => (
                  <div key={f.n} className="border-t border-white/10 pt-6">
                    <p className="text-[0.65rem] text-accent tracking-[0.25em] mb-4">{f.n}</p>
                    <h3 className="font-serif text-[clamp(1.4rem,1.8vw,1.9rem)] mb-3">{f.title}</h3>
                    <p className="text-xs text-white/50 leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
              {/* Marquee */}
              <div className="absolute bottom-0 left-0 right-0 overflow-hidden border-t border-white/[0.07] py-3">
                <div className="marquee-inner">
                  {[...marqueeParts, ...marqueeParts].map((part, i) => (
                    <span key={i} className={`mx-5 text-[0.6rem] tracking-[0.28em] ${part === "·" ? "text-accent" : "text-white/20"}`}>
                      {part}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            {/* ════════════════════════════════
                PANEL 7 — VOICES
            ════════════════════════════════ */}
            <section className="panel bg-[#060606] flex items-center justify-center">
              <span aria-hidden className="font-serif absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[58%] text-[45vw] leading-none text-white/[0.022] pointer-events-none select-none">"</span>
              <div className="relative z-10 px-12 md:px-20 max-w-5xl w-full text-center">
                <p className="panel-label mb-12 text-center">06 — VOICES</p>
                <blockquote className="font-serif text-[clamp(2.2rem,4.8vw,5rem)] leading-[1.0] tracking-tight" key={quoteIdx}>
                  "{quotes[quoteIdx].q.split(/(incredibly fast\.|inevitable\.|instantly\.)/g).map((part, i) =>
                    /incredibly fast\.|inevitable\.|instantly\./.test(part) ? (
                      <em key={i} className="text-accent not-italic">{part}</em>
                    ) : part
                  )}"
                </blockquote>
                <p className="mt-8 text-white/45 text-xs tracking-[0.25em] uppercase">{quotes[quoteIdx].by}</p>
                <div className="mt-12 flex justify-center gap-6">
                  {quotes.map((q, i) => (
                    <button
                      key={i}
                      onClick={() => setQuoteIdx(i)}
                      className={`text-[0.65rem] tracking-[0.18em] transition-colors duration-200 ${i === quoteIdx ? "text-accent" : "text-white/30 hover:text-white/60"}`}
                    >
                      {q.by.split(" — ")[0]}
                    </button>
                  ))}
                </div>
              </div>
            </section>

            {/* ════════════════════════════════
                PANEL 8 — PRICING
            ════════════════════════════════ */}
            <section className="panel bg-black flex flex-col justify-center px-12 md:px-20">
              <span aria-hidden className="font-serif absolute right-6 bottom-0 translate-y-[20%] text-[28vw] leading-none text-white/[0.025] pointer-events-none select-none">07</span>
              <p className="panel-label mb-10">07 — PRICING</p>
              <h2 className="font-serif text-[clamp(2.8rem,4.5vw,4.5rem)] leading-[0.92] mb-14">
                Simple,<br /><em>honest pricing.</em>
              </h2>
              <div className="grid grid-cols-3 gap-5 max-w-4xl">
                {pricing.map((p) => (
                  <article
                    key={p.tier}
                    className={`rounded-2xl p-7 border transition-all duration-300 ${p.featured ? "bg-white text-black border-white" : "bg-white/[0.03] border-white/[0.08] hover:border-white/[0.2]"}`}
                  >
                    <p className={`text-[0.62rem] uppercase tracking-[0.2em] mb-5 ${p.featured ? "text-black/45" : "text-white/38"}`}>{p.tier}</p>
                    <p className={`font-serif text-[clamp(3rem,5vw,5rem)] leading-none mb-5 ${p.featured ? "text-black" : "text-white"}`}>{p.price}</p>
                    <p className={`text-sm leading-relaxed mb-8 ${p.featured ? "text-black/65" : "text-white/50"}`}>{p.detail}</p>
                    <button
                      onClick={() => scrollToPanel(8)}
                      className={`w-full py-3 rounded-full text-[0.65rem] tracking-[0.18em] border transition-all duration-300 ${p.featured ? "bg-black text-white border-black hover:bg-black/80" : "border-white/18 text-white/60 hover:border-white/40 hover:text-white"}`}
                    >
                      GET STARTED
                    </button>
                  </article>
                ))}
              </div>
            </section>

            {/* ════════════════════════════════
                PANEL 9 — CONTACT
            ════════════════════════════════ */}
            <section id="contact" className="panel bg-[#040404] flex">
              <span aria-hidden className="font-serif absolute bottom-0 right-0 translate-x-[15%] translate-y-[20%] text-[20vw] leading-none text-white/[0.025] pointer-events-none select-none">END</span>
              {/* Left */}
              <div className="w-1/2 h-full flex flex-col justify-between p-14 md:p-16 border-r border-white/[0.07] relative z-10">
                <p className="panel-label">08 — CONTACT</p>
                <div>
                  <h2 className="font-serif text-[clamp(3rem,4.8vw,5.2rem)] leading-[0.92] tracking-tight">
                    Build a website<br />people<br /><em className="text-accent">remember.</em>
                  </h2>
                  <p className="mt-6 text-white/45 text-sm max-w-xs leading-relaxed">
                    Start the conversation and we'll respond within 24 hours.
                  </p>
                  <div className="mt-10 flex flex-col gap-1 text-xs text-white/28">
                    <p>hello@superintelligence.ai</p>
                    <p>+1 (555) 000-0000</p>
                  </div>
                </div>
                <div className="flex gap-6 text-[0.6rem] text-white/22">
                  <Link to="/about" className="hover:text-white/50 transition-colors tracking-[0.15em]">ABOUT</Link>
                  <Link to="/blog" className="hover:text-white/50 transition-colors tracking-[0.15em]">JOURNAL</Link>
                  <span className="text-white/15">©2026 SUPERINTELLIGENCE</span>
                </div>
              </div>
              {/* Right — form */}
              <div className="w-1/2 h-full flex flex-col justify-center p-14 md:p-16 relative z-10">
                <div className="flex flex-col gap-4 max-w-md w-full">
                  <input className="c-input" placeholder="Your name" />
                  <input className="c-input" placeholder="Email address" type="email" />
                  <input className="c-input" placeholder="Project type" />
                  <textarea className="c-input resize-none" style={{ minHeight: "7rem" }} placeholder="Tell us about your project" />
                  <button type="button" className="mt-2 w-full py-4 rounded-full bg-[#c8ff47] text-black text-[0.72rem] tracking-[0.2em] font-medium hover:bg-white transition-all duration-300">
                    SEND MESSAGE →
                  </button>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>

      {/* ── BLOG PREVIEW strip (outside scroll driver — sticky footer hint) ── */}
      {activePanel === PANEL_COUNT - 1 && (
        <div className="fixed bottom-6 right-8 z-50 hidden md:flex gap-3">
          <Link
            to="/blog"
            className="text-[0.6rem] tracking-[0.2em] text-white/35 hover:text-accent transition-colors px-3 py-1.5 border border-white/10 rounded-full hover:border-accent"
          >
            JOURNAL →
          </Link>
          <Link
            to="/about"
            className="text-[0.6rem] tracking-[0.2em] text-white/35 hover:text-accent transition-colors px-3 py-1.5 border border-white/10 rounded-full hover:border-accent"
          >
            ABOUT →
          </Link>
        </div>
      )}
    </>
  );
}
