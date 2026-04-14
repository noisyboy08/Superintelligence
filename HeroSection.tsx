import "./hero.css";

const navItems = ["PRODUCTS", "RESEARCH", "DOCS", "PRICING", "CONTACT"];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden text-white">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 video-zoom"
      >
        <source
          src="https://res.cloudinary.com/dfonotyfb/video/upload/v1775585556/dds3_1_rqhg7x.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 z-0 bg-black/30" />

      <div className="relative z-10">
        <div className="flex justify-center pt-6">
          <nav
            className="flex items-center gap-2 px-2 py-2 rounded-full border border-white/15"
            style={{
              background: "rgba(20,20,20,0.6)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              boxShadow: "inset 0 1px 1px rgba(255,255,255,0.1)",
            }}
          >
            <button
              type="button"
              className="size-10 rounded-full flex items-center justify-center bg-white text-black text-lg"
              aria-label="Home"
            >
              ✳
            </button>

            {navItems.map((item) => (
              <button
                key={item}
                type="button"
                className="px-5 py-2 rounded-full bg-black/80 text-white text-sm border border-white/10 hover:bg-white/10 transition"
              >
                {item}
              </button>
            ))}
          </nav>
        </div>

        <div className="flex flex-col items-center justify-center text-center px-6 pt-32 pb-40 min-h-[calc(100vh-96px)]">
          <p className="animate-fade-rise text-xs px-4 py-1 rounded-full bg-white/10 backdrop-blur-md text-white/80 mb-6 font-ui">
            AI-first Assistant
          </p>

          <h1 className="animate-fade-rise-delay text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-2px] max-w-5xl font-serif">
            Superintelligence on-device
          </h1>

          <button
            type="button"
            className="animate-fade-rise-delay-2 mt-10 px-6 py-2.5 text-sm rounded-full border border-white/20 bg-white/[0.05] backdrop-blur-md hover:scale-[1.03] transition"
          >
            LAUNCH APP →
          </button>
        </div>
      </div>
    </section>
  );
}
