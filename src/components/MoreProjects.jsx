import { motion } from 'framer-motion';
import { moreProjects } from '../data/projects';

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

export default function MoreProjects() {
  const categories = moreProjects || [];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-20" id="more-projects">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-sm tracking-[0.3em] text-emerald-400/70 font-mono mb-4"
      >
        MORE PROJECTS
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
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {categories.map((category, i) => (
          <motion.div
            key={category.title || i}
            variants={cardVariants}
            className="group rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm p-6 transition-all duration-500 hover:border-white/10 hover:bg-white/[0.04]"
          >
            <h3 className="text-sm font-semibold text-white/80 mb-4 tracking-wide">
              {category.title}
            </h3>

            <ul className="space-y-2.5">
              {(category.items || category.projects || []).map((item, j) => (
                <li key={j} className="flex items-start gap-2.5">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-emerald-500/50 shrink-0" />
                  <span className="text-xs text-white/40 leading-relaxed">
                    {typeof item === 'string' ? item : item.title || item.name}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
