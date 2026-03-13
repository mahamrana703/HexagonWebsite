import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Mail, Lock, Eye, EyeOff, ArrowRight, User, Building2, Phone, Sparkles, Check } from 'lucide-react';

export function GetStartedPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Get started:', formData);
    // Handle sign up logic
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const features = [
    'Start with 100 free AI calls',
    'No credit card required',
    'Full access to all features',
    'Cancel anytime',
  ];

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center py-20 px-6">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-blue-50" />
      
      {/* Floating orbs */}
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 rounded-full bg-gradient-to-br from-[#189f6c]/20 to-[#5baffc]/20 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-gradient-to-br from-[#1279e4]/20 to-[#189f6c]/20 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Two column layout */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-6xl"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left column - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="pr-8">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Start Your{' '}
                <span className="bg-gradient-to-r from-[#1279e4] to-[#189f6c] bg-clip-text text-transparent">
                  AI Journey
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Join thousands of companies using Hexagon CX to automate their customer interactions with AI.
              </p>

              {/* Features list */}
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#189f6c] to-[#189f6c]/70 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* Trust indicators */}
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span>SOC 2 Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span>GDPR Ready</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right column - Form */}
          <div className="relative rounded-3xl overflow-hidden backdrop-blur-xl bg-white/80 border border-white/20 shadow-2xl p-8 md:p-10">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#189f6c]/5 to-[#1279e4]/5 pointer-events-none" />

            <div className="relative z-10">
              {/* Header */}
              <div className="text-center mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                  className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#189f6c] to-[#1279e4] mb-4 shadow-lg"
                >
                  <Sparkles className="w-8 h-8 text-white" />
                </motion.div>
                
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Create Your Account
                </h2>
                <p className="text-gray-600">
                  Get started with Hexagon CX today
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <User className="w-5 h-5" />
                    </div>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-200 focus:border-[#189f6c] focus:ring-2 focus:ring-[#189f6c]/20 outline-none transition-all text-gray-900 placeholder:text-gray-400"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Work Email
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-200 focus:border-[#189f6c] focus:ring-2 focus:ring-[#189f6c]/20 outline-none transition-all text-gray-900 placeholder:text-gray-400"
                      required
                    />
                  </div>
                </div>

                {/* Company & Phone in grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                      Company
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                        <Building2 className="w-5 h-5" />
                      </div>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Acme Inc"
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-200 focus:border-[#189f6c] focus:ring-2 focus:ring-[#189f6c]/20 outline-none transition-all text-gray-900 placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                        <Phone className="w-5 h-5" />
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-200 focus:border-[#189f6c] focus:ring-2 focus:ring-[#189f6c]/20 outline-none transition-all text-gray-900 placeholder:text-gray-400"
                      />
                    </div>
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <Lock className="w-5 h-5" />
                    </div>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Create a strong password"
                      className="w-full pl-12 pr-12 py-3.5 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-200 focus:border-[#189f6c] focus:ring-2 focus:ring-[#189f6c]/20 outline-none transition-all text-gray-900 placeholder:text-gray-400"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Terms checkbox */}
                <div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-gray-300 text-[#189f6c] focus:ring-[#189f6c]/20 mt-0.5"
                      required
                    />
                    <span className="text-sm text-gray-600">
                      I agree to the{' '}
                      <Link
                        to="/terms-of-service"
                        className="text-[#1279e4] hover:text-[#189f6c] transition-colors font-medium"
                      >
                        Terms of Service
                      </Link>{' '}
                      and{' '}
                      <Link
                        to="/privacy-policy"
                        className="text-[#1279e4] hover:text-[#189f6c] transition-colors font-medium"
                      >
                        Privacy Policy
                      </Link>
                    </span>
                  </label>
                </div>

                {/* Submit button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(24, 159, 108, 0.3)' }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#189f6c] to-[#1279e4] text-white font-semibold shadow-lg relative overflow-hidden group"
                >
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
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Create Account
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </motion.button>
              </form>

              {/* Divider */}
              <div className="flex items-center gap-4 my-6">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gray-200" />
                <span className="text-sm text-gray-500">or sign up with</span>
                <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gray-200" />
              </div>

              {/* Social signup buttons */}
              <div className="grid grid-cols-2 gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="py-3 px-4 rounded-xl bg-white border border-gray-200 hover:border-gray-300 transition-all shadow-sm flex items-center justify-center gap-2 font-medium text-gray-700"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Google
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="py-3 px-4 rounded-xl bg-white border border-gray-200 hover:border-gray-300 transition-all shadow-sm flex items-center justify-center gap-2 font-medium text-gray-700"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                  GitHub
                </motion.button>
              </div>

              {/* Sign in link */}
              <div className="text-center mt-6">
                <p className="text-gray-600">
                  Already have an account?{' '}
                  <Link
                    to="/sign-in"
                    className="text-[#1279e4] hover:text-[#189f6c] transition-colors font-semibold"
                  >
                    Sign In
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile features - shown below form on mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="lg:hidden mt-8 text-center"
        >
          <div className="space-y-3">
            {features.map((feature) => (
              <div key={feature} className="flex items-center justify-center gap-2 text-sm text-gray-600">
                <Check className="w-4 h-4 text-[#189f6c]" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
