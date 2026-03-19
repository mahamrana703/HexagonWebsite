import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, Sparkles, Bot } from 'lucide-react';

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [conversationId, setConversationId] = useState<string | null>(null);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: "👋 Hi! I'm your AI assistant. How can I help you learn more about Hexagon CX today?",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [inputValue, setInputValue] = useState('');

  const quickQuestions = [
    "What are the key features?",
    "How does pricing work?",
    "Can I get a demo?",
    "Integration options?",
  ];

  const handleSendMessage = (text?: string) => {
    const messageText = text || inputValue.trim();
    if (!messageText) return;

    // Add user message
    const userMessage = {
      id: 0,
      type: 'user',
      text: messageText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages(prev => [...prev, { ...userMessage, id: prev.length + 1 }]);
    setInputValue('');

    // Simulate bot response timing, but fetch real answer from Dify
    const currentConversationId = conversationId;
    setTimeout(async () => {
      let answerText: string =
        "Sorry—I'm having trouble connecting to the AI assistant right now. Please try again.";
      let nextConversationId: string | null | undefined = currentConversationId;

      try {
        const response = await fetch('/api/dify-chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ query: messageText, conversationId: currentConversationId }),
        });

        const data = await response.json().catch(() => null);
        if (!response.ok) throw new Error(`Dify proxy returned ${response.status}`);

        const candidate = data?.answer;
        if (typeof candidate !== 'string' || !candidate.trim()) {
          throw new Error('Missing answer');
        }

        answerText = candidate;
        nextConversationId = data?.conversationId ?? currentConversationId;
      } catch (error) {
        console.error('Chat request failed:', error);
      }

      if (typeof nextConversationId === 'string' && nextConversationId.trim()) {
        setConversationId(nextConversationId.trim());
      }

      const botResponse = {
        id: 0,
        type: 'bot',
        text: answerText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages(prev => [...prev, { ...botResponse, id: prev.length + 1 }]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      >
        <AnimatePresence>
          {!isOpen && (
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(true)}
              className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#1279e4] to-[#5baffc] shadow-2xl flex items-center justify-center group overflow-hidden"
            >
              {/* Animated gradient overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
              
              {/* Pulse animation */}
              <motion.div
                className="absolute inset-0 rounded-full bg-[#1279e4]"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              
              <MessageCircle className="w-7 h-7 text-white relative z-10" />
              
              {/* Notification badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 w-5 h-5 bg-[#189f6c] rounded-full flex items-center justify-center"
              >
                <Sparkles className="w-3 h-3 text-white" />
              </motion.div>
            </motion.button>
          )}
        </AnimatePresence>

        {/* Tooltip */}
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ delay: 2 }}
              className="absolute bottom-0 right-20 bg-white px-4 py-2 rounded-lg shadow-lg border border-gray-200 whitespace-nowrap"
            >
              <p className="text-sm text-gray-700">Need help? Chat with our AI! 👋</p>
              <div className="absolute right-[-8px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed bottom-6 right-6 w-[400px] h-[600px] z-50 flex flex-col rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* Chat Header */}
            <div className="relative bg-gradient-to-r from-[#1279e4] to-[#5baffc] p-4 flex items-center justify-between">
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"
                animate={{
                  x: [-400, 400],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
              
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">AI Assistant</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs text-white/90">Online</span>
                  </div>
                </div>
              </div>
              
              <button
                onClick={() => setIsOpen(false)}
                className="relative z-10 w-8 h-8 rounded-lg bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 bg-gradient-to-b from-gray-50 to-white p-4 overflow-y-auto space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      message.type === 'user'
                        ? 'bg-gradient-to-br from-[#1279e4] to-[#5baffc] text-white'
                        : 'bg-white border border-gray-200 text-gray-800'
                    }`}
                  >
                    <p className="text-sm" style={{ lineHeight: '1.5' }}>{message.text}</p>
                    <p className={`text-xs mt-1 ${message.type === 'user' ? 'text-white/70' : 'text-gray-500'}`}>
                      {message.time}
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* Quick Questions */}
              {messages.length <= 2 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-2"
                >
                  <p className="text-xs text-gray-500 text-center mb-3">Quick questions:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {quickQuestions.map((question, index) => (
                      <motion.button
                        key={question}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleSendMessage(question)}
                        className="px-3 py-2 bg-white border border-gray-200 hover:border-[#1279e4] rounded-lg text-xs text-gray-700 hover:text-[#1279e4] transition-all"
                      >
                        {question}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Chat Input */}
            <div className="bg-white border-t border-gray-200 p-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#1279e4] transition-colors text-sm"
                />
                <button
                  onClick={() => handleSendMessage()}
                  disabled={!inputValue.trim()}
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1279e4] to-[#5baffc] flex items-center justify-center hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5 text-white" />
                </button>
              </div>
              <p className="text-xs text-gray-500 text-center mt-2">
                Powered by Hexagon CX AI
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
