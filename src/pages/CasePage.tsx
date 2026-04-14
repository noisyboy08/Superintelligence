import { useParams, Link } from "react-router-dom";
import DetailLayout from "../components/DetailLayout";
import { caseStudies, services } from "../data";

export default function CasePage() {
  const { slug } = useParams<{ slug: string }>();
  const cs = caseStudies.find((c) => c.slug === slug);

  if (!cs) {
    return (
      <DetailLayout title="NOT FOUND">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <p className="font-serif text-8xl text-white/10 mb-6">404</p>
            <p className="text-white/50 text-sm mb-8">Case study not found.</p>
            <Link to="/" className="detail-btn-outline">← GO HOME</Link>
          </div>
        </div>
      </DetailLayout>
    );
  }

  const currentIdx = caseStudies.findIndex((c) => c.slug === slug);
  const nextCase = caseStudies[(currentIdx + 1) % caseStudies.length];
  const usedServices = services.filter((s) => cs.services.includes(s.title));

  return (
    <DetailLayout title={`${cs.num} / CASE STUDY`}>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
        <img
          src={cs.heroImg}
          alt={cs.name}
          className="absolute inset-0 w-full h-full object-cover opacity-40 scale-105"
          style={{ filter: "grayscale(10%)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />
        <div className="relative z-10 px-8 md:px-16 pb-20 pt-32 max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-3 mb-6">
            <p className="panel-label">{cs.num} — CASE STUDY</p>
            <span className="text-white/20 text-[0.65rem]">·</span>
            <p className="text-[0.65rem] tracking-[0.2em] text-white/38 uppercase">{cs.category}</p>
            <span className="text-white/20 text-[0.65rem]">·</span>
            <p className="text-[0.65rem] tracking-[0.2em] text-white/38">{cs.year}</p>
          </div>
          <h1 className="font-serif text-[clamp(4rem,10vw,10rem)] leading-[0.88] tracking-tight">
            {cs.name}
          </h1>
        </div>
      </section>

      {/* ── Metrics ── */}
      <section className="border-b border-white/[0.07] bg-[#040404]">
        <div className="max-w-7xl mx-auto px-8 md:px-16 grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/[0.07]">
          {cs.metrics.map((m) => (
            <div key={m.label} className="px-8 py-10 first:pl-0">
              <p className="font-serif text-[clamp(2.5rem,4vw,4rem)] text-accent leading-none mb-3">
                {m.value}
              </p>
              <p className="text-xs text-white/45 tracking-[0.15em] uppercase">{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Overview + Challenge ── */}
      <section className="px-8 md:px-16 py-24 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="panel-label mb-6">OVERVIEW</p>
            <p className="text-white/70 text-base leading-relaxed">{cs.overview}</p>
          </div>
          <div>
            <p className="panel-label mb-6">THE CHALLENGE</p>
            <p className="text-white/70 text-base leading-relaxed">{cs.challenge}</p>
          </div>
        </div>
      </section>

      {/* ── Solution headline ── */}
      <section className="px-8 md:px-16 py-20 border-t border-white/[0.07]">
        <div className="max-w-5xl mx-auto">
          <p className="panel-label mb-8">THE SOLUTION</p>
          <p className="font-serif text-[clamp(1.8rem,3vw,3rem)] leading-[1.1] text-white/90">
            {cs.solution}
          </p>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="px-8 md:px-16 py-20 bg-[#040404] border-t border-white/[0.07]">
        <div className="max-w-7xl mx-auto">
          <p className="panel-label mb-16">PROCESS</p>
          <div className="grid gap-0">
            {cs.process.map((p) => (
              <div
                key={p.phase}
                className="grid md:grid-cols-[120px_1fr_1fr] gap-6 py-10 border-b border-white/[0.07] hover:bg-white/[0.015] transition-colors px-4 -mx-4 group"
              >
                <p className="text-accent text-xs tracking-[0.25em]">PHASE {p.phase}</p>
                <h3 className="font-serif text-[clamp(1.4rem,2vw,2rem)]">{p.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="px-8 md:px-16 py-20">
        <div className="max-w-7xl mx-auto">
          <p className="panel-label mb-10">VISUALS</p>
          <div className="grid md:grid-cols-3 gap-4">
            {cs.galleryImgs.map((src, idx) => (
              <div
                key={idx}
                className={`overflow-hidden rounded-2xl border border-white/[0.07] ${idx === 0 ? "md:col-span-2 h-72" : "h-56"}`}
              >
                <img
                  src={src}
                  alt={`${cs.name} visual ${idx + 1}`}
                  className="w-full h-full object-cover opacity-60 hover:opacity-80 hover:scale-105 transition-all duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech stack & services used ── */}
      <section className="px-8 md:px-16 py-20 border-t border-white/[0.07] bg-[#040404]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <p className="panel-label mb-8">TECH STACK</p>
            <div className="flex flex-wrap gap-2">
              {cs.techStack.map((t) => (
                <span key={t} className="detail-tag">{t}</span>
              ))}
            </div>
          </div>
          <div>
            <p className="panel-label mb-8">SERVICES USED</p>
            <div className="flex flex-col gap-3">
              {usedServices.map((s) => (
                <Link
                  key={s.slug}
                  to={`/service/${s.slug}`}
                  className="flex items-center justify-between py-3 border-b border-white/[0.07] hover:border-white/20 group transition-colors"
                >
                  <span className="text-sm text-white/70 group-hover:text-white transition-colors">
                    {s.title}
                  </span>
                  <span className="text-white/30 group-hover:text-accent group-hover:translate-x-1 transition-all text-sm">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Next project ── */}
      <section className="border-t border-white/[0.07]">
        <Link
          to={`/work/${nextCase.slug}`}
          className="group block px-8 md:px-16 py-20 relative overflow-hidden"
        >
          <img
            src={nextCase.heroImg}
            alt={nextCase.name}
            className="absolute inset-0 w-full h-full object-cover opacity-15 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/30" />
          <div className="relative z-10 max-w-7xl mx-auto">
            <p className="panel-label mb-4">NEXT PROJECT</p>
            <h2 className="font-serif text-[clamp(3rem,7vw,7rem)] leading-[0.9] group-hover:text-accent transition-colors duration-300">
              {nextCase.name}
            </h2>
            <p className="mt-4 text-white/40 text-sm">{nextCase.result} →</p>
          </div>
        </Link>
      </section>
    </DetailLayout>
  );
}
