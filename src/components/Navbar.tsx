import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, Stethoscope, Beaker, HeartPulse, Activity } from 'lucide-react';
import Logo from './Logo';

const serviceItems = [
  { name: 'Consultas Médicas', path: '/services', icon: <Stethoscope size={16} /> },
  { name: 'Analíticas de Laboratorio', path: '/labs', icon: <Beaker size={16} /> },
  { name: 'Cuidados Crónicos', path: '/chronic-care', icon: <HeartPulse size={16} /> },
  { name: 'Cuidados Paliativos', path: '/palliative-care', icon: <Activity size={16} /> },
];

// Navbar items configuration moved to hardcoded links below for optimization

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setIsServicesOpen(false);
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinkClass = (path: string) => `
    px-3 py-2 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all duration-300 whitespace-nowrap
    ${location.pathname === path 
      ? 'text-primary bg-primary/5' 
      : isScrolled || location.pathname !== '/' ? 'text-on-surface-variant hover:text-primary hover:bg-primary/5' : 'text-white/80 hover:text-white hover:bg-white/10'
    }
  `;

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 flex items-center 
      ${isScrolled 
        ? 'h-16 bg-surface-container-lowest border-b border-outline-variant/10 shadow-lg' 
        : 'h-20 bg-transparent border-b border-transparent'
      } lg:${isScrolled ? 'h-16' : 'h-20'}`}
    >
      <div className="max-w-7xl mx-auto w-full px-8 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className={`flex items-center transition-all duration-500 hover:scale-105 ${!isScrolled && location.pathname === '/' ? 'brightness-0 invert' : ''}`}>
          <Logo size={40} />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden xl:flex items-center gap-2">
          <header>
            <nav>
              <ul className="flex items-center gap-1">
                {/* 1. Inicio */}
                <li><Link to="/" className={navLinkClass('/')}>Inicio</Link></li>
                
                {/* 2. Sobre Nosotros */}
                <li><Link to="/about" className={navLinkClass('/about')}>Sobre Nosotros</Link></li>
                
                {/* 3. Servicios Dropdown */}
                <li className="relative" ref={dropdownRef}>
                  <button 
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className={`flex items-center gap-1 px-4 py-2 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all duration-300
                    ${isServicesOpen || location.pathname.includes('/services') 
                        ? 'text-primary bg-primary/5' 
                        : isScrolled || location.pathname !== '/' ? 'text-on-surface-variant hover:text-primary hover:bg-primary/5' : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    Servicios <ChevronDown size={14} className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-surface-container-lowest rounded-2xl shadow-2xl border border-outline-variant/10 p-3"
                      >
                        {serviceItems.map((item) => (
                          <Link 
                            key={item.path} 
                            to={item.path} 
                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary/5 transition-all duration-300 group hover:translate-x-1"
                          >
                            <div className="text-primary/40 group-hover:text-primary transition-colors">
                              {item.icon}
                            </div>
                            <span className="text-[11px] font-black uppercase tracking-widest text-on-surface-variant group-hover:text-primary transition-colors">
                              {item.name}
                            </span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>

                {/* 4. Nuestro Personal */}
                <li><Link to="/staff" className={navLinkClass('/staff')}>Nuestro Personal</Link></li>

                {/* 5. Blog */}
                <li><Link to="/blog" className={navLinkClass('/blog')}>Blog</Link></li>

                {/* 6. Contacto */}
                <li><Link to="/contact" className={navLinkClass('/contact')}>Contacto</Link></li>
              </ul>
            </nav>
          </header>

          {/* 7. Acceder & 8. Reservar Cita */}
          <div className="flex items-center gap-4 ml-6">
            <Link 
              to="/portal" 
              className={`px-4 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all duration-300 border 
              ${isScrolled || location.pathname !== '/' 
                ? 'text-on-surface border-outline-variant/10 hover:bg-surface-container-high hover:border-primary/20' 
                : 'text-white border-white/20 hover:bg-white/10'
              } hover:scale-[1.02] hover:-translate-y-0.5 active:scale-95`}
            >
              Acceder
            </Link>
            <Link 
              to="/booking" 
              className="bg-primary text-on-primary px-4 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-primary-container transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-xl hover:scale-[1.02] hover:-translate-y-0.5 active:scale-95"
            >
              Agendar Cita
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          className={`xl:hidden w-10 h-10 flex items-center justify-center transition-all duration-300 rounded-full hover:bg-primary/5
            ${isScrolled || location.pathname !== '/' ? 'text-on-surface' : 'text-white'}`}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-20 left-0 w-full bg-surface-container-lowest border-b border-outline-variant/10 xl:hidden overflow-hidden shadow-2xl"
          >
            <div className="p-8 space-y-6">
              <nav>
                <ul className="space-y-4 text-center">
                  <li><Link to="/" className="text-sm font-black uppercase tracking-widest text-on-surface hover:text-primary transition-colors block py-2">Inicio</Link></li>
                  <li><Link to="/about" className="text-sm font-black uppercase tracking-widest text-on-surface hover:text-primary transition-colors block py-2">Sobre Nosotros</Link></li>
                  <li><Link to="/services" className="text-sm font-black uppercase tracking-widest text-on-surface hover:text-primary transition-colors block py-2">Servicios</Link></li>
                  <li><Link to="/staff" className="text-sm font-black uppercase tracking-widest text-on-surface hover:text-primary transition-colors block py-2">Nuestro Personal</Link></li>
                  <li><Link to="/blog" className="text-sm font-black uppercase tracking-widest text-on-surface hover:text-primary transition-colors block py-2">Blog</Link></li>
                  <li><Link to="/contact" className="text-sm font-black uppercase tracking-widest text-primary transition-colors block py-2">Contacto</Link></li>
                  
                  <li className="pt-6 border-t border-outline-variant/5">
                    <div className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest mb-6">Acciones Rápidas</div>
                    <div className="grid grid-cols-2 gap-4">
                      <Link to="/portal" className="flex items-center justify-center bg-surface-container-low py-5 rounded-xl text-xs font-black uppercase tracking-widest text-on-surface hover:bg-surface-container-high transition-colors">Acceder</Link>
                      <Link to="/booking" className="flex items-center justify-center bg-primary text-on-primary py-5 rounded-xl text-xs font-black uppercase tracking-widest shadow-lg shadow-primary/20">Agendar Cita</Link>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>    </nav>
  );
}
