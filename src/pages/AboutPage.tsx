import { Link } from "react-router-dom";
import DetailLayout from "../components/DetailLayout";
import { team } from "../data";

const values = [
  {
    n: "01",
    title: "Craft over speed",
    desc: "We move quickly but never carelessly. Every detail is considered, every interaction intentional. Quality is non-negotiable.",
  },
  {
    n: "02",
    title: "Outcomes over deliverables",
    desc: "We measure success by the impact on your business, not by the files we deliver. A beautiful website that doesn't convert is a failure.",
  },
  {
    n: "03",
    title: "Honest over impressive",
    desc: "We tell you what we think, not what you want to hear. The best client relationships are built on candid communication.",
  },
  {
    n: "04",
    title: "Systems over one-offs",
    desc: "We build for scale. Everything we create — brand, product, code — is designed to grow with you, not against you.",
  },
];

const openRoles = [
  { title: "Senior Frontend Engineer", type: "Full-time · Remote" },
  { title: "Mid-level Brand Designer", type: "Full-time · Remote" },
  { title: "UX Researcher (contract)", type: "Contract · Remote" },
];

export default function AboutPage() {
  return (
    <DetailLayout title="ABOUT">
      {/* ── Hero ── */}
      <section className="relative min-h-[70vh] flex flex-col justify-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80"
          alt="Team"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />
        <div className="relative z-10 px-8 md:px-16 pb-20 pt-32 max-w-7xl mx-auto w-full">
          <p className="panel-label mb-6">ABOUT US</p>
          <h1 className="font-serif text-[clamp(3.5rem,8vw,8rem)] leading-[0.9] tracking-tight max-w-5xl">
            A small team building<br />
            <em className="text-accent">big ideas.</em>
          </h1>
        </div>
      </section>

      {/* ── Story ── */}
      <section className="px-8 md:px-16 py-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.5fr] gap-16 items-start">
          <div>
            <p className="panel-label mb-6">OUR STORY</p>
            <p className="font-serif text-[clamp(1.8rem,2.5vw,2.5rem)] leading-[1.1] text-white/90">
              We started because we were frustrated.
            </p>
          </div>
          <div className="space-y-5 text-white/60 text-base leading-relaxed pt-0 lg:pt-12">
            <p>
              Frustrated by agencies that charged enterprise prices for template-level work. Frustrated by development studios that shipped beautiful code that nobody could maintain. Frustrated by the artificial wall between design and engineering that produced handoff documents instead of working products.
            </p>
            <p>
              So in 2023, we built something different. A studio where designers write code and engineers think in systems. Where every project starts with a business problem and ends with a measurable result. Where the only metric that matters is whether it works.
            </p>
            <p>
              Three years later, we've worked with companies across luxury, fintech, SaaS, and AI — from pre-seed startups to Series C companies. The work is better because we care deeply about the craft. The relationships are better because we're honest about everything.
            </p>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="px-8 md:px-16 py-20 bg-[#040404] border-t border-white/[0.07]">
        <div className="max-w-7xl mx-auto">
          <p className="panel-label mb-14">WHAT WE BELIEVE</p>
          <div className="grid md:grid-cols-2 gap-px bg-white/[0.05]">
            {values.map((v) => (
              <div key={v.n} className="bg-[#040404] p-10 hover:bg-[#080808] transition-colors">
                <p className="text-accent text-[0.65rem] tracking-[0.25em] mb-5">{v.n}</p>
                <h3 className="font-serif text-[clamp(1.5rem,2vw,2rem)] mb-4">{v.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="px-8 md:px-16 py-24">
        <div className="max-w-7xl mx-auto">
          <p className="panel-label mb-14">THE TEAM</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {team.map((member) => (
              <article
                key={member.name}
                className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-8 hover:border-white/[0.15] hover:bg-white/[0.04] transition-all duration-300"
              >
                <div className="size-12 rounded-full bg-white/10 flex items-center justify-center mb-6">
                  <span className="font-serif text-xl text-white">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-serif text-2xl mb-1">{member.name}</h3>
                <p className="text-accent text-[0.65rem] tracking-[0.2em] uppercase mb-4">{member.role}</p>
                <p className="text-white/50 text-sm leading-relaxed">{member.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Open Roles ── */}
      <section className="px-8 md:px-16 py-20 bg-[#040404] border-t border-white/[0.07]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-14">
            <p className="panel-label">OPEN ROLES</p>
            <span className="text-accent text-xs tracking-[0.15em]">WE'RE HIRING</span>
          </div>
          <div className="grid gap-0">
            {openRoles.map((role) => (
              <div
                key={role.title}
                className="group flex items-center justify-between py-6 border-b border-white/[0.07] hover:border-white/20 cursor-pointer transition-all"
              >
                <div>
                  <h3 className="font-serif text-[clamp(1.4rem,2vw,2rem)] group-hover:text-accent transition-colors">
                    {role.title}
                  </h3>
                  <p className="text-xs text-white/40 mt-1 tracking-[0.1em]">{role.type}</p>
                </div>
                <span className="text-white/20 group-hover:text-accent group-hover:translate-x-2 transition-all text-xl">→</span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-xs text-white/30">
            Don't see your role?{" "}
            <Link to="/" className="text-white/60 hover:text-accent transition-colors">
              Reach out anyway →
            </Link>
          </p>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section className="border-t border-white/[0.07]">
        <div className="max-w-7xl mx-auto px-8 md:px-16 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.07]">
          {[
            { val: "3+", label: "Years in operation" },
            { val: "40+", label: "Projects shipped" },
            { val: "5", label: "Full-time team" },
            { val: "100%", label: "Remote first" },
          ].map((s) => (
            <div key={s.label} className="px-8 py-12 first:pl-0">
              <p className="font-serif text-[clamp(2.5rem,4vw,4rem)] text-white leading-none mb-2">
                {s.val}
              </p>
              <p className="text-xs text-white/40 tracking-[0.12em]">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-8 md:px-16 py-24 text-center">
        <h2 className="font-serif text-[clamp(3rem,6vw,6rem)] leading-[0.92] mb-8">
          Let's build something<br />
          <em className="text-accent">worth remembering.</em>
        </h2>
        <Link to="/" className="detail-btn-accent">
          START A PROJECT →
        </Link>
      </section>
    </DetailLayout>
  );
}
