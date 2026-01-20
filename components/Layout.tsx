import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight, ChevronRight, Phone, Mail } from 'lucide-react';
import { NavItem, PageRoutes } from '../types';

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: PageRoutes.HOME },
  { label: 'About', path: PageRoutes.ABOUT },
  { label: 'Services', path: PageRoutes.SERVICES },
  { label: 'Our Team', path: PageRoutes.TEAM },
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
    <div className="min-h-screen flex flex-col bg-charcoal-950 text-zinc-300">
      {/* Navigation */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          isScrolled 
            ? 'bg-charcoal-950/95 backdrop-blur-sm py-4 border-charcoal-800' 
            : 'bg-transparent py-8 border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div onClick={() => navigate('/')} className="cursor-pointer z-50 group">
            <h1 className="text-2xl font-serif tracking-widest text-white group-hover:text-gold-500 transition-colors duration-300">
              NPC <span className="text-gold-500 text-sm font-sans tracking-widest ml-1 font-light opacity-80">SERVICES</span>
            </h1>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm uppercase tracking-widest transition-all duration-300 hover:text-gold-400 relative group py-2 ${
                    isActive ? 'text-gold-500' : 'text-zinc-400'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    <span className={`absolute bottom-0 left-0 h-[1px] bg-gold-500 transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                  </>
                )}
              </NavLink>
            ))}
            <button 
              onClick={() => navigate(PageRoutes.CONTACT)}
              className="ml-4 border border-gold-600/30 px-6 py-2 text-xs uppercase tracking-widest text-gold-500 hover:bg-gold-500 hover:text-charcoal-950 transition-all duration-300"
            >
              Inquire
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-charcoal-950 z-40 flex flex-col justify-center items-center gap-8 transition-all duration-500 md:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `text-2xl font-serif ${isActive ? 'text-gold-500' : 'text-white'}`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>

      {/* Main Content */}
      <main className="flex-grow pt-24">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-charcoal-900 border-t border-charcoal-800 pt-20 pb-10 mt-auto">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <h2 className="text-2xl font-serif text-white mb-6">NPC <span className="text-gold-500 text-sm font-sans tracking-widest ml-1">SERVICES</span></h2>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-sm mb-8">
                A private property advisory firm trusted by serious investors. 
                Delivering unbiased strategy, meticulous acquisition, and long-term portfolio growth.
              </p>
              <div className="flex gap-6">
                <a href="#" className="text-zinc-500 hover:text-gold-500 transition-colors">LinkedIn</a>
                <a href="#" className="text-zinc-500 hover:text-gold-500 transition-colors">Instagram</a>
              </div>
            </div>

            <div>
              <h3 className="text-white text-sm uppercase tracking-widest mb-6 border-l-2 border-gold-500 pl-3">Navigation</h3>
              <ul className="space-y-4">
                {NAV_ITEMS.map(item => (
                  <li key={item.path}>
                    <NavLink to={item.path} className="text-zinc-400 hover:text-gold-400 text-sm transition-colors flex items-center group">
                      <ChevronRight size={12} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity text-gold-500" />
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white text-sm uppercase tracking-widest mb-6 border-l-2 border-gold-500 pl-3">Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-start text-zinc-400 text-sm">
                  <Mail size={16} className="mt-1 mr-3 text-gold-600" />
                  <span>advisory@npcservices.com.au</span>
                </li>
                <li className="flex items-start text-zinc-400 text-sm">
                  <Phone size={16} className="mt-1 mr-3 text-gold-600" />
                  <span>+61 2 9000 0000</span>
                </li>
                <li className="text-zinc-500 text-xs mt-4">
                  By appointment only.<br/>Sydney | Melbourne | Brisbane
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-charcoal-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-600">
            <p>&copy; {new Date().getFullYear()} Naidu Property Consulting Services. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-zinc-400">Privacy Policy</a>
              <a href="#" className="hover:text-zinc-400">Terms of Engagement</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};