import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';

const botResponses = {
  default: "Thank you for your message! For personalized assistance, please book a free consultation or reach us on WhatsApp at +92 310 7742625.",
  review: "We specialize in negative review removal! Our success rate is 98%. Would you like a free reputation audit? Book a consultation today!",
  rating: "We can help improve your Google rating significantly within weeks. Our strategies include review management, positive review generation, and more.",
  price: "Our pricing varies based on your needs. We offer custom packages from basic monitoring to full reputation transformation. Book a free consultation for a personalized quote!",
  help: "I can help with:\n• Review removal\n• Rating improvement\n• Reputation repair\n• Brand image cleaning\n\nWhat would you like to know more about?",
};

function getResponse(message) {
  const lower = message.toLowerCase();
  if (lower.includes('review') || lower.includes('remove') || lower.includes('negative'))
    return botResponses.review;
  if (lower.includes('rating') || lower.includes('star') || lower.includes('improve'))
    return botResponses.rating;
  if (lower.includes('price') || lower.includes('cost') || lower.includes('package'))
    return botResponses.price;
  if (lower.includes('help') || lower.includes('service') || lower.includes('what'))
    return botResponses.help;
  return botResponses.default;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hello! I\'m the Mudasar ORM AI Assistant. How can I help improve your online reputation today?' },
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages((prev) => [...prev, { from: 'user', text: userMsg }]);
    setInput('');
    setTimeout(() => {
      setMessages((prev) => [...prev, { from: 'bot', text: getResponse(userMsg) }]);
    }, 1000);
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-gold to-gold-light text-xl text-black shadow-lg shadow-gold/30"
        aria-label="Open chatbot"
      >
        {isOpen ? <FaTimes /> : <FaRobot />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 left-6 z-50 w-80 overflow-hidden rounded-2xl border border-white/10 bg-charcoal shadow-2xl"
          >
            <div className="flex items-center gap-3 bg-gradient-to-r from-gold to-gold-light p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black/20">
                <FaRobot className="text-black" />
              </div>
              <div>
                <p className="font-display font-semibold text-black">AI Assistant</p>
                <p className="text-xs text-black/60">Online — Replies Instantly</p>
              </div>
            </div>

            <div className="h-72 space-y-3 overflow-y-auto p-4">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`max-w-[85%] rounded-lg p-3 text-sm ${
                    msg.from === 'bot'
                      ? 'rounded-tl-none bg-white/10 text-white/80'
                      : 'ml-auto rounded-tr-none bg-gold/20 text-white'
                  }`}
                >
                  {msg.text}
                </motion.div>
              ))}
            </div>

            <div className="flex items-center gap-2 border-t border-white/10 p-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Type a message..."
                className="flex-1 rounded-lg bg-white/5 px-3 py-2 text-sm text-white placeholder-white/30 outline-none"
              />
              <button
                onClick={sendMessage}
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold text-black transition-colors hover:bg-gold-light"
                aria-label="Send message"
              >
                <FaPaperPlane className="text-sm" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
