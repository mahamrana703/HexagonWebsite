import React from 'react';
import { motion } from 'motion/react';
import { FileText, Scale, ShieldCheck, AlertTriangle, Users, Zap, Phone, Bot, BarChart2, Target, Shield } from 'lucide-react';

export function TermsOfService() {
  const sections = [
    {
      icon: FileText,
      title: '1. Acceptance of Terms',
      content: [
        'By accessing or using the Hexagon CX platform and its associated services (collectively, the "Service"), you ("User," "you," or "your") agree to be legally bound by these Terms of Service ("Terms"). These Terms constitute a binding agreement between you and Hexagon CX ("Company," "we," "us," or "our").',
        'If you are accessing the Service on behalf of a business or organization, you represent that you have the authority to bind that entity to these Terms, and references to "you" shall include that entity.',
        'If you do not agree to these Terms, you must immediately cease all access to and use of the Service.',
      ],
    },
    {
      icon: Users,
      title: '2. Eligibility and Account Registration',
      content: [
        'To use the Service, you must be at least 18 years of age and have full legal capacity to enter into binding contracts under the laws of your jurisdiction.',
        'You agree to provide accurate, current, and complete information when creating your account and to promptly update such information to maintain its accuracy.',
        'You are solely responsible for maintaining the confidentiality of your login credentials and for all activity that occurs under your account. You must notify us immediately of any unauthorized access or security breach.',
        'We reserve the right to refuse registration, suspend, or terminate accounts at our sole discretion, including for violation of these Terms or suspected fraudulent activity.',
      ],
    },
    {
      icon: Zap,
      title: '3. License and Permitted Use',
      content: [
        'Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Service solely for your internal business operations.',
        'You agree not to: (a) sublicense, sell, resell, or commercially exploit the Service; (b) reverse engineer, decompile, or disassemble any component of the Service; (c) modify or create derivative works based on the Service; (d) use the Service to develop a competing product; (e) remove or obscure any proprietary notices; or (f) use the Service in any manner that violates applicable law or regulation.',
        'We reserve all rights not expressly granted in these Terms.',
      ],
    },
    {
      icon: Phone,
      title: '4. Communication Services and Compliance',
      content: [
        'The Service includes features for automated outbound calling, AI-powered voice interactions, campaign management, chatbot communications, and related telephony capabilities. Your use of these features is subject to all applicable telecommunications, privacy, and consumer protection laws.',
        'You are solely responsible for obtaining all legally required consents and permissions from individuals prior to initiating any automated calls, messages, or communications through the Service, including compliance with the Telephone Consumer Protection Act (TCPA), the General Data Protection Regulation (GDPR), CAN-SPAM, and any other applicable local, national, or international laws.',
        'Phone numbers provisioned through the Service are subject to carrier availability and applicable regulations. Numbers are non-transferable and linked to your account. Upon termination, numbers may be released back to the carrier.',
        'You acknowledge that call recordings, transcripts, and AI-generated sentiment data produced through the Service are your responsibility to handle in compliance with applicable wiretapping, privacy, and data protection laws.',
        'Hexagon CX expressly disclaims any liability arising from your failure to comply with applicable communications or consumer protection laws in connection with your use of the Service.',
      ],
    },
    {
      icon: Target,
      title: '5. User Data and Content',
      content: [
        'You retain all ownership rights in the data, content, and information you upload, input, or generate through the Service, including lead records, contact lists, call configurations, and campaign content ("User Data").',
        'By using the Service, you grant Hexagon CX a limited, non-exclusive license to process, store, and use your User Data solely as necessary to provide and maintain the Service.',
        'You represent and warrant that your User Data does not infringe any third-party intellectual property rights and that you have all necessary rights and consents to submit it to the Service.',
        'You are solely responsible for the accuracy, legality, and appropriateness of all User Data. Hexagon CX does not verify or validate any User Data and shall not be liable for any harm resulting from inaccurate or unlawfully obtained data.',
      ],
    },
    {
      icon: BarChart2,
      title: '6. AI Features and Analytics',
      content: [
        'The Service incorporates artificial intelligence and machine learning technologies, including AI voice agents, an integrated chatbot, sentiment analysis, and analytics reporting. These features are provided to assist your business operations and are continuously evolving.',
        'AI-generated outputs, insights, sentiment scores, and analytics are probabilistic in nature and may not always be accurate or complete. You should independently verify AI-generated information before relying on it for material business decisions.',
        'You are responsible for supervising, configuring, and auditing the behavior of any AI agents or chatbot deployed through the Service. You may not configure AI features to deceive end users as to the nature of the interaction where disclosure is required by law.',
        'We may use aggregated, de-identified data derived from Service usage to improve our AI models and analytical capabilities. Such use will be conducted in accordance with our Privacy Policy and will not involve disclosure of your identifiable information.',
      ],
    },
    {
      icon: Scale,
      title: '7. Fees, Billing, and Payment',
      content: [
        'Access to the Service is provided on a subscription basis. By selecting a subscription plan, you agree to pay all applicable fees as set forth on the pricing page, including base subscription fees, usage-based charges, and any fees for additional features such as phone number provisioning.',
        'All fees are charged in advance unless otherwise specified and are non-refundable except as required by applicable law or as expressly stated in your plan terms.',
        'Subscriptions automatically renew at the end of each billing cycle unless cancelled at least 24 hours prior to the renewal date. You may manage or cancel your subscription through the billing section of your account settings.',
        'You authorize us to charge your designated payment method for all applicable fees. If payment fails, we reserve the right to suspend or terminate your access to the Service until outstanding balances are resolved.',
        'We reserve the right to modify our pricing at any time with reasonable advance notice. Continued use of the Service following a price change constitutes acceptance of the updated fees.',
      ],
    },
    {
      icon: ShieldCheck,
      title: '8. Privacy and Data Security',
      content: [
        'Our collection, use, and handling of personal data is governed by our Privacy Policy, which is incorporated into these Terms by reference. By using the Service, you acknowledge and agree to our Privacy Policy.',
        'We implement commercially reasonable technical and organizational measures to protect your data against unauthorized access, loss, or disclosure. However, no method of transmission or storage is entirely secure, and we cannot guarantee absolute security.',
        'You are responsible for maintaining appropriate security practices within your own organization, including controlling access to your account and ensuring that your team members use the Service in accordance with these Terms.',
        'Upon termination of your account, your data will be retained for a limited period in accordance with our data retention schedule and then securely deleted, unless retention is required by applicable law.',
      ],
    },
    {
      icon: AlertTriangle,
      title: '9. Disclaimers and Limitation of Liability',
      content: [
        'THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, OR NON-INFRINGEMENT.',
        'WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS, OR THAT ANY DEFECTS WILL BE CORRECTED.',
        'TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, HEXAGON CX\'S TOTAL CUMULATIVE LIABILITY TO YOU FOR ANY CLAIMS ARISING UNDER OR RELATED TO THESE TERMS OR THE SERVICE SHALL NOT EXCEED THE TOTAL FEES PAID BY YOU TO HEXAGON CX IN THE TWELVE (12) MONTHS IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO THE CLAIM.',
        'IN NO EVENT SHALL HEXAGON CX BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, INCLUDING LOST PROFITS, LOSS OF DATA, LOSS OF GOODWILL, OR BUSINESS INTERRUPTION, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.',
      ],
    },
  ];

  const additionalTerms = [
    {
      title: '10. Intellectual Property',
      content: 'All rights, title, and interest in and to the Service, including its software, algorithms, AI models, designs, trademarks, trade names, and documentation, are and shall remain the exclusive property of Hexagon CX and its licensors. Nothing in these Terms transfers any intellectual property rights to you. You agree not to challenge our ownership of any intellectual property related to the Service.',
    },
    {
      title: '11. Indemnification',
      content: 'You agree to indemnify, defend, and hold harmless Hexagon CX and its affiliates, officers, directors, employees, agents, and licensors from and against any and all claims, liabilities, damages, judgments, losses, costs, and expenses (including reasonable attorneys\' fees) arising out of or relating to: (a) your use of the Service; (b) your User Data; (c) your violation of these Terms; (d) your violation of any applicable law or regulation, including telecommunications and privacy laws; or (e) your infringement of any third-party rights.',
    },
    {
      title: '12. Termination',
      content: 'Either party may terminate these Terms upon 30 days\' written notice. We may suspend or terminate your access immediately and without notice if you materially breach these Terms, engage in fraudulent or abusive conduct, or fail to pay applicable fees. Upon termination, your license to use the Service ceases, and we will handle your data in accordance with our data retention policy. Provisions that by their nature should survive termination, including Sections 9, 10, 11, and 13, shall survive.',
    },
    {
      title: '13. Governing Law and Dispute Resolution',
      content: 'These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions. Any dispute arising out of or relating to these Terms or the Service shall be resolved through binding arbitration administered in San Francisco, California, except that either party may seek injunctive or other equitable relief in a court of competent jurisdiction. You waive any right to participate in a class action lawsuit or class-wide arbitration.',
    },
    {
      title: '14. Changes to the Service',
      content: 'We reserve the right to modify, suspend, or discontinue any aspect of the Service at any time, including features related to campaigns, AI agents, analytics, chatbot functionality, or phone number services, with reasonable prior notice where practicable. We shall not be liable to you or any third party for any modification, suspension, or discontinuation of the Service.',
    },
    {
      title: '15. General Provisions',
      content: 'These Terms, together with our Privacy Policy, constitute the entire agreement between you and Hexagon CX with respect to the Service and supersede all prior agreements. If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect. Our failure to enforce any right or provision shall not constitute a waiver of that right. You may not assign your rights under these Terms without our prior written consent.',
    },
    {
      title: '16. Contact Us',
      content: 'If you have any questions, concerns, or notices regarding these Terms of Service, please contact us at: legal@hexagoncx.com | 123 AI Street, San Francisco, CA 94105, United States.',
    },
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
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto" style={{ lineHeight: '1.7' }}>
              Please read these Terms carefully before using the Hexagon CX platform. Your access to and use of the Service is conditioned on your acceptance of these Terms.
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200/50 shadow-sm"
          >
            <div className="space-y-6">
              {additionalTerms.map((term) => (
                <div key={term.title} className="pb-6 border-b border-gray-100 last:border-b-0 last:pb-0">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{term.title}</h3>
                  <p className="text-gray-700 text-[15px]" style={{ lineHeight: '1.85' }}>{term.content}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-200/50 text-center"
          >
            <ShieldCheck className="w-12 h-12 text-[#1279e4] mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement Acknowledgment</h2>
            <p className="text-gray-700 text-[15px] max-w-2xl mx-auto" style={{ lineHeight: '1.85' }}>
              By creating an account or accessing the Service, you confirm that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree, you must not use the Service.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}