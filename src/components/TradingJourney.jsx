import { motion } from 'framer-motion';
import { portfolio } from '../data/portfolioData';

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.2,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function TradingJourney() {
  const journey = portfolio?.tradingJourney || portfolio?.journey || [];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-20" id="journey">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-sm tracking-[0.3em] text-emerald-400/70 font-mono mb-4"
      >
        MY TRADING JOURNEY
      </motion.h2>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 64 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="h-px bg-gradient-to-r from-emerald-400 to-transparent mb-16"
      />

      <div className="relative max-w-2xl mx-auto">
        <div className="absolute left-5 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/40 via-emerald-500/20 to-transparent" />

        <div className="space-y-12">
          {journey.map((step, i) => (
            <motion.div
              key={step.year || i}
              custom={i}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              className="relative pl-14 md:pl-16"
            >
              <div className="absolute left-3 md:left-4 top-1 w-3.5 h-3.5 rounded-full border-2 border-emerald-500/60 bg-[#0a0a0f] z-10">
                <div className="absolute inset-0.5 rounded-full bg-emerald-500/30 animate-pulse" />
              </div>

              <span className="inline-block text-[10px] tracking-widest font-mono text-emerald-400/60 bg-emerald-500/5 border border-emerald-500/10 px-2.5 py-0.5 rounded-full mb-3">
                {step.year}
              </span>

              <h3 className="text-base font-semibold text-white/85 mb-1.5">
                {step.title}
              </h3>

              <p className="text-sm text-white/35 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
