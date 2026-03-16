import React, { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone, Building, MessageSquare, Send, CheckCircle, AlertCircle } from 'lucide-react';

export function DemoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    preferredDate: '',
    preferredTime: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/book-demo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
          preferredDate: '',
          preferredTime: ''
        });
      } else {
        throw new Error('Failed to book demo');
      }
    } catch (error) {
      console.error('Booking error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#1279e4] via-[#5baffc] to-[#189f6c] bg-clip-text text-transparent">
            Book Your Demo
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the power of our AI-powered voice agents firsthand. Schedule a personalized demo
            to see how we can transform your customer service operations.
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200/50">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Schedule Your Demo</h2>
            <p className="text-gray-600">
              Fill out the form below and we'll get back to you within 24 hours to confirm your demo session.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1279e4] focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1279e4] focus:border-transparent"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1279e4] focus:border-transparent"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name
                </label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1279e4] focus:border-transparent"
                    placeholder="Your Company"
                  />
                </div>
              </div>

              {/* Preferred Date */}
              <div>
                <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    min={today}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1279e4] focus:border-transparent"
                  />
                </div>
              </div>

              {/* Preferred Time */}
              <div>
                <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Time
                </label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="time"
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1279e4] focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Tell us about your needs
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1279e4] focus:border-transparent resize-none"
                  placeholder="Tell us about your current customer service setup and what you'd like to achieve with AI voice agents..."
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#1279e4] to-[#189f6c] text-white rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Booking Demo...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Book Demo
                  </>
                )}
              </button>
            </div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="flex items-center justify-center p-4 bg-green-50 border border-green-200 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                <span className="text-green-800">Demo booked successfully! We'll contact you within 24 hours to confirm your session.</span>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="flex items-center justify-center p-4 bg-red-50 border border-red-200 rounded-lg">
                <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
                <span className="text-red-800">Failed to book demo. Please try again or contact us directly.</span>
              </div>
            )}
          </form>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200/30">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">What to Expect</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="text-center">
                <div className="w-12 h-12 bg-[#1279e4]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-[#1279e4] font-bold text-lg">1</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Platform Overview</h4>
                <p className="text-sm text-gray-600">Learn about our AI voice agents and how they work</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#5baffc]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-[#5baffc] font-bold text-lg">2</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Live Demo</h4>
                <p className="text-sm text-gray-600">See our technology in action with real examples</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#189f6c]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-[#189f6c] font-bold text-lg">3</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Q&A Session</h4>
                <p className="text-sm text-gray-600">Get answers to your specific questions and requirements</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
