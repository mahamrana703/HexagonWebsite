import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { LineChart, Line, AreaChart, Area, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { GlassCard } from './glass-card';
import { Phone, TrendingUp, Users, Clock } from 'lucide-react';
import { FloatingParticles } from './floating-particles';
import { ParallaxElement } from './parallax-element';

const generateChartData = () => {
  return Array.from({ length: 12 }, (_, i) => ({
    name: `${i * 2}:00`,
    calls: Math.floor(Math.random() * 100) + 50,
  }));
};

export function DashboardSection() {
  const [activeCalls, setActiveCalls] = useState(47);
  const [successRate, setSuccessRate] = useState(96.2);
  const [sentiment, setSentiment] = useState(94);
  const [avgDuration, setAvgDuration] = useState(3.42);
  const [chartData] = useState(generateChartData());

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCalls((prev) => prev + Math.floor(Math.random() * 5) - 2);
      setSuccessRate((prev) => Math.min(99, Math.max(90, prev + (Math.random() - 0.5) * 0.5)));
      setSentiment((prev) => Math.min(99, Math.max(85, prev + (Math.random() - 0.5) * 2)));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-6 relative overflow-hidden" style={{ transform: 'none' }}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50" />
      <FloatingParticles />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <ParallaxElement speed={0.3}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2
              className="mb-4"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: '700',
              }}
            >
              See Your AI Agents in{' '}
              <span className="bg-gradient-to-r from-[#1279e4] to-[#189f6c] bg-clip-text text-transparent">
                Action
              </span>
            </h2>
            <p className="text-gray-600 text-lg">Real-time analytics and performance metrics</p>
          </motion.div>
        </ParallaxElement>

        <ParallaxElement speed={0.2}>
          <GlassCard delay={0.3} className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <motion.div
                className="p-6 rounded-xl bg-gradient-to-br from-[#1279e4]/10 to-[#5baffc]/10"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <motion.div 
                    className="w-12 h-12 flex-shrink-0 rounded-lg bg-[#1279e4]/20 flex items-center justify-center"
                    animate={{
                      boxShadow: [
                        '0 0 0 0 rgba(18, 121, 228, 0.4)',
                        '0 0 0 10px rgba(18, 121, 228, 0)',
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
                  >
                    <Phone className="w-6 h-6 text-[#1279e4]" />
                  </motion.div>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm text-gray-600 mb-1">Active Calls</div>
                    <motion.div
                      className="text-3xl font-bold text-[#1279e4] truncate"
                      key={activeCalls}
                      initial={{ scale: 1.2 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {activeCalls}
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="p-6 rounded-xl bg-gradient-to-br from-[#189f6c]/10 to-[#189f6c]/5"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-12 h-12 flex-shrink-0 rounded-lg bg-[#189f6c]/20 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-[#189f6c]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm text-gray-600 mb-1">Success Rate</div>
                    <motion.div
                      className="text-3xl font-bold text-[#189f6c] truncate"
                      key={successRate.toFixed(1)}
                      initial={{ scale: 1.2 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {successRate.toFixed(1)}%
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="p-6 rounded-xl bg-gradient-to-br from-[#5baffc]/10 to-[#5baffc]/5"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-12 h-12 flex-shrink-0 rounded-lg bg-[#5baffc]/20 flex items-center justify-center">
                    <Users className="w-6 h-6 text-[#5baffc]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm text-gray-600 mb-1">Positive Sentiment</div>
                    <motion.div
                      className="text-3xl font-bold text-[#5baffc] truncate"
                      key={sentiment}
                      initial={{ scale: 1.2 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {sentiment}%
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-300/5"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-12 h-12 flex-shrink-0 rounded-lg bg-purple-500/20 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm text-gray-600 mb-1">Avg Duration</div>
                    <div className="text-3xl font-bold text-purple-600 truncate">
                      {avgDuration.toFixed(2)}m
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-white/50">
                <h3 className="mb-4 font-semibold text-gray-800">Call Volume (24h)</h3>
                <ResponsiveContainer width="100%" height={200}>
                  <AreaChart data={chartData}>
                    <defs>
                      <linearGradient id="colorCalls" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#1279e4" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#1279e4" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} />
                    <YAxis stroke="#94a3b8" fontSize={12} />
                    <Area
                      type="monotone"
                      dataKey="calls"
                      stroke="#1279e4"
                      strokeWidth={2}
                      fill="url(#colorCalls)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div className="p-6 rounded-xl bg-white/50">
                <h3 className="mb-4 font-semibold text-gray-800">AI Learning Progress</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-600">Language Processing</span>
                      <span className="text-sm font-semibold text-[#1279e4]">98%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-[#1279e4] to-[#5baffc]"
                        initial={{ width: 0 }}
                        whileInView={{ width: '98%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-600">Sentiment Analysis</span>
                      <span className="text-sm font-semibold text-[#189f6c]">95%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-[#189f6c] to-[#5baffc]"
                        initial={{ width: 0 }}
                        whileInView={{ width: '95%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.6 }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-600">Intent Recognition</span>
                      <span className="text-sm font-semibold text-[#5baffc]">92%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-[#5baffc] to-[#1279e4]"
                        initial={{ width: 0 }}
                        whileInView={{ width: '92%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.7 }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </ParallaxElement>
      </div>
    </section>
  );
}