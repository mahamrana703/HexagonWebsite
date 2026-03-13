import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cookie, X, Settings } from 'lucide-react';
import { Link } from 'react-router';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem('cookieConsent');
    if (!hasAccepted) {
      // Show banner after a short delay
      setTimeout(() => {
        setIsVisible(true);
      }, 1500);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-6 left-6 right-6 z-[100] pointer-events-none"
        >
          <div className="max-w-6xl mx-auto pointer-events-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl backdrop-blur-xl bg-white/90 border border-white/20">
              {/* Animated gradient background */}
              <motion.div
                className="absolute inset-0 opacity-10"
                style={{
                  background: 'linear-gradient(135deg, #1279e4, #189f6c, #5baffc)',
                  backgroundSize: '200% 200%',
                }}
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />

              {/* Content */}
              <div className="relative z-10 p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#1279e4] to-[#5baffc] flex items-center justify-center shadow-lg">
                      <Cookie className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      🍪 We Value Your Privacy
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
                      By clicking "Accept All", you consent to our use of cookies.{' '}
                      <Link 
                        to="/cookie-policy" 
                        className="text-[#1279e4] hover:text-[#189f6c] underline transition-colors"
                      >
                        Learn more
                      </Link>
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleReject}
                      className="px-6 py-3 rounded-xl bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 transition-all shadow-sm whitespace-nowrap text-sm font-medium"
                    >
                      Reject All
                    </motion.button>
                    
                    <Link to="/cookie-policy">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 rounded-xl bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 transition-all shadow-sm whitespace-nowrap text-sm font-medium flex items-center gap-2"
                      >
                        <Settings className="w-4 h-4" />
                        Customize
                      </motion.button>
                    </Link>

                    <motion.button
                      whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(18, 121, 228, 0.3)' }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleAcceptAll}
                      className="px-8 py-3 rounded-xl bg-gradient-to-r from-[#1279e4] to-[#5baffc] text-white font-semibold shadow-lg whitespace-nowrap text-sm relative overflow-hidden group"
                    >
                      {/* Shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        animate={{
                          x: ['-100%', '200%'],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                      />
                      <span className="relative z-10">Accept All Cookies</span>
                    </motion.button>
                  </div>

                  {/* Close button */}
                  <button
                    onClick={handleReject}
                    className="absolute top-4 right-4 md:relative md:top-0 md:right-0 w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
