/// <reference types="vite/client" />
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle } from 'lucide-react';
import { GlassCard } from '../components/glass-card';
import emailjs from '@emailjs/browser';

export function PartnershipForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    organizationName: '',
    websiteUrl: '',
    businessType: '',
    interestArea: '',
    businessDetails: '',
    partnershipReason: '',
    estimatedReach: '',
    country: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName) newErrors.firstName = 'First Name is required';
    if (!formData.lastName) newErrors.lastName = 'Last Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email))
      newErrors.email = 'Invalid email address';
    if (!formData.organizationName) newErrors.organizationName = 'Organization Name is required';
    if (!formData.businessType) newErrors.businessType = 'Please select a business type';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      try {
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          {
            from_name: `${formData.firstName} ${formData.lastName}`,
            from_email: formData.email,
            company: formData.organizationName,
            phone: '', // Added for compatibility if same template is used
            message: `
              Business Type: ${formData.businessType}
              Interest Area: ${formData.interestArea}
              Website: ${formData.websiteUrl}
              Reach: ${formData.estimatedReach}
              Country: ${formData.country}
              
              Business Details: ${formData.businessDetails}
              Partnership Reason: ${formData.partnershipReason}
            `,
          },
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );

        setIsSubmitted(true);
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            organizationName: '',
            websiteUrl: '',
            businessType: '',
            interestArea: '',
            businessDetails: '',
            partnershipReason: '',
            estimatedReach: '',
            country: '',
        });
        setErrors({});
        setTimeout(() => setIsSubmitted(false), 5000);
      } catch (error) {
        console.error('Error:', error);
        alert('Failed to send application. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="relative pt-32 pb-20 min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1279e4]/5 via-transparent to-[#189f6c]/5" />
      
      <div className="max-w-3xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Partner Program{' '}
            <span className="bg-gradient-to-r from-[#1279e4] to-[#189f6c] bg-clip-text text-transparent">
              Application
            </span>
          </h1>
          <p className="text-gray-600 text-lg">
            Fill out the form below to apply for our partner program.
          </p>
        </motion.div>

        <GlassCard className="p-8 md:p-10 shadow-xl border-white/40">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
                className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#189f6c]/10 flex items-center justify-center"
              >
                <CheckCircle className="w-12 h-12 text-[#189f6c]" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">Application Received!</h3>
              <p className="text-gray-600">
                Thank you for your interest in partnering with us. Our team will review your application and get back to you shortly.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name *
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl bg-white/80 border ${errors.firstName ? 'border-red-500' : 'border-gray-200'} focus:border-[#1279e4] focus:outline-none focus:ring-2 focus:ring-[#1279e4]/20 transition-all`}
                    placeholder="Enter Your First Name"
                  />
                  {errors.firstName && <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>}
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name *
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl bg-white/80 border ${errors.lastName ? 'border-red-500' : 'border-gray-200'} focus:border-[#1279e4] focus:outline-none focus:ring-2 focus:ring-[#1279e4]/20 transition-all`}
                    placeholder="Enter Your Last Name"
                  />
                  {errors.lastName && <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl bg-white/80 border ${errors.email ? 'border-red-500' : 'border-gray-200'} focus:border-[#1279e4] focus:outline-none focus:ring-2 focus:ring-[#1279e4]/20 transition-all`}
                  placeholder="Email Address"
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="organizationName" className="block text-sm font-medium text-gray-700 mb-1">
                  Organization Name *
                </label>
                <input
                  id="organizationName"
                  type="text"
                  value={formData.organizationName}
                  onChange={(e) => setFormData({ ...formData, organizationName: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl bg-white/80 border ${errors.organizationName ? 'border-red-500' : 'border-gray-200'} focus:border-[#1279e4] focus:outline-none focus:ring-2 focus:ring-[#1279e4]/20 transition-all`}
                  placeholder="Organization / Company Name"
                />
                {errors.organizationName && <p className="mt-1 text-sm text-red-500">{errors.organizationName}</p>}
              </div>

              <div>
                <label htmlFor="websiteUrl" className="block text-sm font-medium text-gray-700 mb-1">
                  Website URL
                </label>
                <input
                  id="websiteUrl"
                  type="url"
                  value={formData.websiteUrl}
                  onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/80 border border-gray-200 focus:border-[#1279e4] focus:outline-none focus:ring-2 focus:ring-[#1279e4]/20 transition-all"
                  placeholder="https://example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Business Type *
                </label>
                <div className="space-y-2">
                  {['Agency', 'SaaS Company', 'E-commerce', 'Influencer', 'Freelancer'].map((type) => (
                    <label key={type} className="flex items-center">
                      <input
                        type="radio"
                        name="businessType"
                        value={type}
                        checked={formData.businessType === type}
                        onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                        className="w-4 h-4 text-[#1279e4] bg-white border-gray-300 focus:ring-[#1279e4]"
                      />
                      <span className="ml-2 text-gray-700">{type}</span>
                    </label>
                  ))}
                </div>
                {errors.businessType && <p className="mt-1 text-sm text-red-500">{errors.businessType}</p>}
              </div>

              <div>
                <label htmlFor="interestArea" className="block text-sm font-medium text-gray-700 mb-1">
                  Partnership Interest Area
                </label>
                <select
                  id="interestArea"
                  value={formData.interestArea}
                  onChange={(e) => setFormData({ ...formData, interestArea: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/80 border border-gray-200 focus:border-[#1279e4] focus:outline-none focus:ring-2 focus:ring-[#1279e4]/20 transition-all"
                >
                  <option value="">- Select -</option>
                  <option value="Referral Partner">Referral Partner</option>
                  <option value="Reseller Partner">Reseller Partner</option>
                  <option value="Technology Partner">Technology Partner</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="businessDetails" className="block text-sm font-medium text-gray-700 mb-1">
                  Tell us about your business
                </label>
                <textarea
                  id="businessDetails"
                  value={formData.businessDetails}
                  onChange={(e) => setFormData({ ...formData, businessDetails: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl bg-white/80 border border-gray-200 focus:border-[#1279e4] focus:outline-none focus:ring-2 focus:ring-[#1279e4]/20 transition-all resize-none"
                />
              </div>

              <div>
                <label htmlFor="partnershipReason" className="block text-sm font-medium text-gray-700 mb-1">
                  Why do you want to partner with us?
                </label>
                <textarea
                  id="partnershipReason"
                  value={formData.partnershipReason}
                  onChange={(e) => setFormData({ ...formData, partnershipReason: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl bg-white/80 border border-gray-200 focus:border-[#1279e4] focus:outline-none focus:ring-2 focus:ring-[#1279e4]/20 transition-all resize-none"
                />
              </div>

              <div>
                <label htmlFor="estimatedReach" className="block text-sm font-medium text-gray-700 mb-1">
                  Estimated Monthly Reach
                </label>
                <input
                  id="estimatedReach"
                  type="text"
                  value={formData.estimatedReach}
                  onChange={(e) => setFormData({ ...formData, estimatedReach: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/80 border border-gray-200 focus:border-[#1279e4] focus:outline-none focus:ring-2 focus:ring-[#1279e4]/20 transition-all"
                />
              </div>

              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                  Country
                </label>
                <select
                  id="country"
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/80 border border-gray-200 focus:border-[#1279e4] focus:outline-none focus:ring-2 focus:ring-[#1279e4]/20 transition-all"
                >
                  <option value="">Select Country</option>
                  <option value="US">United States</option>
                  <option value="UK">United Kingdom</option>
                  <option value="CA">Canada</option>
                  <option value="AU">Australia</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="pt-4 flex justify-center">
                 <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-3 bg-[#4285F4] hover:bg-[#3367D6] text-white rounded-md font-semibold shadow-md transition-colors duration-200 flex items-center justify-center gap-2 flex-grow-0 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'SUBMITTING...' : 'SUBMIT FORM'}
                 </motion.button>
              </div>
            </form>
          )}
        </GlassCard>
      </div>
    </div>
  );
}
