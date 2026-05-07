import React from 'react';
import { Layout } from '../components/Layout';
import { Reveal } from '../components/ui/Reveal';
import { Briefcase, Calculator, Scale, Home, TrendingDown, Shield, Search, Key } from 'lucide-react';

export const Team: React.FC = () => {
  const partners = [
    { num: "01", title: "Property Consultant & Buyer's Agent", desc: "Your primary advocate who guides the entire journey, sources properties, negotiates on your behalf, and ensures your goals remain the top priority.", icon: Home },
    { num: "02", title: "Financial Strategist & Broker", desc: "Structures your finance to maximise borrowing capacity, optimise loan terms, and align property investment with your broader financial strategy.", icon: Calculator },
    { num: "03", title: "Accountant", desc: "Provides tax planning advice, investment structure guidance, and ensures your property decisions are financially optimised for your situation.", icon: Briefcase },
    { num: "04", title: "Acquisition & Research Specialist", desc: "Conducts deep market research, property analysis, and due diligence to identify opportunities that meet your criteria and investment goals.", icon: Search },
    { num: "05", title: "Solicitor / Conveyancer", desc: "Handles all legal aspects of your property transaction, reviews contracts, manages settlement, and protects your legal interests throughout the process.", icon: Scale },
    { num: "06", title: "Property Management Team", desc: "For investors, we connect you with trusted property managers who maintain your asset, secure quality tenants, and maximise rental returns.", icon: Key },
    { num: "07", title: "Depreciation Specialist", desc: "Prepares comprehensive depreciation schedules to maximise your tax deductions and improve investment property cash flow.", icon: TrendingDown },
    { num: "08", title: "Insurance Provider", desc: "Ensures your property investment is comprehensively protected with tailored insurance solutions for your specific needs and risk profile.", icon: Shield },
  ];

  return (
    <Layout>
      <section className="pt-40 pb-24 md:pt-56 md:pb-32 bg-charcoal-950 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-gold-900/10 via-charcoal-950 to-[#0C0C0B]" />
        
        <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <Reveal direction="left" className="md:w-1/2">
            <h3 className="text-gold-500 text-xs tracking-[0.4em] uppercase font-light mb-8">A Network Built Around You</h3>
            <h1 className="text-5xl md:text-7xl lg:text-[70px] xl:text-[90px] font-serif text-white mb-6 leading-[1.05] tracking-tight">
              The <span className="italic text-gold-500 font-light">Collective.</span>
            </h1>
          </Reveal>
          <Reveal direction="right" delay={200} className="md:w-1/2 md:pb-4 border-l border-gold-500/20 pl-8 md:pl-12">
            <p className="text-xl text-zinc-300 font-light leading-relaxed text-balance">
              Your property journey requires expertise across multiple disciplines. That's why we've built a network of trusted professionals who collaborate to deliver seamless, comprehensive support aligned with your best interests.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-32 md:pb-48 bg-[#0C0C0B] px-6 relative border-t border-charcoal-800">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <Reveal key={index} delay={index * 50} direction="up" className="">
              <div className="p-8 lg:p-10 h-full bg-gold-500/[0.05] border border-gold-500/50 transition-all duration-700 group flex flex-col relative overflow-hidden hover:-translate-y-2 hover:scale-[1.01] hover:shadow-[0_24px_80px_rgba(194,163,100,0.16)]">
                <div className="absolute -right-4 -top-4 text-[100px] font-serif font-bold text-charcoal-900/50 group-hover:text-gold-900/10 transition-colors duration-700 select-none hidden md:block">
                  {partner.num}
                </div>
                
                <div className="mb-10 border border-gold-500/30 bg-gold-500/10 p-4 rounded-full w-fit group-hover:border-gold-500/70 group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 relative z-10">
                  <partner.icon strokeWidth={1} className="text-gold-500 w-6 h-6 opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                <div className="relative z-10 mt-auto">
                  <span className="text-gold-500/50 font-serif text-lg block mb-4 italic md:hidden">{partner.num}</span>
                  <h3 className="text-xl font-serif text-white mb-4 group-hover:text-gold-400 transition-colors">{partner.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed font-light">
                    {partner.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-32 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-charcoal-900 to-[#0C0C0B] border-t border-gold-500/10">
        <div className="max-w-4xl mx-auto text-center px-6">
          <Reveal direction="up">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 tracking-tight">"Secured at every level."</h2>
            <p className="text-zinc-400 text-lg font-light leading-relaxed text-balance">
              We govern these professionals on your behalf acting as your primary advocate, mitigating friction and ensuring absolute strategic alignment.
            </p>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};
