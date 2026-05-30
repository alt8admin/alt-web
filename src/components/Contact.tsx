export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="text-sm font-semibold text-brand uppercase tracking-widest">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4 tracking-tight">Let&apos;s build something great</h2>
          <p className="text-muted">
            Ready to elevate your technology? Fill out the form and our team will get back to you within 24 hours.
          </p>
        </div>
        <form className="max-w-xl mx-auto space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium mb-1.5">First Name</label>
              <input type="text" placeholder="John" className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-shadow text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Last Name</label>
              <input type="text" placeholder="Doe" className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-shadow text-sm" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5">Email</label>
            <input type="email" placeholder="john@company.com" className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-shadow text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5">Service Interest</label>
            <select className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-shadow text-sm text-muted">
              <option value="">Select a service...</option>
              <option>Cloud Infrastructure</option>
              <option>Cybersecurity</option>
              <option>Custom Software Development</option>
              <option>Digital Transformation</option>
              <option>IT Consulting</option>
              <option>Managed IT Services</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5">Message</label>
            <textarea rows={4} placeholder="Tell us about your project..." className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-shadow text-sm resize-none" />
          </div>
          <button type="submit" className="w-full py-3 rounded-xl bg-brand text-white font-semibold hover:bg-brand-dark transition-colors shadow-lg shadow-brand/25">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
