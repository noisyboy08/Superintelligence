import { Link } from "react-router-dom";
import DetailLayout from "../components/DetailLayout";
import { blogPosts } from "../data";

export default function BlogPage() {
  return (
    <DetailLayout title="JOURNAL">
      {/* ── Hero ── */}
      <section className="px-8 md:px-16 pt-40 pb-20 max-w-7xl mx-auto">
        <p className="panel-label mb-6">JOURNAL</p>
        <h1 className="font-serif text-[clamp(4rem,9vw,9rem)] leading-[0.88] tracking-tight mb-8">
          Ideas worth<br />
          <em className="text-accent">reading.</em>
        </h1>
        <p className="text-white/50 text-base max-w-lg leading-relaxed">
          Thoughts on design, development, motion, and the craft of building digital products that actually matter.
        </p>
      </section>

      {/* ── Featured post (first) ── */}
      <section className="px-8 md:px-16 pb-16 border-b border-white/[0.07]">
        <div className="max-w-7xl mx-auto">
          {blogPosts[0] && (
            <Link to={`/blog/${blogPosts[0].slug}`} className="group block">
              <article className="grid lg:grid-cols-[1fr_1fr] gap-8 items-end rounded-2xl border border-white/[0.07] overflow-hidden hover:border-white/20 transition-all duration-500">
                <div
                  className="h-72 lg:h-96 relative overflow-hidden bg-[#0A0A0A]"
                  style={{
                    background:
                      "linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #0a0a0a 100%)",
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-serif text-[12rem] text-white/[0.04] leading-none select-none">
                      "
                    </span>
                  </div>
                  <div className="absolute top-6 left-6">
                    <span className="detail-tag">{blogPosts[0].category}</span>
                  </div>
                  <div className="absolute bottom-6 left-6">
                    <span className="text-accent text-[0.65rem] tracking-[0.2em]">
                      FEATURED
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-10">
                  <p className="text-xs text-white/35 tracking-[0.15em] mb-4">
                    {blogPosts[0].date} · {blogPosts[0].readTime}
                  </p>
                  <h2 className="font-serif text-[clamp(1.8rem,3vw,3rem)] leading-[1.05] mb-5 group-hover:text-accent transition-colors duration-300">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-white/55 text-sm leading-relaxed mb-8">
                    {blogPosts[0].excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-xs tracking-[0.18em] text-white/50 group-hover:text-accent transition-colors">
                    READ ARTICLE
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </div>
              </article>
            </Link>
          )}
        </div>
      </section>

      {/* ── All posts ── */}
      <section className="px-8 md:px-16 py-20">
        <div className="max-w-7xl mx-auto">
          <p className="panel-label mb-12">ALL ARTICLES</p>
          <div className="grid md:grid-cols-3 gap-5">
            {blogPosts.map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="group block">
                <article className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-7 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <span className="detail-tag">{post.category}</span>
                    <span className="text-[0.6rem] text-white/30 tracking-[0.15em]">
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-serif text-[clamp(1.4rem,1.8vw,1.8rem)] leading-[1.1] mb-4 flex-1 group-hover:text-accent transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-white/45 text-sm leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between border-t border-white/[0.07] pt-4">
                    <p className="text-[0.6rem] text-white/30 tracking-[0.12em]">{post.date}</p>
                    <span className="text-white/30 group-hover:text-accent group-hover:translate-x-1 transition-all text-sm">→</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section className="px-8 md:px-16 py-20 bg-[#040404] border-t border-white/[0.07]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="panel-label mb-6 text-center">STAY UPDATED</p>
          <h2 className="font-serif text-[clamp(2.5rem,5vw,5rem)] leading-[0.92] mb-6">
            Get new articles<br />
            <em className="text-accent">in your inbox.</em>
          </h2>
          <p className="text-white/45 text-sm mb-10">
            No spam. No frequency promises. Just good writing when we have something worth saying.
          </p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              className="c-input flex-1"
              placeholder="your@email.com"
              type="email"
            />
            <button className="detail-btn-accent whitespace-nowrap px-6">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </section>
    </DetailLayout>
  );
}
