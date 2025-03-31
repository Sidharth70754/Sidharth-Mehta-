import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Send, X, Bot, User, Loader2 } from 'lucide-react';

interface Message {
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{
    text: "Hi! I'm your portfolio assistant. How can I help you today?",
    isBot: true,
    timestamp: new Date()
  }]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isTyping, setIsTyping] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = {
      text: inputMessage,
      isBot: false,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);
    setIsTyping(true);

    try {
      const response = await fetch('http://localhost:3001/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputMessage }),
      });

      const data = await response.json();

      // Simulate typing effect
      setTimeout(() => {
        setIsTyping(false);
        const botMessage: Message = {
          text: data.response,
          isBot: true,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botMessage]);
      }, Math.min(1000, data.response.length * 20));

    } catch (error) {
      console.error('Error:', error);
      setIsTyping(false);
      const errorMessage: Message = {
        text: "Sorry, I'm having trouble connecting right now. Please try again later.",
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 p-4 rounded-full bg-gradient-to-r from-[#4285F4] to-[#2684FF] text-white shadow-lg hover:shadow-[#4285F4]/20 transition-shadow duration-300 ${isOpen ? 'hidden' : ''}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <MessageCircle size={24} />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-6 right-6 w-[95vw] md:w-[450px] h-[600px] max-h-[80vh] bg-gray-900/90 backdrop-blur-lg rounded-2xl border border-gray-800/50 shadow-xl overflow-hidden z-50"
          >
            {/* Glass effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#4285F4]/5 to-transparent pointer-events-none" />

            {/* Header */}
            <div className="p-4 border-b border-gray-800/50 bg-gray-900/50 backdrop-blur-sm flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#4285F4]/20 rounded-full blur-md" />
                  <Bot className="text-[#4285F4] relative z-10" size={24} />
                </div>
                <div>
                  <h3 className="font-medium text-white">Portfolio Assistant</h3>
                  <p className="text-xs text-gray-400">Always here to help</p>
                </div>
              </div>
              <motion.button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800/50 rounded-xl"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={20} />
              </motion.button>
            </div>

            {/* Messages */}
            <div className="p-4 h-[calc(100%-8rem)] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent">
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-2xl ${
                        message.isBot
                          ? 'bg-gray-800/80 text-white'
                          : 'bg-gradient-to-r from-[#4285F4] to-[#2684FF] text-white'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        {message.isBot ? (
                          <Bot size={16} className="text-[#4285F4]" />
                        ) : (
                          <User size={16} />
                        )}
                        <span className="text-xs opacity-70">
                          {message.timestamp.toLocaleTimeString([], { 
                            hour: '2-digit', 
                            minute: '2-digit' 
                          })}
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed">{message.text}</p>
                    </div>
                  </motion.div>
                ))}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="bg-gray-800/80 p-3 rounded-2xl">
                      <div className="flex gap-2">
                        <motion.span 
                          className="w-2 h-2 bg-[#4285F4] rounded-full"
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 0.5, repeat: Infinity }}
                        />
                        <motion.span 
                          className="w-2 h-2 bg-[#4285F4] rounded-full"
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 0.5, delay: 0.2, repeat: Infinity }}
                        />
                        <motion.span 
                          className="w-2 h-2 bg-[#4285F4] rounded-full"
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 0.5, delay: 0.4, repeat: Infinity }}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="absolute bottom-0 left-0 right-0 p-4 bg-gray-900/50 backdrop-blur-sm border-t border-gray-800/50"
            >
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 bg-gray-800/50 border border-gray-700/50 rounded-xl px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-[#4285F4] focus:ring-2 focus:ring-[#4285F4]/20 transition-all"
                />
                <motion.button
                  type="submit"
                  disabled={isLoading || !inputMessage.trim()}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-xl bg-gradient-to-r from-[#4285F4] to-[#2684FF] text-white disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <Loader2 size={20} className="animate-spin" />
                  ) : (
                    <Send size={20} />
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot; 