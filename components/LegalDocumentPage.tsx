import React, { useEffect } from 'react';
import { Layout } from './Layout';
import { Reveal } from './ui/Reveal';

export interface LegalSection {
  id: string;
  number: string;
  title: string;
  paragraphs: string[];
}

export interface LegalMetaCard {
  label: string;
  title: string;
  text: string;
}

interface LegalDocumentPageProps {
  documentTitle: string;
  eyebrow: string;
  heading: React.ReactNode;
  heroCopy: string;
  metaCards: LegalMetaCard[];
  sections: LegalSection[];
  navLabel: string;
  intro: string;
  contactHeading: string;
  contactCopy: string;
}

export const LegalDocumentPage: React.FC<LegalDocumentPageProps> = ({
  documentTitle,
  eyebrow,
  heading,
  heroCopy,
  metaCards,
  sections,
  navLabel,
  intro,
  contactHeading,
  contactCopy,
}) => {
  useEffect(() => {
    document.title = `NPC Services | ${documentTitle}`;
  }, [documentTitle]);

  return (
    <Layout>
      <section className="pt-40 pb-16 md:pt-52 md:pb-20 bg-charcoal-950 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px]" />
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_center,rgba(194,163,100,0.12),transparent_34%)]" />
        <div className="max-w-[1240px] mx-auto relative z-10">
          <Reveal direction="down">
            <div className="border border-gold-500/20 bg-gradient-to-br from-white/[0.03] via-charcoal-950/90 to-gold-900/10 shadow-[0_30px_80px_rgba(0,0,0,0.42)] overflow-hidden relative">
              <div className="absolute top-0 left-16 h-px w-44 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
              <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 p-8 md:p-14 items-end">
                <div>
                  <div className="inline-flex items-center gap-4 text-gold-500 text-xs tracking-[0.24em] uppercase font-semibold mb-6 before:content-[''] before:w-12 before:h-px before:bg-gold-500">
                    {eyebrow}
                  </div>
                  <h1 className="text-5xl md:text-7xl lg:text-[80px] font-serif text-white leading-[0.98] tracking-tight mb-6">
                    {heading}
                  </h1>
                  <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl font-light">{heroCopy}</p>
                </div>

                <div className="grid gap-5">
                  {metaCards.map((card) => (
                    <article key={card.title} className="border border-gold-500/15 bg-white/[0.02] p-6">
                      <div className="text-gold-500 text-[10px] tracking-[0.2em] uppercase font-semibold mb-3">{card.label}</div>
                      <h2 className="text-white text-xl font-serif mb-3">{card.title}</h2>
                      <p className="text-zinc-400 text-sm leading-relaxed font-light">{card.text}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 md:pb-32 bg-charcoal-950 px-6 relative">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-[280px_minmax(0,1fr)] gap-7 items-start">
          <aside className="lg:sticky lg:top-28 border border-gold-500/20 bg-gradient-to-b from-white/[0.03] to-white/[0.01] shadow-[0_30px_80px_rgba(0,0,0,0.32)] p-6">
            <div className="text-gold-500 text-xs tracking-[0.18em] uppercase font-semibold mb-5">Contents</div>
            <nav aria-label={navLabel}>
              <ul className="grid gap-1">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`} className="block text-zinc-400 hover:text-gold-400 text-sm py-3 border-b border-white/[0.06] transition-colors">
                      {section.number} {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <div>
            <article className="border border-gold-500/15 bg-gradient-to-b from-[#121212]/95 to-[#0d0d0d]/95 shadow-[0_30px_80px_rgba(0,0,0,0.42)] overflow-hidden">
              <header className="p-8 md:p-10 border-b border-gold-500/15 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Naidu Property Consulting Services (NPC Services)</h2>
                  <p className="text-zinc-400 leading-relaxed max-w-3xl font-light">{intro}</p>
                </div>
                <div className="text-gold-500 text-xs tracking-[0.18em] uppercase font-semibold">Australia</div>
              </header>

              <div className="px-8 md:px-10 pb-6">
                {sections.map((section) => (
                  <section key={section.id} id={section.id} className="scroll-mt-32 py-9 border-b border-white/[0.08] last:border-b-0">
                    <div className="grid grid-cols-1 md:grid-cols-[84px_minmax(0,1fr)] gap-4 md:gap-6">
                      <div className="text-gold-500/30 text-4xl font-serif leading-none tracking-tight">{section.number}</div>
                      <div>
                        <h3 className="text-gold-500 text-2xl font-serif mb-4">{section.title}</h3>
                        <div className="space-y-4 text-zinc-200 leading-relaxed font-light">
                          {section.paragraphs.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </section>
                ))}
              </div>
            </article>

            <section className="mt-8 grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] bg-gold-400 text-charcoal-950">
              <div className="p-8 md:p-10">
                <div className="text-charcoal-950 text-xs tracking-[0.18em] uppercase font-semibold mb-4">Contact Information</div>
                <h3 className="text-3xl md:text-4xl font-serif mb-4 leading-tight">{contactHeading}</h3>
                <p className="text-charcoal-950/80 leading-relaxed max-w-2xl">{contactCopy}</p>
              </div>
              <div className="bg-[#111111] text-white p-8 md:p-10 flex flex-col justify-center">
                <div className="text-gold-500 text-xs tracking-[0.2em] uppercase font-semibold mb-4">Direct Contact</div>
                <strong className="text-lg leading-relaxed mb-3">Naidu Property Consulting Services (NPC Services)</strong>
                <p className="text-zinc-300">
                  Email: <a href="mailto:admin@npcservices.com.au" className="text-gold-400 border-b border-gold-500/40 hover:text-white hover:border-white transition-colors">admin@npcservices.com.au</a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </Layout>
  );
};
