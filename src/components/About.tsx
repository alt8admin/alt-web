export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-semibold text-brand uppercase tracking-widest">About ALT 8</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-6 tracking-tight">
              Built by engineers, <br />
              <span className="gradient-text">driven by results</span>
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              ALT 8 was founded on a simple belief: technology should be an accelerator, not a bottleneck. We&apos;re a team of senior engineers, architects, and security specialists who&apos;ve shipped at scale — from Fortune 500 cloud migrations to zero-to-one startup launches.
            </p>
            <p className="text-muted leading-relaxed mb-8">
              We don&apos;t do buzzwords. We do reliable infrastructure, clean code, and transparent communication. Every engagement starts with understanding your business goals — not your tech stack.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Founded", value: "2019" },
                { label: "Team Size", value: "35+ Engineers" },
                { label: "Offices", value: "NYC, London, Remote" },
                { label: "Industries", value: "Fintech, Health, E-com" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="text-2xl font-bold">{item.value}</div>
                  <div className="text-sm text-muted">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-brand/20 via-accent/10 to-brand/5 flex items-center justify-center overflow-hidden">
              <div className="text-center p-12">
                <div className="text-8xl font-black gradient-text mb-4">8</div>
                <p className="text-muted text-sm max-w-xs mx-auto">
                  The &quot;8&quot; represents infinite potential — sideways, it&apos;s the symbol for infinity.
                </p>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl border border-border p-4 flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
              <div>
                <div className="text-sm font-semibold">ISO 27001 Certified</div>
                <div className="text-xs text-muted">Security & compliance</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
