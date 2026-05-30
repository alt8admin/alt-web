import Image from "next/image";

const footerLinks = {
  Services: ["Cloud Infrastructure", "Cybersecurity", "Custom Software", "IT Consulting", "Managed Services"],
  Company: ["About", "Careers", "Blog", "Press Kit"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

export default function Footer() {
  return (
    <footer className="bg-foreground text-white/70">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <a href="#hero" className="flex items-center gap-2 text-xl font-bold text-white mb-4">
              <Image src="/Logo.jpg" alt="ALT 8" width={36} height={36} className="rounded-lg object-cover" />
              ALT 8
            </a>
            <p className="text-sm text-white/50 max-w-xs leading-relaxed">
              Next-generation IT solutions for businesses that refuse to settle for average technology.
            </p>
          </div>
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-white font-semibold text-sm mb-4">{heading}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">&copy; {new Date().getFullYear()} ALT 8. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {["Twitter", "LinkedIn", "GitHub"].map((social) => (
              <a key={social} href="#" className="text-sm text-white/40 hover:text-white transition-colors">{social}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
