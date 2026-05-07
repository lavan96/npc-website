import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight, ChevronRight, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { NavItem, PageRoutes } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { brandLogo } from '../assets/naiduPropertyLogo';

// Custom TikTok Icon matching Lucide's style
const TikTok = ({ size = 24, className = '', strokeWidth = 2, ...props }: any) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth={strokeWidth} 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
    {...props}
  >
    <path d="M9 12A4 4 0 1 0 9 20 A4 4 0 0 0 13 16V3 A6 6 0 0 0 19 9" />
  </svg>
);

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: PageRoutes.HOME },
  { label: 'About', path: PageRoutes.ABOUT },
  { label: 'Services', path: PageRoutes.SERVICES },
  { label: 'The Collective', path: PageRoutes.TEAM },
  { label: 'Insights', path: PageRoutes.INSIGHTS },
  { label: 'Contact', path: PageRoutes.CONTACT },
];

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // Handle scroll effect for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-charcoal-950 text-gold-100 overflow-x-hidden selection:bg-gold-500/30 selection:text-gold-200">
      {/* Navigation */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out border-b ${
          isScrolled 
            ? 'bg-charcoal-950/80 backdrop-blur-xl py-4 border-gold-500/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]' 
            : 'bg-gradient-to-b from-charcoal-950/80 to-transparent py-8 border-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-center md:justify-between items-center relative">
          {/* Logo */}
          <button
            type="button"
            onClick={() => navigate('/')}
            className="cursor-pointer z-50 group flex items-center mx-auto md:mx-0"
            aria-label="Naidu Property Consulting Services home"
          >
            <img
              src={brandLogo}
              alt="Naidu Property Consulting Services"
              className="w-[170px] sm:w-[210px] md:w-[240px] h-auto transition-opacity duration-500 group-hover:opacity-85"
            />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-xs uppercase tracking-[0.2em] transition-all duration-500 relative group py-2 font-light ${
                    isActive ? 'text-gold-500 drop-shadow-[0_0_10px_rgba(194,163,100,0.4)]' : 'text-zinc-400 hover:text-gold-200'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-gold-500/80 transition-all duration-500 ease-out ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                  </>
                )}
              </NavLink>
            ))}
            <button 
              onClick={() => navigate(PageRoutes.CONTACT)}
              className="ml-6 border border-gold-500/40 px-8 py-3 rounded-full text-xs uppercase tracking-[0.2em] text-gold-500 hover:bg-gold-500 hover:text-charcoal-950 transition-all duration-500 shadow-[0_0_15px_rgba(194,163,100,0.1)] hover:shadow-[0_0_20px_rgba(194,163,100,0.3)] bg-charcoal-950/50 backdrop-blur-md"
            >
              Inquire
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-gold-200 z-50 p-2 mix-blend-difference absolute right-6"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} strokeWidth={1} /> : <Menu size={28} strokeWidth={1} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(20px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-charcoal-950/95 z-40 flex flex-col justify-center items-center gap-5"
          >
            {NAV_ITEMS.map((item, idx) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `text-[1.55rem] sm:text-[1.7rem] text-balance font-serif font-light tracking-wide ${isActive ? 'text-gold-500 italic' : 'text-zinc-200'}`
                  }
                >
                  {item.label}
                </NavLink>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ delay: NAV_ITEMS.length * 0.1, duration: 0.6 }}
            >
              <button 
                onClick={() => navigate(PageRoutes.CONTACT)}
                className="mt-5 border border-gold-500 px-10 py-3 rounded-full text-xs uppercase tracking-[0.25em] text-gold-500"
              >
                Inquire
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-charcoal-950 border-t border-gold-500/10 pt-24 pb-12 mt-auto relative overflow-hidden">
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 z-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-charcoal-950 to-transparent z-0" />
        
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 mb-20">
            <div className="md:col-span-12 lg:col-span-5">
              <div className="mb-8">
                <img
                  src={brandLogo}
                  alt="Naidu Property Consulting Services"
                  className="w-[260px] sm:w-[320px] h-auto"
                />
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-sm mb-10 font-light">
                An exclusive private property advisory firm trusted by serious investors. 
                Delivering unbiased strategy, meticulous acquisition, and sustainable portfolio growth.
              </p>
              <div className="flex gap-4">
                <a href="https://instagram.com/naidupropertyconsultingservice" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full border border-charcoal-800 flex items-center justify-center text-zinc-500 hover:border-gold-500 hover:text-gold-500 transition-all duration-300">
                  <Instagram size={18} strokeWidth={1.5} />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full border border-charcoal-800 flex items-center justify-center text-zinc-500 hover:border-gold-500 hover:text-gold-500 transition-all duration-300">
                  <Facebook size={18} strokeWidth={1.5} />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="w-10 h-10 rounded-full border border-charcoal-800 flex items-center justify-center text-zinc-500 hover:border-gold-500 hover:text-gold-500 transition-all duration-300">
                  <TikTok size={18} strokeWidth={1.5} />
                </a>
              </div>
            </div>

            <div className="md:col-span-6 lg:col-span-3">
              <h3 className="text-white text-xs uppercase tracking-[0.2em] mb-8 font-medium">Navigation</h3>
              <ul className="space-y-4">
                {NAV_ITEMS.map(item => (
                  <li key={item.path}>
                    <NavLink to={item.path} className="text-zinc-400 hover:text-gold-400 text-sm font-light transition-colors flex items-center group w-fit">
                      <ChevronRight size={14} strokeWidth={1.5} className="mr-2 -ml-4 opacity-0 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-gold-500" />
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-6 lg:col-span-4">
              <h3 className="text-white text-xs uppercase tracking-[0.2em] mb-8 font-medium">Get in Touch</h3>
              <ul className="space-y-6">
                <li>
                  <a href="mailto:admin@npcservices.com.au" className="flex items-start text-zinc-400 text-sm font-light group cursor-pointer w-fit">
                    <Mail size={18} strokeWidth={1.5} className="mt-0.5 mr-4 text-gold-600 group-hover:text-gold-400 transition-colors" />
                    <span className="group-hover:text-gold-200 transition-colors">admin@npcservices.com.au</span>
                  </a>
                </li>
                <li>
                  <a href="tel:+61286093299" className="flex items-start text-zinc-400 text-sm font-light group cursor-pointer w-fit">
                    <Phone size={18} strokeWidth={1.5} className="mt-0.5 mr-4 text-gold-600 group-hover:text-gold-400 transition-colors" />
                    <span className="group-hover:text-gold-200 transition-colors">(02) 8609 3299</span>
                  </a>
                </li>
                <li className="text-zinc-500 text-xs mt-8 pt-6 border-t border-charcoal-800 leading-loose">
                  <span className="uppercase tracking-widest text-gold-500/50 block mb-2 text-[10px]">Locations</span>
                  Sydney  ·  Melbourne  ·  Brisbane  ·  Perth  ·  Adelaide<br/>
                  <span className="italic mt-1 inline-block">By private appointment only.</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-charcoal-800/50 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-zinc-600">
            <p>&copy; {new Date().getFullYear()} Naidu Property Consulting. All rights reserved.</p>
            <div className="flex gap-8 mt-4 md:mt-0">
              <NavLink to={PageRoutes.PRIVACY} className="hover:text-gold-500 transition-colors">Privacy Policy</NavLink>
              <NavLink to={PageRoutes.TERMS} className="hover:text-gold-500 transition-colors">Terms & Conditions</NavLink>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};