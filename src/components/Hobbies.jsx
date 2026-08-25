import { motion } from 'framer-motion';
import { portfolio } from '../data/portfolioData';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const defaultHobbies = [
  { icon: '♟️', title: 'Chess', description: 'Strategic thinking on and off the board' },
  { icon: '📖', title: 'Reading', description: 'Deep dives into markets, psychology, and tech' },
  { icon: '🏃', title: 'Running', description: 'Clearing the mind one mile at a time' },
  { icon: '🎵', title: 'Music', description: 'Lo-fi beats for focus sessions' },
];

export default function Hobbies() {
  const hobbies = portfolio?.hobbies || defaultHobbies;

  return (
    <section className="py-24 px-6 md:px-12 lg:px-20" id="hobbies">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-sm tracking-[0.3em] text-emerald-400/70 font-mono mb-4"
      >
        BEYOND CODE
      </motion.h2>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 64 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="h-px bg-gradient-to-r from-emerald-400 to-transparent mb-12"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {hobbies.map((hobby, i) => (
          <motion.div
            key={hobby.title || i}
            variants={cardVariants}
            className="group rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all duration-500 hover:border-white/10 hover:bg-white/[0.04]"
          >
            <div className="text-3xl mb-4 w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center">
              {hobby.icon || hobby.emoji || '✦'}
            </div>
            <h3 className="text-sm font-semibold text-white/80 mb-1.5">
              {hobby.title}
            </h3>
            <p className="text-xs text-white/35 leading-relaxed">
              {hobby.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
