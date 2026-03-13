import React from 'react';
import { motion } from 'motion/react';
import { Code2, FileCode, Webhook, Key } from 'lucide-react';

export function APIReferencePage() {
  return (
    <div className="relative">
      <section className="relative pt-32 pb-20 overflow-hidden min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1279e4]/5 via-transparent to-[#189f6c]/5" />
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1279e4]/10 border border-[#1279e4]/20 mb-6">
              <Code2 className="w-4 h-4 text-[#1279e4]" />
              <span className="text-sm font-semibold text-[#1279e4]">RESTful API</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#1279e4] to-[#189f6c] bg-clip-text text-transparent">
                API Reference
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Build powerful integrations with our comprehensive REST API
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                icon: FileCode,
                title: 'Endpoints',
                description: 'Complete reference for all API endpoints with request/response examples',
              },
              {
                icon: Key,
                title: 'Authentication',
                description: 'Secure API key and OAuth 2.0 authentication methods',
              },
              {
                icon: Webhook,
                title: 'Webhooks',
                description: 'Real-time event notifications for your applications',
              },
              {
                icon: Code2,
                title: 'SDKs',
                description: 'Official libraries for Python, Node.js, Ruby, and PHP',
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="backdrop-blur-xl bg-white/40 border border-white/30 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.2) 100%)',
                  }}
                >
                  <Icon className="w-10 h-10 text-[#1279e4] mb-4" />
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Code Example */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="backdrop-blur-xl bg-gray-900/90 border border-white/10 rounded-2xl p-8 shadow-2xl"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-4 text-sm text-gray-400">Example Request</span>
            </div>
            <pre className="text-green-400 font-mono text-sm overflow-x-auto">
{`curl -X POST https://api.hexagoncx.com/v1/calls \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "to": "+1234567890",
    "agent_id": "agent_abc123",
    "context": "Customer support inquiry"
  }'`}
            </pre>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
