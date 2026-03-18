import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Cookie, Settings, Info, Shield, BarChart2, Megaphone } from 'lucide-react';

export function CookiePolicy() {
  const [cookieSettings, setCookieSettings] = useState({
    necessary: true,
    functional: true,
    analytics: true,
    marketing: false,
  });

  const cookieTypes: { id: keyof typeof cookieSettings; icon: React.ElementType; title: string; description: string; required: boolean; examples: string[] }[] = [
    {
      id: 'necessary',
      icon: Shield,
      title: 'Strictly Necessary Cookies',
      description:
        'These cookies are essential for the Hexagon CX platform to function and cannot be disabled. They are set in response to actions you take, such as logging in to your account, authenticating your session, or configuring your dashboard. Without these cookies, core services cannot be provided.',
      required: true,
      examples: [
        'Session authentication tokens to keep you logged in',
        'Security and fraud prevention cookies',
        'Load balancing and server routing cookies',
        'Cookies that remember your cookie consent preferences',
      ],
    },
    {
      id: 'functional',
      icon: Settings,
      title: 'Functional Cookies',
      description:
        'These cookies enable enhanced functionality and personalization within the platform. They allow us to remember your preferences and settings so you do not have to reconfigure them each time you use the Service. Disabling these cookies may affect the usability of certain features.',
      required: false,
      examples: [
        'Dashboard layout and display preferences',
        'Language and regional settings',
        'Saved filters and view configurations in the calls and leads pages',
        'User interface customization options',
      ],
    },
    {
      id: 'analytics',
      icon: BarChart2,
      title: 'Analytics Cookies',
      description:
        'These cookies help us understand how users interact with the Hexagon CX platform by collecting aggregated, anonymized usage data. This information helps us identify which features are most used, diagnose performance issues, and continuously improve the Service.',
      required: false,
      examples: [
        'Page and feature view tracking within the dashboard',
        'Session duration and navigation path analysis',
        'Campaign manager and analytics page interaction metrics',
        'Error and performance monitoring',
      ],
    },
    {
      id: 'marketing',
      icon: Megaphone,
      title: 'Marketing Cookies',
      description:
        'These cookies are used to deliver relevant advertising and promotional content about Hexagon CX across third-party platforms. They help us measure the effectiveness of our marketing campaigns and limit how frequently you see the same advertisement. These cookies are disabled by default.',
      required: false,
      examples: [
        'Remarketing pixels for returning website visitors',
        'LinkedIn Insights for B2B audience targeting',
        'Ad campaign attribution and conversion tracking',
        'Social media engagement tracking',
      ],
    },
  ];

  const handleToggle = (id: keyof typeof cookieSettings) => {
    if (id === 'necessary') return;
    setCookieSettings(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleAcceptAll = () => {
    setCookieSettings({ necessary: true, functional: true, analytics: true, marketing: true });
  };

  const handleRejectOptional = () => {
    setCookieSettings({ necessary: true, functional: false, analytics: false, marketing: false });
  };

  const handleSavePreferences = () => {
    alert('Cookie preferences saved successfully!');
  };

  const thirdParties = [
    { name: 'Google Analytics', purpose: 'Aggregated website and platform usage analytics' },
    { name: 'Stripe', purpose: 'Secure payment processing and billing on the billing page' },
    { name: 'Intercom', purpose: 'Customer support chat and in-app messaging' },
    { name: 'LinkedIn Insight Tag', purpose: 'B2B marketing analytics and campaign performance measurement' },
    { name: 'Sentry', purpose: 'Real-time error monitoring and performance diagnostics' },
  ];

  const browsers = [
    { name: 'Chrome', path: 'Settings → Privacy and security → Cookies and other site data' },
    { name: 'Firefox', path: 'Settings → Privacy & Security → Cookies and Site Data' },
    { name: 'Safari', path: 'Preferences → Privacy → Manage Website Data' },
    { name: 'Edge', path: 'Settings → Cookies and site permissions → Manage and delete cookies' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white">
      {/* Header */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50/50" />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-blue-200/50 mb-6">
              <Cookie className="w-4 h-4 text-[#1279e4]" />
              <span className="text-sm text-gray-600">Effective Date: March 18, 2026</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Cookie Policy</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto" style={{ lineHeight: '1.7' }}>
              This Cookie Policy explains how Hexagon CX uses cookies and similar tracking technologies on its website and platform, and how you can manage your preferences.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto space-y-12">

          {/* What Are Cookies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="relative p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200/50 shadow-lg"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-5">1. What Are Cookies?</h2>
              <div className="space-y-4 text-gray-700 text-[15px]" style={{ lineHeight: '1.85' }}>
                <p>
                  Cookies are small text files placed on your device (computer, tablet, or mobile) when you visit a website or use a web-based application. They are widely used to make websites and platforms work more efficiently, to remember your preferences, and to provide information to the owners of the site.
                </p>
                <p>
                  Hexagon CX uses both first-party cookies (set directly by Hexagon CX) and third-party cookies (set by our trusted partners and service providers). Cookies may be session-based, meaning they expire when you close your browser, or persistent, meaning they remain on your device for a set period of time or until manually deleted.
                </p>
                <p>
                  In addition to cookies, we may use similar technologies such as web beacons, pixel tags, and local storage objects that function in a comparable manner. References to "cookies" in this Policy include these similar technologies unless stated otherwise.
                </p>
              </div>
            </div>
          </motion.div>

          {/* How We Use Cookies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="relative p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200/50 shadow-lg"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-5">2. How We Use Cookies</h2>
              <p className="text-gray-700 text-[15px] mb-4" style={{ lineHeight: '1.85' }}>
                We use cookies across the Hexagon CX website and platform for the following general purposes:
              </p>
              <div className="space-y-3">
                {[
                  'To authenticate users and maintain secure login sessions across the dashboard, calls page, campaign manager, analytics, and leads modules.',
                  'To remember your account settings, display preferences, and configurations so you do not need to re-enter them on each visit.',
                  'To collect anonymized, aggregated data on how users interact with the platform in order to improve features and performance.',
                  'To process payments securely on the billing page through our third-party payment provider.',
                  'To measure the effectiveness of our marketing campaigns and deliver relevant content to prospective customers.',
                  'To detect, investigate, and prevent fraudulent activity and security incidents.',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#1279e4] mt-2 flex-shrink-0" />
                    <p className="text-gray-700 text-[15px]" style={{ lineHeight: '1.75' }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Cookie Types with Toggles */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Types of Cookies We Use</h2>
            <div className="space-y-6">
              {cookieTypes.map((type, index) => {
                const Icon = type.icon;
                const isEnabled = cookieSettings[type.id as keyof typeof cookieSettings];
                return (
                  <motion.div
                    key={type.id}
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ delay: index * 0.05 }}
                  >
                    <div className="relative p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
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
                                <span className="inline-block px-2 py-1 text-xs bg-blue-100 text-[#1279e4] rounded font-medium">
                                  Always Active
                                </span>
                              )}
                            </div>
                          </div>
                          {!type.required && (
                            <button
                              onClick={() => handleToggle(type.id)}
                              className={`relative w-14 h-7 rounded-full transition-colors duration-300 flex-shrink-0 ${isEnabled ? 'bg-[#1279e4]' : 'bg-gray-300'}`}
                            >
                              <motion.div
                                animate={{ x: isEnabled ? 28 : 2 }}
                                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                className="absolute top-1 w-5 h-5 bg-white rounded-full shadow-md"
                              />
                            </button>
                          )}
                        </div>
                        <p className="text-gray-700 text-[15px] mb-5" style={{ lineHeight: '1.85' }}>
                          {type.description}
                        </p>
                        <div>
                          <p className="text-sm font-semibold text-gray-800 mb-2">Examples:</p>
                          <div className="space-y-1">
                            {type.examples.map((example, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <span className="text-[#1279e4] mt-1 text-sm">•</span>
                                <span className="text-sm text-gray-600">{example}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Preference Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="relative p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-200/50"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">Manage Your Preferences</h3>
            <p className="text-gray-600 text-[15px] text-center mb-6" style={{ lineHeight: '1.75' }}>
              You may update your cookie preferences at any time using the controls above or the buttons below. Your selections will be saved to your device.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button onClick={handleAcceptAll} className="px-8 py-3 bg-[#1279e4] text-white rounded-xl hover:bg-[#0d5ab8] transition-colors duration-300 shadow-lg hover:shadow-xl text-[15px] font-medium">
                Accept All Cookies
              </button>
              <button onClick={handleRejectOptional} className="px-8 py-3 bg-white text-gray-700 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors duration-300 text-[15px] font-medium">
                Reject Optional Cookies
              </button>
              <button onClick={handleSavePreferences} className="px-8 py-3 bg-[#189f6c] text-white rounded-xl hover:bg-[#147d56] transition-colors duration-300 shadow-lg hover:shadow-xl text-[15px] font-medium">
                Save My Preferences
              </button>
            </div>
          </motion.div>

          {/* Third-Party Cookies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="relative p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200/50 shadow-sm"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Third-Party Cookies</h3>
              <p className="text-gray-700 text-[15px] mb-6" style={{ lineHeight: '1.85' }}>
                Certain features of the Hexagon CX platform rely on third-party services that may place cookies on your device independently. These cookies are governed by the respective third party's own privacy and cookie policies. We encourage you to review those policies for further information.
              </p>
              <div className="space-y-3">
                {thirdParties.map((tp, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-white/80 border border-gray-100">
                    <span className="w-2 h-2 rounded-full bg-[#1279e4] mt-2 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-900 text-[15px]">{tp.name}: </span>
                      <span className="text-gray-600 text-[15px]">{tp.purpose}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-[14px] mt-5" style={{ lineHeight: '1.75' }}>
                Hexagon CX does not control third-party cookies and is not responsible for their content or practices. To opt out of third-party tracking, please refer to each provider's opt-out mechanism directly.
              </p>
            </div>
          </motion.div>

          {/* Browser Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="relative p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200/50 shadow-sm"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">5. How to Control Cookies via Your Browser</h3>
              <p className="text-gray-700 text-[15px] mb-6" style={{ lineHeight: '1.85' }}>
                In addition to the preference controls above, most web browsers allow you to manage cookies directly through their settings. You can configure your browser to block all cookies, delete existing cookies, or alert you before cookies are stored. Please note that restricting cookies may impair the functionality of the Hexagon CX platform, including login sessions, dashboard preferences, and billing features.
              </p>
              <div className="space-y-3">
                {browsers.map((b, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="text-[#1279e4] mt-1 text-sm">•</span>
                    <p className="text-gray-700 text-[15px]">
                      <span className="font-semibold">{b.name}:</span> {b.path}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-[14px] mt-5" style={{ lineHeight: '1.75' }}>
                For more information on managing cookies, visit <a href="https://www.allaboutcookies.org" target="_blank" rel="noreferrer" className="text-[#1279e4] hover:underline">www.allaboutcookies.org</a>.
              </p>
            </div>
          </motion.div>

          {/* Policy Changes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="relative p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200/50 shadow-sm"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">6. Changes to This Cookie Policy</h3>
              <p className="text-gray-700 text-[15px]" style={{ lineHeight: '1.85' }}>
                We may update this Cookie Policy from time to time to reflect changes in our technology, legal obligations, or the features of the Service. When we make material changes, we will update the effective date at the top of this page and, where appropriate, notify you through the platform or by email. We encourage you to review this Policy periodically. Your continued use of the Service following any changes constitutes your acceptance of the updated Policy.
              </p>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="relative p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200/50 text-center shadow-sm"
          >
            <Cookie className="w-12 h-12 text-[#1279e4] mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Questions About This Policy?</h3>
            <p className="text-gray-700 text-[15px] max-w-xl mx-auto mb-6" style={{ lineHeight: '1.85' }}>
              If you have any questions or concerns about our use of cookies or this Cookie Policy, please contact our privacy team:
            </p>
            <div className="space-y-2">
              <p className="text-gray-700 text-[15px]">
                Email: <a href="mailto:privacy@hexagoncx.com" className="text-[#1279e4] hover:underline font-medium">privacy@hexagoncx.com</a>
              </p>
              <p className="text-gray-700 text-[15px]">Address: 123 AI Street, San Francisco, CA 94105, United States</p>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}