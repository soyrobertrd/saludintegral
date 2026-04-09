import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Share2, MapPin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-container-lowest text-on-surface pt-24 pb-12 px-8 border-t border-outline-variant/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          {/* Brand Column */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center">
              <Logo size={40} />
            </Link>
            <p className="text-sm text-on-surface-variant leading-relaxed max-w-[280px] font-medium opacity-80">
              Setting the global standard for high-end concierge healthcare through clinical excellence and humane care.
            </p>
          </div>

          {/* Medical Services Column */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-10 text-on-surface opacity-90">Medical Services</h4>
            <ul className="space-y-6">
              {[
                { name: "Cardiology", path: "/services" },
                { name: "Genomics", path: "/labs" },
                { name: "Regenerative Medicine", path: "/palliative-care" },
                { name: "Wellness Concierge", path: "/chronic-care" }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path} 
                    className="text-xs font-bold text-on-surface-variant hover:text-primary transition-colors tracking-wide"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-10 text-on-surface opacity-90">Navigation</h4>
            <ul className="space-y-6">
              {[
                { name: "About Us", path: "/about" },
                { name: "Privacy Policy", path: "/privacy" },
                { name: "Terms of Service", path: "/terms" },
                { name: "Contact Support", path: "/contact" }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path} 
                    className="text-xs font-bold text-on-surface-variant hover:text-primary transition-colors tracking-wide"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-10 text-on-surface opacity-90">Connect</h4>
            <div className="flex gap-4">
              {[
                { icon: Share2, path: "#" },
                { icon: MapPin, path: "/contact" },
                { icon: Mail, path: "/contact" }
              ].map((social, idx) => (
                <button 
                  key={idx} 
                  className="w-12 h-12 rounded-xl bg-surface-container-low flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all group border border-outline-variant/10 shadow-sm"
                >
                  <social.icon size={18} className="group-hover:scale-110 transition-transform" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer Separator */}
        <div className="h-px bg-outline-variant/10 w-full mb-12"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant opacity-60">
            &copy; {currentYear} Salud Integral. High-End Concierge Healthcare.
          </p>

          <div className="flex flex-wrap justify-center gap-10">
            {[
              { name: "Careers", path: "/careers" },
              { name: "Patient Rights", path: "/patient-rights" },
              { name: "Compliance", path: "/compliance" }
            ].map((item) => (
              <Link 
                key={item.name} 
                to={item.path} 
                className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors opacity-70"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
