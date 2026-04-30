import Link from "next/link";

const footerLinks = {
  services: [
    { name: "Bridal Makeup", href: "#" },
    { name: "Editorial & Fashion", href: "#" },
    { name: "Occasion Makeup", href: "#" },
    { name: "Makeup Workshops", href: "#" },
  ],
  company: [
    { name: "About Aruna", href: "#" },
    { name: "Portfolio", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ],
  social: [
    { name: "Instagram", href: "#" },
    { name: "Facebook", href: "#" },
    { name: "Pinterest", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-aruna-black text-aruna-ivory py-20 mt-auto">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="font-serif text-2xl tracking-[0.2em] mb-6">ARUNA</h2>
            <p className="text-sm text-neutral-400 font-light leading-relaxed max-w-xs">
              Professional makeup artistry dedicated to highlighting your unique beauty with a touch of luxury.
            </p>
          </div>

          {/* Links Sections */}
          <div>
            <h3 className="text-xs uppercase tracking-widest font-semibold mb-6 text-aruna-gold">Services</h3>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-neutral-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-widest font-semibold mb-6 text-aruna-gold">Quick Links</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-neutral-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-widest font-semibold mb-6 text-aruna-gold">Connect</h3>
            <ul className="space-y-4">
              {footerLinks.social.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-neutral-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:row items-center justify-between gap-4">
          <p className="text-[10px] uppercase tracking-widest text-neutral-500 font-medium">
            &copy; {new Date().getFullYear()} Aruna Makeup Artist. All Rights Reserved.
          </p>
          <p className="text-[10px] uppercase tracking-widest text-neutral-500 font-medium">
            Developed by Saiteja
          </p>
        </div>
      </div>
    </footer>
  );
}
