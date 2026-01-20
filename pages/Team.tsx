import React from 'react';
import { Layout } from '../components/Layout';
import { Reveal } from '../components/ui/Reveal';
import { Briefcase, Calculator, Scale, Home, TrendingDown, Umbrella } from 'lucide-react';

export const Team: React.FC = () => {
  const partners = [
    { title: "Property Consultants", desc: "Expert strategists focusing on asset selection.", icon: <Home /> },
    { title: "Financial Strategists", desc: "Mortgage brokers and planners structuring your debt.", icon: <Calculator /> },
    { title: "Solicitors", desc: "Legal experts ensuring watertight contracts.", icon: <Scale /> },
    { title: "Accountants", desc: "Tax structuring for maximum efficiency.", icon: <Briefcase /> },
    { title: "Depreciation Specialists", desc: "Maximizing tax deductions on your assets.", icon: <TrendingDown /> },
    { title: "Insurance Specialists", desc: "Protecting your portfolio against risk.", icon: <Umbrella /> },
  ];

  return (
    <Layout>
      <section className="pt-32 pb-20 bg-charcoal-950 px-6">
        <div className="max-w-7xl mx-auto text-center md:text-left">
          <Reveal>
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">Our Partnered Team</h1>
            <p className="text-xl text-zinc-400 max-w-3xl font-light leading-relaxed">
              Successful investment requires a village of experts. At NPC Services, we act as the conductor of your financial orchestra, 
              bringing together a vetted ecosystem of professionals to support your journey at every level.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-32 bg-charcoal-950 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, index) => (
            <Reveal key={index} delay={index * 100}>
              <div className="bg-charcoal-900 p-8 h-full border border-charcoal-800 hover:border-gold-500/40 transition-all duration-300 group">
                <div className="text-gold-500 mb-6 group-hover:scale-110 transition-transform duration-300 w-10 h-10">
                  {React.cloneElement(partner.icon as React.ReactElement, { size: 32 })}
                </div>
                <h3 className="text-xl font-serif text-white mb-3">{partner.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {partner.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-20 bg-gold-900/10 border-y border-gold-500/5">
        <div className="max-w-4xl mx-auto text-center px-6">
          <Reveal>
            <h2 className="text-2xl font-serif text-white mb-4">"You’re supported at every level."</h2>
            <p className="text-zinc-500 text-sm">
              We coordinate these professionals on your behalf, saving you time and ensuring strategy alignment.
            </p>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};