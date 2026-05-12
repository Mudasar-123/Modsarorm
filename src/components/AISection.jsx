import { motion } from 'framer-motion';
import { FaRobot, FaBrain, FaChartBar, FaSmile, FaMeh, FaFrown } from 'react-icons/fa';

function SentimentMeter() {
  return (
    <div className="glass-card p-5">
      <h4 className="mb-3 text-sm font-semibold text-gold">Sentiment Analysis</h4>
      <div className="space-y-3">
        {[
          { icon: FaSmile, label: 'Positive', value: 72, color: 'bg-neon' },
          { icon: FaMeh, label: 'Neutral', value: 18, color: 'bg-gold' },
          { icon: FaFrown, label: 'Negative', value: 10, color: 'bg-red-500' },
        ].map((item) => (
          <div key={item.label}>
            <div className="mb-1 flex items-center justify-between text-xs">
              <span className="flex items-center gap-2 text-white/60">
                <item.icon /> {item.label}
              </span>
              <span className="text-white/80">{item.value}%</span>
            </div>
            <div className="h-2 rounded-full bg-white/10">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${item.value}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.3 }}
                className={`h-full rounded-full ${item.color}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ReviewScoreMeter() {
  return (
    <div className="glass-card p-5">
      <h4 className="mb-4 text-sm font-semibold text-gold">Review Score</h4>
      <div className="flex items-center justify-center">
        <div className="relative h-36 w-36">
          <svg className="h-full w-full -rotate-90" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="10" />
            <motion.circle
              cx="60" cy="60" r="50"
              fill="none"
              stroke="url(#scoreGradient)"
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray={314}
              initial={{ strokeDashoffset: 314 }}
              whileInView={{ strokeDashoffset: 314 * 0.08 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.5 }}
            />
            <defs>
              <linearGradient id="scoreGradient">
                <stop offset="0%" stopColor="#d4af37" />
                <stop offset="100%" stopColor="#39ff14" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-display text-3xl font-bold text-gold">4.8</span>
            <span className="text-xs text-white/50">/ 5.0</span>
          </div>
        </div>
      </div>
      <p className="mt-3 text-center text-xs text-neon">Excellent Reputation</p>
    </div>
  );
}

function AnalyticsChart() {
  const bars = [35, 55, 45, 70, 60, 85, 75, 90, 80, 95, 88, 92];
  const months = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];

  return (
    <div className="glass-card p-5">
      <div className="mb-4 flex items-center justify-between">
        <h4 className="text-sm font-semibold text-gold">Reputation Trend</h4>
        <span className="text-xs text-neon">+24% growth</span>
      </div>
      <div className="flex items-end justify-between gap-1" style={{ height: 100 }}>
        {bars.map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            className="flex-1 rounded-t bg-gradient-to-t from-gold/60 to-gold transition-colors hover:from-neon/60 hover:to-neon"
          />
        ))}
      </div>
      <div className="mt-1 flex justify-between text-[10px] text-white/30">
        {months.map((m) => <span key={m}>{m}</span>)}
      </div>
    </div>
  );
}

function ChatbotPreview() {
  return (
    <div className="glass-card p-5">
      <div className="mb-3 flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/20">
          <FaRobot className="text-sm text-gold" />
        </div>
        <div>
          <p className="text-sm font-semibold">AI Assistant</p>
          <p className="text-xs text-neon">Online</p>
        </div>
      </div>
      <div className="space-y-2">
        <div className="max-w-[80%] rounded-lg rounded-tl-none bg-white/10 p-2 text-xs text-white/70">
          How can I help improve your online reputation today?
        </div>
        <div className="ml-auto max-w-[80%] rounded-lg rounded-tr-none bg-gold/20 p-2 text-xs text-white/80">
          I need help removing negative reviews
        </div>
        <div className="max-w-[80%] rounded-lg rounded-tl-none bg-white/10 p-2 text-xs text-white/70">
          I can analyze your reviews and create a removal strategy. Let me scan your profiles...
        </div>
        <motion.div
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex gap-1 p-2"
        >
          <div className="h-2 w-2 rounded-full bg-gold/50" />
          <div className="h-2 w-2 rounded-full bg-gold/50" />
          <div className="h-2 w-2 rounded-full bg-gold/50" />
        </motion.div>
      </div>
    </div>
  );
}

export default function AISection() {
  return (
    <section id="ai-section" className="section-padding relative overflow-hidden bg-dark">
      <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/3 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-neon/20 bg-neon/10 px-4 py-2 text-sm text-neon">
            <FaBrain />
            AI-Powered Technology
          </div>
          <h2 className="font-display text-3xl font-bold md:text-5xl">
            <span className="gradient-text">AI Reputation</span> Scanner
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/50">
            Our advanced AI engine continuously monitors, analyzes, and optimizes your online
            reputation with real-time insights and predictive analytics.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <SentimentMeter />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <ReviewScoreMeter />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <ChatbotPreview />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-2 lg:col-span-2"
          >
            <AnalyticsChart />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <div className="glass-card flex h-full flex-col items-center justify-center p-6 text-center">
              <FaChartBar className="mb-4 text-4xl text-gold" />
              <h4 className="font-display text-lg font-semibold">Real-Time Monitoring</h4>
              <p className="mt-2 text-sm text-white/50">
                24/7 automated tracking of reviews, mentions, and sentiment across 50+ platforms.
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div className="h-2 w-2 animate-pulse rounded-full bg-neon" />
                <span className="text-xs text-neon">Active Monitoring</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
