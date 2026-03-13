import React from 'react';
import { motion } from 'motion/react';
import { Shield, Eye, Lock, Database, UserCheck, AlertCircle } from 'lucide-react';

export function PrivacyPolicy() {
  const sections = [
    {
      icon: Eye,
      title: 'Information We Collect',
      content: [
        'We collect information that you provide directly to us, including name, email address, phone number, company name, and any other information you choose to provide.',
        'We automatically collect certain information about your device when you use our services, including IP address, browser type, operating system, and usage data.',
        'Call recordings and transcripts processed through our AI agents are stored securely and used only for the purposes you specify.',
      ],
    },
    {
      icon: Database,
      title: 'How We Use Your Information',
      content: [
        'To provide, maintain, and improve our AI call center services',
        'To process and complete transactions and send related information',
        'To send technical notices, updates, security alerts, and support messages',
        'To respond to your comments, questions, and provide customer service',
        'To monitor and analyze trends, usage, and activities in connection with our services',
      ],
    },
    {
      icon: Lock,
      title: 'Data Security',
      content: [
        'We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.',
        'All data transmissions are encrypted using TLS/SSL protocols.',
        'We maintain strict access controls and regularly audit our security practices.',
        'Our servers are hosted in SOC 2 Type II certified data centers with 24/7 monitoring.',
      ],
    },
    {
      icon: UserCheck,
      title: 'Your Rights and Choices',
      content: [
        'Access and Update: You may access and update your account information at any time.',
        'Data Portability: You have the right to request a copy of your data in a portable format.',
        'Deletion: You may request deletion of your personal information, subject to legal requirements.',
        'Opt-Out: You can opt out of promotional communications at any time.',
        'Cookie Controls: You can manage cookie preferences through your browser settings.',
      ],
    },
    {
      icon: Shield,
      title: 'Data Retention',
      content: [
        'We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this policy.',
        'Call recordings and transcripts are retained according to your specified retention settings, with a maximum of 7 years.',
        'After account deletion, we may retain certain information for legal compliance, fraud prevention, and legitimate business purposes.',
      ],
    },
    {
      icon: AlertCircle,
      title: 'Third-Party Services',
      content: [
        'We may share your information with trusted third-party service providers who assist us in operating our platform, including cloud hosting, analytics, and payment processing.',
        'We do not sell your personal information to third parties.',
        'All third-party providers are contractually obligated to maintain the confidentiality and security of your information.',
      ],
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
              <Shield className="w-4 h-4 text-[#1279e4]" />
              <span className="text-sm text-gray-600">Last updated: February 9, 2026</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto" style={{ lineHeight: '1.7' }}>
              Your privacy is important to us. This policy explains how Hexagon CX collects, uses, and protects your personal information.
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

          {/* GDPR & CCPA Compliance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-200/50"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              GDPR & CCPA Compliance
            </h2>
            <p className="text-gray-700 mb-4" style={{ lineHeight: '1.8' }}>
              Hexagon CX is committed to compliance with the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA). We respect your rights under these regulations, including:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-[#1279e4] mt-1">•</span>
                <span>Right to access your personal data</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#1279e4] mt-1">•</span>
                <span>Right to rectification and correction</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#1279e4] mt-1">•</span>
                <span>Right to erasure ("right to be forgotten")</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#1279e4] mt-1">•</span>
                <span>Right to data portability</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#1279e4] mt-1">•</span>
                <span>Right to opt-out of data sale (we do not sell your data)</span>
              </li>
            </ul>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200/50 text-center"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Questions About Privacy?
            </h2>
            <p className="text-gray-700 mb-6" style={{ lineHeight: '1.8' }}>
              If you have any questions about this Privacy Policy or our data practices, please contact our Data Protection Officer:
            </p>
            <div className="space-y-2">
              <p className="text-gray-700">
                Email: <a href="mailto:privacy@hexagoncx.com" className="text-[#1279e4] hover:underline">privacy@hexagoncx.com</a>
              </p>
              <p className="text-gray-700">
                Address: 123 AI Street, San Francisco, CA 94105, USA
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
