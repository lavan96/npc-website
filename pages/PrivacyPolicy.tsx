import React from 'react';
import { LegalDocumentPage, LegalMetaCard, LegalSection } from '../components/LegalDocumentPage';

const privacySections: LegalSection[] = [
  {
    id: 'introduction',
    number: '01',
    title: 'Introduction',
    paragraphs: [
      'Naidu Property Consulting Services (“NPC Services”, “we”, “our”, or “us”) is committed to protecting the privacy and confidentiality of personal information provided by individuals who interact with our website, marketing funnels, consultation systems, and consulting services.',
      'This Privacy Policy explains how we collect, use, store, and protect personal information obtained through enquiries, applications, consultations, and ongoing client engagements.',
      'By using our website or providing personal information to NPC Services, you acknowledge that your information will be handled in accordance with this Privacy Policy.',
    ],
  },
  {
    id: 'information',
    number: '02',
    title: 'Information We Collect',
    paragraphs: [
      'NPC Services collects personal information that is reasonably necessary to provide property consulting services and manage client relationships. Personal information may be collected when individuals submit enquiries through our website, complete the NPC Questionnaire Application, book consultations such as Discovery Calls or Strategy Sessions, or communicate with NPC Services through email, telephone, or other communication channels.',
      'The information collected may include personal identification details, contact information, and background information relevant to property strategy and investment planning.',
      'Because our services involve strategic property planning, individuals may voluntarily provide information relating to financial circumstances, borrowing capacity indicators, property ownership, investment objectives, or development plans in order to receive more relevant consulting guidance.',
    ],
  },
  {
    id: 'collection',
    number: '03',
    title: 'How Personal Information Is Collected',
    paragraphs: [
      'Personal information is primarily collected directly from individuals when they submit forms through the NPC Services website, complete questionnaires, schedule consultations, or communicate with our team.',
      'Information may also be collected automatically when users interact with our website through standard website technologies that record usage data and assist with performance monitoring.',
    ],
  },
  {
    id: 'use',
    number: '04',
    title: 'Use of Personal Information',
    paragraphs: [
      'NPC Services uses personal information to respond to enquiries, assess the suitability of consulting services, schedule and conduct consultations, and provide strategic property guidance.',
      'Information may also be used for internal administrative purposes, including maintaining records, managing client relationships, improving services, and operating our business systems.',
      'Where appropriate, NPC Services may also communicate information relating to consulting services, updates, or educational resources. Individuals may request to stop receiving marketing communications at any time.',
    ],
  },
  {
    id: 'third-party',
    number: '05',
    title: 'Third-Party Platforms and Service Providers',
    paragraphs: [
      'NPC Services uses modern digital systems to manage communications, consultations, and operational processes. These systems may include customer relationship management platforms, scheduling tools, marketing automation systems, and secure cloud storage providers.',
      'These service providers may process or store personal information on behalf of NPC Services in order to support communication, consultation booking, and service delivery.',
      'NPC Services takes reasonable steps to ensure that service providers maintain appropriate safeguards for personal information.',
    ],
  },
  {
    id: 'disclosure',
    number: '06',
    title: 'Disclosure of Personal Information',
    paragraphs: [
      'NPC Services does not sell personal information. Personal information may be disclosed where necessary to support business operations, comply with legal obligations, or facilitate services through trusted technology providers.',
      "In some cases, clients may request referrals to third-party professionals relevant to property strategies, and information may be shared with those professionals where appropriate and with the client's knowledge.",
    ],
  },
  {
    id: 'security',
    number: '07',
    title: 'Data Security',
    paragraphs: [
      'NPC Services implements reasonable administrative and technical safeguards to protect personal information from unauthorized access, misuse, loss, or disclosure.',
      'While reasonable security measures are implemented, no method of electronic transmission or storage can be guaranteed to be completely secure.',
    ],
  },
  {
    id: 'retention',
    number: '08',
    title: 'Data Retention',
    paragraphs: [
      'Personal information is retained only for as long as necessary to provide consulting services, maintain business records, and comply with applicable legal requirements.',
      'When personal information is no longer required, NPC Services will take reasonable steps to securely delete or anonymize the information.',
    ],
  },
  {
    id: 'access',
    number: '09',
    title: 'Access and Correction',
    paragraphs: [
      'Individuals may request access to personal information held by NPC Services and request corrections where information is inaccurate or incomplete.',
      'Requests may be submitted using the contact details below.',
    ],
  },
  {
    id: 'changes',
    number: '10',
    title: 'Changes to This Privacy Policy',
    paragraphs: [
      'NPC Services reserves the right to update this Privacy Policy from time to time to reflect changes in operational practices, legal requirements, or services.',
      'The current version will always be available on the NPC Services website.',
    ],
  },
];

const privacyMetaCards: LegalMetaCard[] = [
  {
    label: 'NPC Services',
    title: 'Protection of Personal Information',
    text: 'We are committed to protecting the privacy and confidentiality of personal information provided through our website, consultation systems, and services.',
  },
  {
    label: 'Our Commitment',
    title: 'Responsible and Secure Information Handling',
    text: 'Personal information is handled with care, used only where reasonably necessary, and protected through appropriate administrative and technical safeguards.',
  },
];

export const PrivacyPolicy: React.FC = () => (
  <LegalDocumentPage
    documentTitle="Privacy Policy"
    eyebrow="Privacy and Confidentiality"
    heading={<>Privacy <span className="italic text-gold-500 font-light">Policy</span></>}
    heroCopy="This Privacy Policy explains how NPC Services collects, uses, stores, and protects personal information obtained through enquiries, applications, consultations, and ongoing client engagements."
    metaCards={privacyMetaCards}
    sections={privacySections}
    navLabel="Privacy Policy contents"
    intro="By using our website or providing personal information to NPC Services, you acknowledge that your information will be handled in accordance with this Privacy Policy."
    contactHeading="For privacy-related enquiries, contact NPC Services directly."
    contactCopy="For questions regarding this Privacy Policy or the handling of personal information, please contact Naidu Property Consulting Services using the details provided here."
  />
);
