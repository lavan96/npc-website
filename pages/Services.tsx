import React from 'react';
import { Layout } from '../components/Layout';
import { Reveal } from '../components/ui/Reveal';
import { Button } from '../components/ui/Button';
import { Search, TrendingUp, Handshake, FileSearch, LineChart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { PageRoutes } from '../types';

export const Services: React.FC = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: <Search className="w-8 h-8 text-gold-500" />,
      title: "Buyer Representation",
      description: "Comprehensive sourcing and acquisition service. We handle everything from the initial brief to the exchange of contracts, ensuring you access the top 1% of properties."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-gold-500" />,
      title: "Portfolio Strategy",
      description: "A deep dive into your current asset base. We identify underperforming assets, opportunities for equity release, and structure a roadmap for future acquisition."
    },
    {
      icon: <FileSearch className="w-8 h-8 text-gold-500" />,
      title: "Market Research & Due Diligence",
      description: "Rigorous feasibility studies including comparable sales analysis, rental yield forecasting, and capital growth projections to validate every decision."
    },
    {
      icon: <Handshake className="w-8 h-8 text-gold-500" />,
      title: "Negotiation & Acquisition",
      description: "We act as a firewall between you and the selling agent. Our expert negotiation strategies are designed to secure the asset below market value."
    },
    {
      icon: <LineChart className="w-8 h-8 text-gold-500" />,
      title: "Post-Purchase Reviews",
      description: "Our relationship doesn't end at settlement. We conduct annual portfolio reviews to ensure your assets continue to perform against benchmarks."
    }
  ];

  return (
    <Layout>
      <section className="pt-32 pb-16 bg-charcoal-950 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">Strategic Capabilities</h1>
            <p className="text-xl text-zinc-400 max-w-2xl font-light">
              We frame our services as outcomes. Your goal is not just to buy property, but to build sustainable wealth.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-32 bg-charcoal-950 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8">
          {services.map((service, index) => (
            <Reveal key={index} delay={index * 100} width="100%">
              <div className="group relative bg-charcoal-900 border border-charcoal-800 hover:border-gold-500/30 p-8 md:p-12 transition-all duration-500 flex flex-col md:flex-row gap-8 items-start md:items-center">
                <div className="p-4 bg-charcoal-950 rounded-full border border-charcoal-800 group-hover:border-gold-500/50 transition-colors">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-serif text-white mb-3 group-hover:text-gold-400 transition-colors">{service.title}</h3>
                  <p className="text-zinc-400 leading-relaxed text-sm md:text-base max-w-3xl">
                    {service.description}
                  </p>
                </div>
                <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-gold-500 text-sm tracking-widest uppercase">
                  Learn More
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24 bg-charcoal-900 px-6 text-center">
        <Reveal>
          <h2 className="text-3xl font-serif text-white mb-6">Ready to execute?</h2>
          <Button onClick={() => navigate(PageRoutes.CONTACT)}>Discuss Your Brief</Button>
        </Reveal>
      </section>
    </Layout>
  );
};