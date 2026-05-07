import React from 'react';
import { LegalDocumentPage, LegalMetaCard, LegalSection } from '../components/LegalDocumentPage';

const termsSections: LegalSection[] = [
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

const termsMetaCards: LegalMetaCard[] = [
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

export const TermsConditions: React.FC = () => (
  <LegalDocumentPage
    documentTitle="Terms and Conditions"
    eyebrow="Corporate Legal Framework"
    heading={<>Terms & <span className="italic text-gold-500 font-light">Conditions</span></>}
    heroCopy="These Terms and Conditions govern your access to and use of the NPC Services website, consultation systems, marketing funnels, and property consulting services."
    metaCards={termsMetaCards}
    sections={termsSections}
    navLabel="Terms and Conditions contents"
    intro="By accessing our website, submitting information through our enquiry forms, completing the NPC Questionnaire Application, booking a consultation, or engaging with our services, you agree to the Terms and Conditions set out below."
    contactHeading="For legal or service-related enquiries, contact NPC Services directly."
    contactCopy="For questions regarding these Terms and Conditions, please contact Naidu Property Consulting Services using the details provided here."
  />
);
