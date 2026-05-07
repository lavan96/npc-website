import React, { useEffect } from 'react';
import { Layout } from '../components/Layout';
import { Reveal } from '../components/ui/Reveal';

const termsSections = [
  {
    id: 'introduction',
    number: '01',
    title: 'Introduction',
    paragraphs: [
      'Welcome to Naidu Property Consulting Services (“NPC Services”, “we”, “our”, or “us”). These Terms and Conditions govern your access to and use of our website, consultation systems, marketing funnels, and property consulting services.',
      'By accessing our website, submitting information through our enquiry forms, completing the NPC Questionnaire Application, booking a consultation, or engaging with our services, you agree to be bound by these Terms and Conditions. If you do not agree with these Terms, you should discontinue use of our website and services.',
    ],
  },
  {
    id: 'services',
    number: '02',
    title: 'Services Provided',
    paragraphs: [
      'NPC Services provides property consulting and strategic advisory services designed to assist individuals in planning and structuring property investment and development strategies. Our services may include consultations, strategic planning sessions, and advisory guidance relating to property investment, portfolio structuring, and project feasibility.',
      'Clients who engage with NPC Services may participate in a structured consulting process which may include consultations such as Discovery Calls, Strategy Sessions, financial assessments, feasibility discussions, and additional advisory stages designed to guide clients through strategic planning.',
      'All services provided by NPC Services are advisory in nature. NPC Services does not provide financial product advice, legal advice, taxation advice, mortgage broking services, or real estate agency services unless expressly stated otherwise. Clients are responsible for seeking independent advice from appropriately licensed professionals before making financial, legal, or investment decisions.',
    ],
  },
  {
    id: 'applications',
    number: '03',
    title: 'Client Applications and Engagement',
    paragraphs: [
      'Prospective clients may be required to submit an NPC Questionnaire Application or provide preliminary information before consultations are scheduled. This process allows NPC Services to determine whether our consulting approach is suitable for the individual’s circumstances and objectives.',
      'Submission of an application does not guarantee acceptance as a client, and NPC Services reserves the right to decline engagements at its discretion.',
      'Where consultations are scheduled, clients agree that the information provided during applications, consultations, and communications will be accurate and complete. NPC Services relies on information supplied by clients when offering strategic insights and guidance.',
    ],
  },
  {
    id: 'risk',
    number: '04',
    title: 'Investment Risk and Decision Making',
    paragraphs: [
      'Property investment involves financial risk and is influenced by factors including market conditions, lending requirements, regulatory changes, and economic conditions. NPC Services does not guarantee financial returns, investment performance, property appreciation, financing approvals, or the success of any strategy discussed during consultations.',
      'All strategies, insights, and guidance provided through NPC Services are intended to support strategic planning and decision-making. Clients remain solely responsible for evaluating information provided and making their own financial and investment decisions. NPC Services does not act as an investment manager, lender, or transaction intermediary.',
    ],
  },
  {
    id: 'third-party',
    number: '05',
    title: 'Third-Party Professionals',
    paragraphs: [
      'During the course of consulting engagements, NPC Services may introduce or refer clients to third-party professionals whose services may assist with implementing property strategies. These professionals may include mortgage brokers, accountants, legal practitioners, property specialists, or other service providers.',
      'NPC Services does not control and is not responsible for the services, advice, or outcomes provided by these third parties. Any engagement with third-party providers occurs directly between the client and the provider.',
    ],
  },
  {
    id: 'ip',
    number: '06',
    title: 'Intellectual Property',
    paragraphs: [
      'All content provided through the NPC Services website, consultation materials, documents, frameworks, systems, and methodologies remains the intellectual property of Naidu Property Consulting Services.',
      'These materials are provided solely for personal use in connection with consulting services and may not be reproduced, distributed, or used for commercial purposes without prior written consent from NPC Services.',
    ],
  },
  {
    id: 'website-use',
    number: '07',
    title: 'Website Use',
    paragraphs: [
      'You agree to use the NPC Services website and communication systems only for lawful purposes. You must not attempt to gain unauthorized access to systems, interfere with the operation of the website, transmit malicious software, or otherwise disrupt the functionality of our services.',
      'NPC Services reserves the right to restrict access to the website or services where misuse is detected.',
    ],
  },
  {
    id: 'liability',
    number: '08',
    title: 'Limitation of Liability',
    paragraphs: [
      'To the fullest extent permitted by law, NPC Services shall not be liable for any direct, indirect, incidental, or consequential loss arising from reliance on information provided through consultations, communications, website content, or materials. All consulting services are provided on the basis that clients remain responsible for their own decisions and actions.',
    ],
  },
  {
    id: 'changes',
    number: '09',
    title: 'Changes to Terms or Services',
    paragraphs: [
      'NPC Services reserves the right to modify these Terms and Conditions or update the services provided through our website and consultation systems at any time. Updated Terms will be published on our website and will apply from the date of publication.',
    ],
  },
  {
    id: 'law',
    number: '10',
    title: 'Governing Law',
    paragraphs: [
      'These Terms and Conditions shall be governed by and interpreted in accordance with the laws of Australia.',
    ],
  },
];

const metaCards = [
  {
    label: 'NPC Services',
    title: 'Tailored Strategic Guidance',
    text: 'Our consulting approach is built around personalised property strategy, structured planning, and clear advisory direction designed to support confident decision-making.',
  },
  {
    label: 'Our Approach',
    title: 'Built on Trust, Clarity, and Precision',
    text: 'We take pride in delivering a professional and client-centred experience, ensuring every engagement reflects the care, transparency, and high standards of NPC Services.',
  },
];

export const TermsConditions: React.FC = () => {
  useEffect(() => {
    document.title = 'NPC Services | Terms and Conditions';
  }, []);

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
                    Corporate Legal Framework
                  </div>
                  <h1 className="text-5xl md:text-7xl lg:text-[80px] font-serif text-white leading-[0.98] tracking-tight mb-6">
                    Terms & <span className="italic text-gold-500 font-light">Conditions</span>
                  </h1>
                  <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl font-light">
                    These Terms and Conditions govern your access to and use of the NPC Services website,
                    consultation systems, marketing funnels, and property consulting services.
                  </p>
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
            <nav aria-label="Terms and Conditions contents">
              <ul className="grid gap-1">
                {termsSections.map((section) => (
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
                  <p className="text-zinc-400 leading-relaxed max-w-3xl font-light">
                    By accessing our website, submitting information through our enquiry forms, completing the NPC Questionnaire Application,
                    booking a consultation, or engaging with our services, you agree to the Terms and Conditions set out below.
                  </p>
                </div>
                <div className="text-gold-500 text-xs tracking-[0.18em] uppercase font-semibold">Australia</div>
              </header>

              <div className="px-8 md:px-10 pb-6">
                {termsSections.map((section) => (
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
                <h3 className="text-3xl md:text-4xl font-serif mb-4 leading-tight">For legal or service-related enquiries, contact NPC Services directly.</h3>
                <p className="text-charcoal-950/80 leading-relaxed max-w-2xl">
                  For questions regarding these Terms and Conditions, please contact Naidu Property Consulting Services using the details provided here.
                </p>
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
