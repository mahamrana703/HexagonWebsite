import React from 'react';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';

export function BlogPage() {
  const posts = [
    {
      title: 'The Future of AI-Powered Customer Service',
      excerpt: 'Explore how AI voice agents are transforming customer interactions and setting new standards for service excellence.',
      author: 'Sarah Johnson',
      date: 'Feb 5, 2026',
      category: 'AI Technology',
      image: '🤖',
    },
    {
      title: '10 Ways to Reduce Call Center Costs with AI',
      excerpt: 'Discover proven strategies to cut operational expenses while improving customer satisfaction.',
      author: 'Michael Chen',
      date: 'Feb 1, 2026',
      category: 'Business',
      image: '💰',
    },
    {
      title: 'Case Study: How Acme Corp Scaled Support 10x',
      excerpt: 'Learn how one company handled massive growth without hiring hundreds of agents.',
      author: 'Emily Rodriguez',
      date: 'Jan 28, 2026',
      category: 'Case Studies',
      image: '📈',
    },
    {
      title: 'Voice AI Best Practices for Enterprise',
      excerpt: 'Essential guidelines for deploying AI voice agents at scale in large organizations.',
      author: 'David Park',
      date: 'Jan 25, 2026',
      category: 'Best Practices',
      image: '🏢',
    },
    {
      title: 'Understanding Natural Language Processing',
      excerpt: 'A deep dive into how our AI understands and responds to customer queries.',
      author: 'Lisa Wang',
      date: 'Jan 20, 2026',
      category: 'Technology',
      image: '🧠',
    },
    {
      title: 'Compliance Guide: GDPR, HIPAA & SOC 2',
      excerpt: 'Everything you need to know about regulatory compliance for AI call centers.',
      author: 'Robert Taylor',
      date: 'Jan 15, 2026',
      category: 'Compliance',
      image: '🔒',
    },
  ];

  return (
    <div className="relative">
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1279e4]/5 via-transparent to-[#189f6c]/5" />
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#1279e4] to-[#189f6c] bg-clip-text text-transparent">
                Blog & Insights
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Expert insights, industry trends, and success stories from the world of AI-powered customer service
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="backdrop-blur-xl bg-white/40 border border-white/30 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer group"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.2) 100%)',
                }}
              >
                <div className="aspect-video bg-gradient-to-br from-[#1279e4]/20 to-[#189f6c]/20 flex items-center justify-center text-6xl">
                  {post.image}
                </div>
                
                <div className="p-6">
                  <div className="inline-block px-3 py-1 rounded-full bg-[#1279e4]/10 text-[#1279e4] text-sm font-semibold mb-4">
                    {post.category}
                  </div>
                  
                  <h2 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-[#1279e4] transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-[#1279e4] font-semibold group-hover:gap-3 transition-all">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
