import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Cookie, CheckCircle, XCircle, Settings, Info, Shield } from 'lucide-react';

export function CookiePolicy() {
  const [cookieSettings, setCookieSettings] = useState({
    necessary: true,
    functional: true,
    analytics: true,
    marketing: false,
  });

  const cookieTypes = [
    {
      id: 'necessary',
      icon: Shield,
      title: 'Strictly Necessary Cookies',
      description: 'These cookies are essential for the website to function properly. They enable core functionality such as security, network management, and accessibility.',
      required: true,
      examples: [
        'Session cookies for user authentication',
        'Security cookies for fraud prevention',
        'Load balancing cookies',
      ],
    },
    {
      id: 'functional',
      icon: Settings,
      title: 'Functional Cookies',
      description: 'These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings.',
      required: false,
      examples: [
        'Language preferences',
        'User interface customization',
        'Video player settings',
      ],
    },
    {
      id: 'analytics',
      icon: Info,
      title: 'Analytics Cookies',
      description: 'These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.',
      required: false,
      examples: [
        'Google Analytics',
        'Pageview tracking',
        'Session duration analysis',
      ],
    },
    {
      id: 'marketing',
      icon: CheckCircle,
      title: 'Marketing Cookies',
      description: 'These cookies track your online activity to help advertisers deliver more relevant advertising or limit how many times you see an ad.',
      required: false,
      examples: [
        'Remarketing pixels',
        'Social media tracking',
        'Ad campaign performance',
      ],
    },
  ];

  const handleToggle = (id: string) => {
    if (id === 'necessary') return; // Can't disable necessary cookies
    setCookieSettings(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleAcceptAll = () => {
    setCookieSettings({
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
    });
  };

  const handleRejectOptional = () => {
    setCookieSettings({
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false,
    });
  };

  const handleSavePreferences = () => {
    // In a real application, this would save preferences to localStorage or a cookie
    alert('Cookie preferences saved successfully!');
  };

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
              <Cookie className="w-4 h-4 text-[#1279e4]" />
              <span className="text-sm text-gray-600">Last updated: February 9, 2026</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto" style={{ lineHeight: '1.7' }}>
              Learn about how Hexagon CX uses cookies and similar technologies to enhance your experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What Are Cookies Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200/50"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What Are Cookies?</h2>
            <div className="space-y-4 text-gray-700" style={{ lineHeight: '1.8' }}>
              <p>
                Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences, understanding how you use our site, and improving our services.
              </p>
              <p>
                We use both first-party cookies (set by Hexagon CX) and third-party cookies (set by our partners and service providers).
              </p>
            </div>
          </motion.div>

          {/* Cookie Types with Controls */}
          <div className="space-y-6">
            {cookieTypes.map((type, index) => {
              const Icon = type.icon;
              const isEnabled = cookieSettings[type.id as keyof typeof cookieSettings];
              
              return (
                <motion.div
                  key={type.id}
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
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-4 flex-1">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1279e4] to-[#5baffc] flex items-center justify-center flex-shrink-0">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-900 mb-1">{type.title}</h3>
                            {type.required && (
                              <span className="inline-block px-2 py-1 text-xs bg-red-100 text-red-700 rounded">
                                Always Active
                              </span>
                            )}
                          </div>
                        </div>
                        
                        {/* Toggle Switch */}
                        {!type.required && (
                          <button
                            onClick={() => handleToggle(type.id)}
                            className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${
                              isEnabled ? 'bg-[#1279e4]' : 'bg-gray-300'
                            }`}
                          >
                            <motion.div
                              animate={{ x: isEnabled ? 28 : 2 }}
                              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                              className="absolute top-1 w-5 h-5 bg-white rounded-full shadow-md"
                            />
                          </button>
                        )}
                      </div>
                      
                      <p className="text-gray-700 mb-4" style={{ lineHeight: '1.8' }}>
                        {type.description}
                      </p>
                      
                      <div className="space-y-2">
                        <p className="text-sm font-semibold text-gray-800">Examples:</p>
                        <ul className="space-y-1">
                          {type.examples.map((example, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                              <span className="text-[#1279e4] mt-1">•</span>
                              <span>{example}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-200/50"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Manage Your Cookie Preferences
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={handleAcceptAll}
                className="px-8 py-3 bg-[#1279e4] text-white rounded-xl hover:bg-[#0d5ab8] transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Accept All Cookies
              </button>
              <button
                onClick={handleRejectOptional}
                className="px-8 py-3 bg-white text-gray-700 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors duration-300"
              >
                Reject Optional Cookies
              </button>
              <button
                onClick={handleSavePreferences}
                className="px-8 py-3 bg-[#189f6c] text-white rounded-xl hover:bg-[#147d56] transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Save My Preferences
              </button>
            </div>
          </motion.div>

          {/* Additional Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200/50"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              How to Control Cookies
            </h3>
            <div className="space-y-4 text-gray-700" style={{ lineHeight: '1.8' }}>
              <p>
                Most web browsers allow you to control cookies through their settings. You can set your browser to refuse cookies or delete certain cookies. However, please note that if you delete cookies or refuse to accept them, you might not be able to use all the features we offer.
              </p>
              <p className="font-semibold">Browser-specific instructions:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#1279e4] mt-1">•</span>
                  <span><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1279e4] mt-1">•</span>
                  <span><strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1279e4] mt-1">•</span>
                  <span><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1279e4] mt-1">•</span>
                  <span><strong>Edge:</strong> Settings → Cookies and site permissions → Manage and delete cookies</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Third-Party Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200/50"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Third-Party Cookies
            </h3>
            <div className="space-y-4 text-gray-700" style={{ lineHeight: '1.8' }}>
              <p>
                We use the following third-party services that may set cookies on your device:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#1279e4] mt-1">•</span>
                  <span><strong>Google Analytics:</strong> For website usage analytics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1279e4] mt-1">•</span>
                  <span><strong>Intercom:</strong> For customer support and chat functionality</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1279e4] mt-1">•</span>
                  <span><strong>Stripe:</strong> For secure payment processing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1279e4] mt-1">•</span>
                  <span><strong>LinkedIn Insights:</strong> For business analytics and advertising</span>
                </li>
              </ul>
              <p>
                These third parties have their own privacy policies governing their use of information.
              </p>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200/50 text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Questions About Cookies?
            </h3>
            <p className="text-gray-700 mb-6" style={{ lineHeight: '1.8' }}>
              If you have any questions about our use of cookies, please contact us at:
            </p>
            <p className="text-gray-700">
              Email: <a href="mailto:privacy@hexagoncx.com" className="text-[#1279e4] hover:underline">privacy@hexagoncx.com</a>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
