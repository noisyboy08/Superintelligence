import { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
  title?: string;
}

export default function DetailLayout({ children, title }: Props) {
  const [visible, setVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  /* Entrance animation */
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 40);
    return () => clearTimeout(t);
  }, []);

  /* Header blur on scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Custom cursor */
  useEffect(() => {
    if (window.innerWidth < 768) return;
    let tx = 0, ty = 0, cx = 0, cy = 0;
    const ring = cursorRingRef.current;
    const dot = cursorDotRef.current;
    if (!ring || !dot) return;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      dot.style.transform = `translate(${tx - 3}px, ${ty - 3}px)`;
    };

    let animId: number;
    const tick = () => {
      cx += (tx - cx) * 0.12;
      cy += (ty - cy) * 0.12;
      ring.style.transform = `translate(${cx - 18}px, ${cy - 18}px)`;
      animId = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    animId = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  /* Scroll to top on mount */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Custom cursor */}
      <div ref={cursorRingRef} className="cursor-ring" />
      <div ref={cursorDotRef} className="cursor-dot" />

      {/* Film grain */}
      <div className="noise-overlay" />

      {/* Fixed header */}
      <header
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-12 py-5 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(0,0,0,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
        }}
      >
        <Link
          to="/"
          className="flex items-center gap-3 hover:opacity-70 transition-opacity"
        >
          <div className="size-8 rounded-full bg-white flex items-center justify-center text-black text-sm font-bold select-none">
            ✳
          </div>
          <span className="text-white text-xs tracking-[0.22em] font-medium hidden sm:block">
            SUPERINTELLIGENCE
          </span>
        </Link>

        {title && (
          <p className="text-white/40 text-[0.65rem] tracking-[0.2em] uppercase hidden md:block">
            {title}
          </p>
        )}

        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-white/60 text-xs tracking-[0.18em] hover:text-white transition-colors group"
        >
          <span className="group-hover:-translate-x-1 transition-transform duration-200">←</span>
          <span>BACK</span>
        </button>
      </header>

      {/* Page content */}
      <main
        className="bg-black text-white min-h-screen"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.65s cubic-bezier(0.16,1,0.3,1), transform 0.65s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-white/[0.07] px-8 md:px-12 py-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <Link to="/" className="text-xs tracking-[0.2em] text-white/30 hover:text-white/60 transition-colors">
            SUPERINTELLIGENCE
          </Link>
          <div className="flex gap-6">
            <Link to="/about" className="text-xs text-white/30 hover:text-white/60 transition-colors tracking-[0.12em]">ABOUT</Link>
            <Link to="/blog" className="text-xs text-white/30 hover:text-white/60 transition-colors tracking-[0.12em]">BLOG</Link>
            <Link to="/#contact" className="text-xs text-white/30 hover:text-white/60 transition-colors tracking-[0.12em]">CONTACT</Link>
          </div>
          <p className="text-[0.6rem] text-white/20 tracking-[0.1em]">© 2026 · All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
