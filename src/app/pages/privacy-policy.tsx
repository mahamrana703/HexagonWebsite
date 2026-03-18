import React from 'react';
import { motion } from 'motion/react';
import { Shield, Eye, Lock, Database, UserCheck, AlertCircle, Globe, PhoneCall } from 'lucide-react';

export function PrivacyPolicy() {
  const sections = [
    {
      icon: Eye,
      title: '1. Information We Collect',
      content: [
        'Account and Registration Data: When you create an account, we collect personal information such as your name, email address, phone number, company name, job title, and billing information.',
        'Usage and Technical Data: We automatically collect information about how you interact with the Service, including IP address, browser type, operating system, pages visited, session duration, and feature usage patterns within the dashboard.',
        'Call and Communication Data: When you use the Service\'s calling and campaign features, we collect and store call recordings, transcripts, AI-generated sentiment scores, call metadata (such as timestamps, duration, and call outcomes), and chatbot conversation logs. This data is associated with your account and processed in accordance with this Policy.',
        'Lead and Contact Data: Any lead records, contact lists, or customer information you upload or create within the platform are collected and stored as part of the Service.',
        'Payment Information: Billing details such as credit card numbers are collected and processed by our third-party payment processor. Hexagon CX does not store full payment card information on its own systems.',
      ],
    },
    {
      icon: Database,
      title: '2. How We Use Your Information',
      content: [
        'To provide, operate, maintain, and improve the Service, including the dashboard, AI voice agents, chatbot, campaign manager, analytics, leads management, and phone number provisioning features.',
        'To process transactions, manage your subscription, and send billing-related communications.',
        'To generate and display analytics, sentiment reports, call summaries, and other insights within your account dashboard.',
        'To train, evaluate, and improve our AI models and machine learning systems using aggregated and de-identified data.',
        'To send transactional communications such as account notifications, security alerts, and service updates.',
        'To respond to support inquiries, investigate complaints, and resolve disputes.',
        'To detect, prevent, and address fraud, security incidents, and violations of our Terms of Service.',
        'To comply with applicable legal obligations and respond to lawful requests from public authorities.',
      ],
    },
    {
      icon: PhoneCall,
      title: '3. Call Recordings and AI-Processed Data',
      content: [
        'The Service processes voice calls, transcripts, and chatbot interactions on your behalf. This data may include conversations between your AI agents and end users, outbound campaign call recordings, and chatbot session logs.',
        'You, as the account holder, are the data controller for any personal data of third parties (such as your customers or leads) that is processed through the Service. Hexagon CX acts as a data processor with respect to such third-party data.',
        'You are responsible for ensuring that all individuals whose data is processed through the Service have been informed of and have consented to such processing as required by applicable law, including any recording disclosures required under wiretapping or telecommunications statutes.',
        'AI-generated outputs such as sentiment scores, call summaries, and lead classifications are derived from your call data and made available to you within your account. These outputs are not shared with third parties except as described in this Policy.',
      ],
    },
    {
      icon: Lock,
      title: '4. Data Security',
      content: [
        'We implement commercially reasonable and industry-standard technical and organizational security measures designed to protect your personal information against unauthorized access, loss, misuse, disclosure, alteration, or destruction.',
        'All data transmitted between your browser or application and our servers is encrypted using TLS/SSL protocols. Data at rest is encrypted using AES-256 or equivalent standards.',
        'Access to personal data within our organization is restricted on a need-to-know basis, and all personnel with access to personal data are subject to confidentiality obligations.',
        'Our infrastructure is hosted in SOC 2 Type II certified data centers with continuous monitoring, intrusion detection, and automated alerting systems.',
        'While we take significant steps to protect your data, no security system is impenetrable. We cannot guarantee the absolute security of your information and encourage you to use strong, unique credentials for your account.',
      ],
    },
    {
      icon: UserCheck,
      title: '5. Your Rights and Choices',
      content: [
        'Access and Correction: You may access and update your account information at any time through your profile settings. If you need to correct inaccuracies that cannot be updated through the interface, please contact us.',
        'Data Portability: You have the right to request a copy of your personal data in a structured, commonly used, and machine-readable format where technically feasible.',
        'Deletion: You may request the deletion of your personal information. We will honor such requests subject to our legal obligations to retain certain data and our legitimate business interests.',
        'Restriction and Objection: Where applicable law provides, you may request that we restrict or cease certain processing of your personal data.',
        'Opt-Out of Marketing: You may unsubscribe from promotional communications at any time by following the unsubscribe link in any marketing email or by contacting us directly. Transactional and account-related communications are not subject to opt-out.',
        'Withdraw Consent: Where processing is based on your consent, you may withdraw that consent at any time without affecting the lawfulness of processing carried out prior to withdrawal.',
      ],
    },
    {
      icon: Shield,
      title: '6. Data Retention',
      content: [
        'We retain your personal information for as long as your account is active or as necessary to provide the Service, comply with our legal obligations, resolve disputes, and enforce our agreements.',
        'Call recordings, transcripts, and AI-generated data are retained in accordance with the retention settings configured in your account, subject to a maximum retention period of seven (7) years unless a longer period is required by law.',
        'Following account termination, we will delete or anonymize your personal data within 30 days, except where retention is required by applicable law, regulatory obligation, or for the resolution of pending disputes.',
        'Aggregated and de-identified data derived from your usage may be retained indefinitely for analytical and model improvement purposes, as it can no longer be attributed to any individual.',
      ],
    },
    {
      icon: AlertCircle,
      title: '7. Sharing and Disclosure of Information',
      content: [
        'We do not sell, rent, or trade your personal information to third parties for their own marketing or commercial purposes.',
        'Service Providers: We may share your information with trusted third-party vendors and service providers who assist us in operating the Service, including cloud infrastructure providers, payment processors, analytics tools, and customer support platforms. All such providers are bound by contractual data processing agreements requiring them to protect your information.',
        'Business Transfers: In the event of a merger, acquisition, reorganization, or sale of all or substantially all of our assets, your information may be transferred as part of that transaction. We will notify you of any such change and the choices available to you.',
        'Legal Requirements: We may disclose your information when required to do so by law, court order, or governmental authority, or when we believe in good faith that disclosure is necessary to protect our rights, your safety, or the safety of others.',
        'With Your Consent: We may share your information with third parties when you have given us explicit consent to do so.',
      ],
    },
    {
      icon: Globe,
      title: '8. International Data Transfers',
      content: [
        'Hexagon CX is based in the United States. If you access the Service from outside the United States, your information may be transferred to, stored, and processed in the United States or other countries where our service providers operate.',
        'Where we transfer personal data originating from the European Economic Area (EEA), the United Kingdom, or Switzerland to countries not recognized as providing an adequate level of data protection, we rely on appropriate safeguards such as Standard Contractual Clauses (SCCs) as approved by the relevant supervisory authority.',
        'By using the Service, you acknowledge and consent to the transfer of your information to countries outside your country of residence, which may have different data protection rules than your country.',
      ],
    },
  ];

  const complianceItems = [
    'Right to access and obtain a copy of your personal data',
    'Right to rectification of inaccurate or incomplete data',
    'Right to erasure ("right to be forgotten") where legally applicable',
    'Right to restriction of processing in certain circumstances',
    'Right to data portability in a structured, machine-readable format',
    'Right to object to processing based on legitimate interests',
    'Right to opt out of the sale of personal information (we do not sell your data)',
    'Right to non-discrimination for exercising your privacy rights (CCPA)',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white">
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50/50" />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-blue-200/50 mb-6">
              <Shield className="w-4 h-4 text-[#1279e4]" />
              <span className="text-sm text-gray-600">Effective Date: March 18, 2026</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto" style={{ lineHeight: '1.7' }}>
              This Privacy Policy describes how Hexagon CX collects, uses, stores, and protects personal information in connection with its AI-powered call center platform and related services.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="relative"
              >
                <div className="relative p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1279e4] to-[#5baffc] flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                    </div>
                    <div className="space-y-4">
                      {section.content.map((paragraph, idx) => (
                        <p key={idx} className="text-gray-700 text-[15px]" style={{ lineHeight: '1.85' }}>
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* GDPR & CCPA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-200/50"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1279e4] to-[#5baffc] flex items-center justify-center flex-shrink-0">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">9. GDPR & CCPA Compliance</h2>
            </div>
            <p className="text-gray-700 text-[15px] mb-6" style={{ lineHeight: '1.85' }}>
              Hexagon CX is committed to compliance with the General Data Protection Regulation (GDPR) for individuals in the European Economic Area and the United Kingdom, and the California Consumer Privacy Act (CCPA) for California residents. Depending on your jurisdiction, you may be entitled to the following rights:
            </p>
            <div className="space-y-3">
              {complianceItems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#1279e4] mt-2 flex-shrink-0" />
                  <p className="text-gray-700 text-[15px]" style={{ lineHeight: '1.75' }}>{item}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-700 text-[15px] mt-6" style={{ lineHeight: '1.85' }}>
              To exercise any of the rights above, please submit a request to our Data Protection Officer using the contact details below. We will respond within the timeframes required by applicable law (generally 30 days). We may need to verify your identity before processing your request.
            </p>
          </motion.div>

          {/* Cookies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200/50 shadow-sm"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 text-[15px] mb-4" style={{ lineHeight: '1.85' }}>
              We use cookies and similar tracking technologies (such as pixels and local storage) to operate and improve the Service, remember your preferences, analyze usage patterns, and support authentication and security functions.
            </p>
            <p className="text-gray-700 text-[15px] mb-4" style={{ lineHeight: '1.85' }}>
              You may control cookie settings through your browser preferences. Disabling certain cookies may affect the functionality of the Service. Where required by law, we will seek your consent before placing non-essential cookies.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">11. Changes to This Policy</h2>
            <p className="text-gray-700 text-[15px]" style={{ lineHeight: '1.85' }}>
              We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or the features of the Service. We will notify you of material changes by posting the revised Policy on our website and, where appropriate, by sending you an email notification. We encourage you to review this Policy periodically. Your continued use of the Service following the posting of changes constitutes your acceptance of the updated Policy.
            </p>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200/50 text-center shadow-sm"
          >
            <Shield className="w-12 h-12 text-[#1279e4] mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions About This Policy?</h2>
            <p className="text-gray-700 text-[15px] max-w-xl mx-auto mb-6" style={{ lineHeight: '1.85' }}>
              If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your personal information, please contact our Data Protection Officer:
            </p>
            <div className="space-y-2">
              <p className="text-gray-700 text-[15px]">
                Email: <a href="mailto:privacy@hexagoncx.com" className="text-[#1279e4] hover:underline font-medium">privacy@hexagoncx.com</a>
              </p>
              <p className="text-gray-700 text-[15px]">
                Address: 123 AI Street, San Francisco, CA 94105, United States
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}