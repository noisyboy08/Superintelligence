import { Link } from "react-router-dom";
import DetailLayout from "../components/DetailLayout";

export default function NotFoundPage() {
  return (
    <DetailLayout title="404">
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-8">
        <span
          aria-hidden
          className="font-serif absolute text-[35vw] text-white/[0.025] leading-none pointer-events-none select-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          404
        </span>
        <p className="panel-label mb-6">PAGE NOT FOUND</p>
        <h1 className="font-serif text-[clamp(4rem,10vw,10rem)] leading-[0.88] mb-8 relative z-10">
          Lost in<br />
          <em className="text-accent">the void.</em>
        </h1>
        <p className="text-white/45 text-sm max-w-sm mb-12 relative z-10">
          The page you're looking for doesn't exist — or maybe it never did.
        </p>
        <div className="flex flex-wrap gap-4 justify-center relative z-10">
          <Link to="/" className="detail-btn-accent">
            GO HOME →
          </Link>
          <Link to="/blog" className="detail-btn-outline">
            READ JOURNAL
          </Link>
        </div>
      </section>
    </DetailLayout>
  );
}
