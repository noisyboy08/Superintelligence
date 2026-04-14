import { useParams, Link } from "react-router-dom";
import DetailLayout from "../components/DetailLayout";
import { blogPosts } from "../data";

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <DetailLayout title="NOT FOUND">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <p className="font-serif text-8xl text-white/10 mb-6">404</p>
            <p className="text-white/50 text-sm mb-8">Article not found.</p>
            <Link to="/blog" className="detail-btn-outline">← ALL ARTICLES</Link>
          </div>
        </div>
      </DetailLayout>
    );
  }

  const currentIdx = blogPosts.findIndex((p) => p.slug === slug);
  const relatedPosts = blogPosts.filter((_, i) => i !== currentIdx).slice(0, 2);

  return (
    <DetailLayout title={`JOURNAL · ${post.category.toUpperCase()}`}>
      {/* ── Article Header ── */}
      <section className="px-8 md:px-16 pt-40 pb-16 max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <span className="detail-tag">{post.category}</span>
          <span className="text-white/20 text-xs">·</span>
          <span className="text-white/40 text-xs tracking-[0.15em]">{post.date}</span>
          <span className="text-white/20 text-xs">·</span>
          <span className="text-white/40 text-xs tracking-[0.15em]">{post.readTime}</span>
        </div>
        <h1 className="font-serif text-[clamp(2.8rem,5.5vw,5.5rem)] leading-[0.94] tracking-tight mb-8">
          {post.title}
        </h1>
        <p className="text-white/55 text-lg leading-relaxed border-l-2 border-accent pl-6">
          {post.excerpt}
        </p>
      </section>

      {/* ── Decorative divider ── */}
      <div className="px-8 md:px-16 max-w-4xl mx-auto mb-16">
        <div className="h-px bg-gradient-to-r from-accent via-white/20 to-transparent" />
      </div>

      {/* ── Article Body ── */}
      <article className="px-8 md:px-16 pb-24 max-w-3xl mx-auto">
        {post.content.map((block, i) => {
          if (block.type === "h2") {
            return (
              <h2 key={i} className="font-serif text-[clamp(1.8rem,2.8vw,2.8rem)] leading-[1.05] mt-14 mb-6 text-white">
                {block.text}
              </h2>
            );
          }
          if (block.type === "h3") {
            return (
              <h3 key={i} className="font-serif text-[clamp(1.4rem,2vw,2rem)] leading-[1.1] mt-10 mb-4 text-white">
                {block.text}
              </h3>
            );
          }
          if (block.type === "quote") {
            return (
              <blockquote
                key={i}
                className="my-10 pl-6 border-l-2 border-accent"
              >
                <p className="font-serif text-[clamp(1.4rem,2.2vw,2.2rem)] leading-[1.15] text-white/80 italic">
                  {block.text}
                </p>
              </blockquote>
            );
          }
          return (
            <p key={i} className="text-white/65 text-base leading-[1.8] mt-5">
              {block.text}
            </p>
          );
        })}
      </article>

      {/* ── Author + share ── */}
      <section className="px-8 md:px-16 py-12 border-t border-white/[0.07] bg-[#040404]">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="size-12 rounded-full bg-white/10 flex items-center justify-center">
              <span className="font-serif text-lg">S</span>
            </div>
            <div>
              <p className="text-sm font-medium">Superintelligence Studio</p>
              <p className="text-xs text-white/40">Design & Engineering Studio</p>
            </div>
          </div>
          <Link
            to="/blog"
            className="text-xs tracking-[0.18em] text-white/40 hover:text-accent transition-colors"
          >
            ← ALL ARTICLES
          </Link>
        </div>
      </section>

      {/* ── Related posts ── */}
      <section className="px-8 md:px-16 py-20">
        <div className="max-w-7xl mx-auto">
          <p className="panel-label mb-10">KEEP READING</p>
          <div className="grid md:grid-cols-2 gap-5">
            {relatedPosts.map((p) => (
              <Link key={p.slug} to={`/blog/${p.slug}`} className="group block">
                <article className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-7 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="detail-tag">{p.category}</span>
                    <span className="text-[0.6rem] text-white/30">{p.readTime}</span>
                  </div>
                  <h3 className="font-serif text-[clamp(1.4rem,2vw,2rem)] leading-[1.05] mb-3 group-hover:text-accent transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-white/45 text-sm leading-relaxed line-clamp-2">{p.excerpt}</p>
                  <div className="mt-6 flex items-center gap-2 text-xs text-white/35 group-hover:text-accent transition-colors">
                    READ ARTICLE
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </DetailLayout>
  );
}
