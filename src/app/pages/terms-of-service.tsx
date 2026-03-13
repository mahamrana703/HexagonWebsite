import React from 'react';
import { motion } from 'motion/react';
import { FileText, Scale, ShieldCheck, AlertTriangle, Users, Zap } from 'lucide-react';

export function TermsOfService() {
  const sections = [
    {
      icon: FileText,
      title: '1. Acceptance of Terms',
      content: [
        'By accessing or using Hexagon CX\'s AI call center platform ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not access or use the Service.',
        'We reserve the right to modify these Terms at any time. We will notify you of material changes via email or through the Service. Your continued use after such modifications constitutes acceptance of the updated Terms.',
      ],
    },
    {
      icon: Users,
      title: '2. Account Registration and Eligibility',
      content: [
        'You must be at least 18 years old and have the legal capacity to enter into contracts to use our Service.',
        'You must provide accurate, complete, and current information during registration and keep your account information updated.',
        'You are responsible for maintaining the confidentiality of your account credentials and all activities under your account.',
        'You must not share your account credentials or allow unauthorized access to your account.',
        'We reserve the right to suspend or terminate accounts that violate these Terms or are used for fraudulent purposes.',
      ],
    },
    {
      icon: Zap,
      title: '3. Use of Service',
      content: [
        'License Grant: Subject to these Terms, we grant you a limited, non-exclusive, non-transferable license to access and use the Service for your internal business purposes.',
        'Restrictions: You may not: (a) reverse engineer, decompile, or disassemble the Service; (b) modify, adapt, or create derivative works; (c) remove proprietary notices; (d) use the Service for illegal purposes; (e) interfere with or disrupt the Service.',
        'You are responsible for all content, data, and calls processed through the Service and must ensure compliance with applicable laws and regulations.',
        'You must obtain necessary consents and permissions for call recordings and data processing in your jurisdiction.',
      ],
    },
    {
      icon: Scale,
      title: '4. Billing and Payment',
      content: [
        'Fees: You agree to pay all fees associated with your selected subscription plan. Fees are charged in advance on a monthly or annual basis.',
        'Payment Method: You must provide valid payment information and authorize us to charge your payment method for all fees.',
        'Auto-Renewal: Subscriptions automatically renew unless cancelled at least 24 hours before the renewal date.',
        'Refunds: Fees are non-refundable except as required by law or as explicitly stated in your plan terms.',
        'Late Payments: Late payments may result in service suspension. We may charge interest on overdue amounts at 1.5% per month or the maximum legal rate.',
      ],
    },
    {
      icon: ShieldCheck,
      title: '5. Data and Privacy',
      content: [
        'Data Ownership: You retain all rights to your data, including call recordings, transcripts, and customer information.',
        'Data Processing: We process your data solely to provide the Service and as described in our Privacy Policy.',
        'Data Security: We implement industry-standard security measures, but cannot guarantee absolute security.',
        'Data Retention: We retain your data according to your retention settings and as required by law.',
        'Data Backup: You are responsible for maintaining backup copies of your data. We are not liable for data loss.',
      ],
    },
    {
      icon: AlertTriangle,
      title: '6. Limitations of Liability',
      content: [
        'DISCLAIMER: THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.',
        'LIMITATION: TO THE MAXIMUM EXTENT PERMITTED BY LAW, OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE 12 MONTHS PRECEDING THE CLAIM.',
        'EXCLUSIONS: WE ARE NOT LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFITS, DATA, OR BUSINESS OPPORTUNITIES.',
        'AI Limitations: While our AI agents are highly sophisticated, they may occasionally produce errors or unexpected results. You are responsible for reviewing and validating AI-generated responses.',
      ],
    },
  ];

  const additionalTerms = [
    {
      title: '7. Intellectual Property',
      content: 'All intellectual property rights in the Service, including software, algorithms, designs, trademarks, and documentation, are owned by Hexagon CX or our licensors. You may not use our intellectual property without prior written consent.',
    },
    {
      title: '8. Termination',
      content: 'Either party may terminate the agreement with 30 days written notice. We may terminate immediately for breach of Terms. Upon termination, you must cease using the Service and we will delete your data according to our retention policy.',
    },
    {
      title: '9. Indemnification',
      content: 'You agree to indemnify and hold Hexagon CX harmless from claims arising from your use of the Service, violation of these Terms, or infringement of third-party rights.',
    },
    {
      title: '10. Governing Law and Disputes',
      content: 'These Terms are governed by California law. Disputes will be resolved through binding arbitration in San Francisco, California, except for claims that may be brought in small claims court.',
    },
    {
      title: '11. Modifications to Service',
      content: 'We reserve the right to modify, suspend, or discontinue any aspect of the Service at any time with reasonable notice. We are not liable for any modification, suspension, or discontinuation.',
    },
    {
      title: '12. Contact Information',
      content: 'For questions about these Terms, contact us at legal@hexagoncx.com or 123 AI Street, San Francisco, CA 94105, USA.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white">
      {/* Header */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50/50" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-blue-200/50 mb-6">
              <Scale className="w-4 h-4 text-[#1279e4]" />
              <span className="text-sm text-gray-600">Last updated: February 9, 2026</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto" style={{ lineHeight: '1.7' }}>
              Please read these terms carefully before using Hexagon CX's AI call center platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="relative p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
                  {/* Glass effect overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1279e4] to-[#5baffc] flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                    </div>
                    
                    <div className="space-y-4">
                      {section.content.map((paragraph, idx) => (
                        <p key={idx} className="text-gray-700" style={{ lineHeight: '1.8' }}>
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Additional Terms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200/50"
          >
            <div className="space-y-6">
              {additionalTerms.map((term, index) => (
                <div key={term.title} className="pb-6 border-b border-gray-200 last:border-b-0 last:pb-0">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{term.title}</h3>
                  <p className="text-gray-700" style={{ lineHeight: '1.8' }}>{term.content}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Acceptance Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-200/50 text-center"
          >
            <ShieldCheck className="w-12 h-12 text-[#1279e4] mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Agreement Acknowledgment
            </h2>
            <p className="text-gray-700" style={{ lineHeight: '1.8' }}>
              By clicking "I Agree" during account registration or by accessing the Service, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
