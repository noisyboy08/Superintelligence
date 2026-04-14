import { useParams, Link } from "react-router-dom";
import DetailLayout from "../components/DetailLayout";
import { services, caseStudies } from "../data";

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <DetailLayout title="NOT FOUND">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <p className="font-serif text-8xl text-white/10 mb-6">404</p>
            <p className="text-white/50 text-sm mb-8">Service not found.</p>
            <Link to="/" className="detail-btn-outline">← GO HOME</Link>
          </div>
        </div>
      </DetailLayout>
    );
  }

  const relatedWork = caseStudies.filter((c) => service.relatedWork.includes(c.slug));

  return (
    <DetailLayout title={`${service.num} / ${service.title.toUpperCase()}`}>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
        <img
          src={service.heroImg}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover opacity-30 scale-105"
          style={{ filter: "grayscale(20%)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />
        <div className="relative z-10 px-8 md:px-16 pb-20 pt-32 max-w-7xl mx-auto w-full">
          <p className="panel-label mb-6">{service.num} — SERVICE</p>
          <h1 className="font-serif text-[clamp(4rem,10vw,10rem)] leading-[0.88] tracking-tight mb-8">
            {service.title}
          </h1>
          <p className="text-white/55 text-xl max-w-xl leading-relaxed">{service.tagline}</p>
        </div>
      </section>

      {/* ── Overview ── */}
      <section className="px-8 md:px-16 py-24 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16 items-start">
          <div>
            <p className="panel-label mb-6">OVERVIEW</p>
            <p className="font-serif text-[clamp(1.8rem,2.8vw,2.8rem)] leading-[1.1] text-white/90">
              {service.overview}
            </p>
          </div>
          <div className="pt-12 lg:pt-0">
            <p className="panel-label mb-6">THE CHALLENGE</p>
            <p className="text-white/60 text-base leading-relaxed">{service.challenge}</p>
            <div className="mt-10 flex flex-wrap gap-2">
              {service.tools.map((tool) => (
                <span key={tool} className="detail-tag">{tool}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Approach ── */}
      <section className="px-8 md:px-16 py-20 border-t border-white/[0.07] bg-[#040404]">
        <div className="max-w-7xl mx-auto">
          <p className="panel-label mb-16">OUR APPROACH</p>
          <div className="grid md:grid-cols-2 gap-px bg-white/[0.06]">
            {service.approach.map((step) => (
              <div key={step.step} className="bg-[#040404] p-10 hover:bg-[#080808] transition-colors">
                <p className="text-accent text-[0.65rem] tracking-[0.25em] mb-5">{step.step}</p>
                <h3 className="font-serif text-[clamp(1.6rem,2.2vw,2.2rem)] mb-4">{step.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Deliverables ── */}
      <section className="px-8 md:px-16 py-24 max-w-7xl mx-auto">
        <p className="panel-label mb-12">WHAT YOU GET</p>
        <div className="grid md:grid-cols-2 gap-4">
          {service.deliverables.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 py-5 border-b border-white/[0.07] group"
            >
              <span className="text-accent text-xs mt-1 shrink-0">→</span>
              <p className="text-white/75 text-sm leading-relaxed group-hover:text-white transition-colors">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Related Work ── */}
      {relatedWork.length > 0 && (
        <section className="px-8 md:px-16 py-20 border-t border-white/[0.07] bg-[#040404]">
          <div className="max-w-7xl mx-auto">
            <p className="panel-label mb-12">RELATED WORK</p>
            <div className="grid md:grid-cols-2 gap-5">
              {relatedWork.map((w) => (
                <Link key={w.slug} to={`/work/${w.slug}`} className="group block">
                  <article className="relative overflow-hidden rounded-2xl border border-white/[0.07] h-64 hover:border-white/20 transition-all duration-500">
                    <img
                      src={w.heroImg}
                      alt={w.name}
                      className="absolute inset-0 w-full h-full object-cover opacity-35 group-hover:opacity-55 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-[0.6rem] text-white/38 tracking-[0.2em] mb-2">{w.num}</p>
                      <h3 className="font-serif text-2xl text-white mb-1">{w.name}</h3>
                      <p className="text-xs text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                        {w.result}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="px-8 md:px-16 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <p className="panel-label mb-6 text-center">START A PROJECT</p>
          <h2 className="font-serif text-[clamp(3rem,6vw,6rem)] leading-[0.92] mb-8">
            Ready to build something<br />
            <em className="text-accent">remarkable?</em>
          </h2>
          <p className="text-white/50 text-sm max-w-md mx-auto mb-10">
            Tell us about your project and we'll get back within 24 hours.
          </p>
          <Link to="/" className="detail-btn-accent">
            GET IN TOUCH →
          </Link>
        </div>
      </section>
    </DetailLayout>
  );
}
