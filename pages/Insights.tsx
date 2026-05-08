import React, { useState } from 'react';
import { Layout } from '../components/Layout';
import { Reveal } from '../components/ui/Reveal';
import { Button } from '../components/ui/Button';
import { Lock, FileText, CheckCircle2, Search } from 'lucide-react';

type LeadMagnetKey = 'guide' | 'checklist';

type LeadMagnetField = 'fullName' | 'email' | 'phone';

type LeadMagnetFormValues = Record<LeadMagnetField, string>;

const emptyLeadMagnetForm: LeadMagnetFormValues = {
  fullName: '',
  email: '',
  phone: '',
};

export const Insights: React.FC = () => {
  const [guideRequested, setGuideRequested] = useState(false);
  const [checklistRequested, setChecklistRequested] = useState(false);
  const [leadMagnetForms, setLeadMagnetForms] = useState<Record<LeadMagnetKey, LeadMagnetFormValues>>({
    guide: { ...emptyLeadMagnetForm },
    checklist: { ...emptyLeadMagnetForm },
  });

  const handleLeadMagnetChange = (resource: LeadMagnetKey, field: LeadMagnetField, value: string) => {
    setLeadMagnetForms((currentForms) => ({
      ...currentForms,
      [resource]: {
        ...currentForms[resource],
        [field]: value,
      },
    }));
  };

  const handleLeadMagnetSubmit = (event: React.FormEvent<HTMLFormElement>, resource: LeadMagnetKey) => {
    event.preventDefault();

    if (resource === 'guide') {
      setGuideRequested(true);
      return;
    }

    setChecklistRequested(true);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-40 pb-24 md:pt-56 md:pb-32 bg-charcoal-950 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gold-900/10 via-charcoal-950 to-[#0C0C0B]" />
        
        <div className="max-w-[1400px] mx-auto relative z-10">
          <Reveal direction="down">
            <h3 className="text-gold-500 text-xs tracking-[0.4em] uppercase font-light mb-8">Exclusive Intelligence</h3>
          </Reveal>
          <Reveal direction="up" delay={200}>
            <h1 className="text-5xl md:text-7xl lg:text-[90px] font-serif text-white mb-8 leading-[1.05] tracking-tight">
              The <span className="italic text-gold-500 font-light">Vault.</span>
            </h1>
          </Reveal>
          <Reveal direction="up" delay={400}>
            <p className="text-xl md:text-2xl text-zinc-300 font-light leading-relaxed max-w-3xl text-balance border-l border-gold-500/50 pl-6">
              Institutional-grade frameworks and proprietary market analysis. Gain absolute clarity before deploying your capital.
            </p>
          </Reveal>
        </div>
      </section>

      {/* The Vault Resources Grid */}
      <section className="py-24 md:py-32 bg-[#0C0C0B] relative z-10 border-t border-charcoal-800">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Resource 1: The Survival Guide */}
            <Reveal direction="right">
              <div className="group relative border border-gold-500/50 bg-gold-500/[0.05] transition-all duration-700 overflow-hidden flex flex-col h-full hover:-translate-y-2 hover:scale-[1.01] hover:shadow-[0_24px_80px_rgba(194,163,100,0.16)]">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-500/0 via-gold-500/50 to-gold-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="p-12 md:p-16 flex-grow border-b border-gold-500/20">
                  <div className="w-16 h-16 rounded-full border border-gold-500/30 bg-gold-500/10 flex items-center justify-center mb-8 shadow-inner transition-all duration-700 group-hover:scale-110 group-hover:rotate-3">
                    <FileText className="text-gold-500/80 w-6 h-6" />
                  </div>
                  
                  <span className="text-gold-500 text-[10px] uppercase tracking-[0.2em] font-light block mb-4">Investment Blueprint</span>
                  <h2 className="text-3xl md:text-4xl font-serif text-white mb-6 leading-tight group-hover:text-gold-400 transition-colors">
                    First-Time Property Investor Survival Guide
                  </h2>
                  <p className="text-zinc-400 font-light leading-relaxed mb-8">
                    Avoid costly mistakes and build your first investment the right way. We decode the 10 critical errors that derail first-time investors, and outline the exact 5-step framework required for success.
                  </p>
                  
                  <ul className="space-y-4">
                    {['Overcoming the "I need it to be perfect" mindset', 'Identifying false "bargains" and toxic assets', 'Structuring for scalability, not just a single win'].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 size={16} className="text-gold-500/50 mt-1 shrink-0" />
                        <span className="text-zinc-500 text-sm font-light">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-8 md:p-12 bg-gold-500/[0.03] relative">
                  {!guideRequested ? (
                    <form className="space-y-6" onSubmit={(event) => handleLeadMagnetSubmit(event, 'guide')}>
                      <h4 className="text-white font-serif text-xl flex items-center gap-3">
                        <Lock size={16} className="text-gold-500" /> Request Access
                      </h4>
                      <input 
                        type="text" 
                        name="fullName"
                        placeholder="Full Name" 
                        autoComplete="name"
                        required
                        value={leadMagnetForms.guide.fullName}
                        onChange={(event) => handleLeadMagnetChange('guide', 'fullName', event.target.value)}
                        className="w-full bg-charcoal-950 border-b border-charcoal-700 text-white p-4 focus:outline-none focus:border-gold-500 transition-all duration-300 text-sm font-light"
                      />
                      <input 
                        type="email" 
                        name="email"
                        placeholder="Corporate or Personal Email" 
                        autoComplete="email"
                        required
                        value={leadMagnetForms.guide.email}
                        onChange={(event) => handleLeadMagnetChange('guide', 'email', event.target.value)}
                        className="w-full bg-charcoal-950 border-b border-charcoal-700 text-white p-4 focus:outline-none focus:border-gold-500 transition-all duration-300 text-sm font-light"
                      />
                      <input 
                        type="tel" 
                        name="phone"
                        placeholder="Contact Number" 
                        autoComplete="tel"
                        required
                        value={leadMagnetForms.guide.phone}
                        onChange={(event) => handleLeadMagnetChange('guide', 'phone', event.target.value)}
                        className="w-full bg-charcoal-950 border-b border-charcoal-700 text-white p-4 focus:outline-none focus:border-gold-500 transition-all duration-300 text-sm font-light"
                      />
                      <Button type="submit" fullWidth>Unlock Guide</Button>
                    </form>
                  ) : (
                    <div className="py-10 text-center space-y-4">
                      <div className="w-12 h-12 rounded-full border border-gold-500/50 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="text-gold-500 w-5 h-5" />
                      </div>
                      <h4 className="text-white font-serif text-xl">Access Granted</h4>
                      <p className="text-zinc-500 text-sm font-light">The survival guide has been securely dispatched to your inbox.</p>
                    </div>
                  )}
                </div>
              </div>
            </Reveal>

            {/* Resource 2: Due Diligence Checklist */}
            <Reveal direction="left" delay={200}>
              <div className="group relative border border-gold-500/50 bg-gold-500/[0.05] transition-all duration-700 overflow-hidden flex flex-col h-full hover:-translate-y-2 hover:scale-[1.01] hover:shadow-[0_24px_80px_rgba(194,163,100,0.16)]">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-500/0 via-gold-500/50 to-gold-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="p-12 md:p-16 flex-grow border-b border-gold-500/20 relative overflow-hidden">
                  {/* Faint background number */}
                  <div className="absolute -right-8 -bottom-8 text-[150px] font-serif font-bold text-charcoal-900/40 select-none hidden md:block">
                    67
                  </div>

                  <div className="w-16 h-16 rounded-full border border-gold-500/30 bg-gold-500/10 flex items-center justify-center mb-8 shadow-inner relative z-10 transition-all duration-700 group-hover:scale-110 group-hover:rotate-3">
                    <Search className="text-gold-500/80 w-6 h-6" />
                  </div>
                  
                  <span className="text-gold-500 text-[10px] uppercase tracking-[0.2em] font-light block mb-4 relative z-10">Pre-Purchase Framework</span>
                  <h2 className="text-3xl md:text-4xl font-serif text-white mb-6 leading-tight group-hover:text-gold-400 transition-colors relative z-10">
                    Full Property Due Diligence Checklist
                  </h2>
                  <p className="text-zinc-400 font-light leading-relaxed mb-8 relative z-10">
                    The complete Pre-Purchase Framework every smart investor uses. Don't rely on assumptions. We provide the exact 6-pillar framework we use to mathematically validate every asset.
                  </p>
                  
                  <ul className="space-y-4 relative z-10">
                    {['Financial & Cash Flow Forensics', 'Legal, Contract, and Strata Checks', 'Location, Population, and Threat Analysis'].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 size={16} className="text-gold-500/50 mt-1 shrink-0" />
                        <span className="text-zinc-500 text-sm font-light">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-8 md:p-12 bg-gold-500/[0.03] relative">
                  {!checklistRequested ? (
                    <form className="space-y-6" onSubmit={(event) => handleLeadMagnetSubmit(event, 'checklist')}>
                      <h4 className="text-white font-serif text-xl flex items-center gap-3">
                        <Lock size={16} className="text-gold-500" /> Request Access
                      </h4>
                      <input 
                        type="text" 
                        name="fullName"
                        placeholder="Full Name" 
                        autoComplete="name"
                        required
                        value={leadMagnetForms.checklist.fullName}
                        onChange={(event) => handleLeadMagnetChange('checklist', 'fullName', event.target.value)}
                        className="w-full bg-charcoal-950 border-b border-charcoal-700 text-white p-4 focus:outline-none focus:border-gold-500 transition-all duration-300 text-sm font-light"
                      />
                      <input 
                        type="email" 
                        name="email"
                        placeholder="Corporate or Personal Email" 
                        autoComplete="email"
                        required
                        value={leadMagnetForms.checklist.email}
                        onChange={(event) => handleLeadMagnetChange('checklist', 'email', event.target.value)}
                        className="w-full bg-charcoal-950 border-b border-charcoal-700 text-white p-4 focus:outline-none focus:border-gold-500 transition-all duration-300 text-sm font-light"
                      />
                      <input 
                        type="tel" 
                        name="phone"
                        placeholder="Contact Number" 
                        autoComplete="tel"
                        required
                        value={leadMagnetForms.checklist.phone}
                        onChange={(event) => handleLeadMagnetChange('checklist', 'phone', event.target.value)}
                        className="w-full bg-charcoal-950 border-b border-charcoal-700 text-white p-4 focus:outline-none focus:border-gold-500 transition-all duration-300 text-sm font-light"
                      />
                      <Button type="submit" fullWidth>Unlock Checklist</Button>
                    </form>
                  ) : (
                    <div className="py-10 text-center space-y-4">
                      <div className="w-12 h-12 rounded-full border border-gold-500/50 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="text-gold-500 w-5 h-5" />
                      </div>
                      <h4 className="text-white font-serif text-xl">Access Granted</h4>
                      <p className="text-zinc-500 text-sm font-light">The Due Diligence framework has been securely dispatched to your inbox.</p>
                    </div>
                  )}
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* Trust Signal Strip */}
      <section className="py-24 bg-charcoal-950 border-t border-charcoal-800">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <Reveal direction="up">
            <h3 className="font-serif text-2xl md:text-3xl text-white mb-6">"If you don't understand it — don't buy it."</h3>
            <p className="text-gold-500 uppercase tracking-widest text-[10px]">The Golden Rule of Property Due Diligence</p>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};
