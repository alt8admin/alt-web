export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.png')" }}
      >
        <div className="absolute inset-0 bg-white/85" />
      </div>
      <div className="absolute inset-0 -z-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-brand/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>
      <div
        className="absolute inset-0 -z-5 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, #6366f1 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 text-brand text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
            Now accepting new clients
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            Technology that <span className="gradient-text">elevates</span> your business
          </h1>
          <p className="text-lg sm:text-xl text-muted max-w-xl mb-8 leading-relaxed">
            ALT 8 is an information technology company specializing in cloud architecture, cybersecurity, and custom software that gives you a competitive edge.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand text-white font-semibold hover:bg-brand-dark transition-colors shadow-lg shadow-brand/25">
              Start a Project
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="#services" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-foreground/80 font-semibold hover:bg-surface transition-colors">
              Explore Services
            </a>
          </div>
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg">
            {[
              { value: "150+", label: "Projects Delivered" },
              { value: "99.9%", label: "Uptime SLA" },
              { value: "24/7", label: "Support" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
