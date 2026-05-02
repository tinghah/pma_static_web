import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { BrainCircuit, Zap, Code2, Bot } from 'lucide-react';

const items = [
  { key: 'ai_agent', Icon: BrainCircuit, color: 'text-adidas-blue', bg: 'bg-adidas-blue/10' },
  { key: 'agile', Icon: Zap, color: 'text-accent-amber', bg: 'bg-accent-amber/10' },
  { key: 'vibe', Icon: Code2, color: 'text-accent-violet', bg: 'bg-accent-violet/10' },
  { key: 'automation', Icon: Bot, color: 'text-accent-cyan', bg: 'bg-accent-cyan/10' },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12 },
  }),
};

export default function Innovation() {
  const { t } = useTranslation();

  return (
    <section id="innovation" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />
      <div className="blob w-96 h-96 bg-accent-violet bottom-0 left-[-10rem] opacity-10" />
      <div className="blob w-72 h-72 bg-adidas-blue top-20 right-[-6rem] opacity-10" style={{ animationDelay: '10s' }} />

      <div className="relative z-10 w-full mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} custom={0} className="inline-flex items-center gap-2 mb-4">
            <BrainCircuit className="w-5 h-5 text-accent-violet" />
            <span className="text-xs font-semibold tracking-widest text-accent-violet uppercase">R&D Lab</span>
          </motion.div>
          <motion.h2 variants={fadeInUp} custom={1} className="text-3xl sm:text-4xl lg:text-4xl font-bold text-white mb-4 text-balance">
            {t('innovation.title')}
          </motion.h2>
          <motion.div variants={fadeInUp} custom={2} className="w-20 h-1 bg-gradient-to-r from-accent-violet to-accent-cyan mx-auto rounded-full mb-4" />
          <motion.p variants={fadeInUp} custom={3} className="text-slate-400 max-w-2xl mx-auto text-lg">
            {t('innovation.subtitle')}
          </motion.p>
        </motion.div>

        {/* Content: Left visual + Right cards */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Left: Abstract Circuit Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 flex items-center justify-center"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              {/* Rotating Rings */}
              <div className="absolute inset-4 border-2 border-dashed border-adidas-blue/20 rounded-full animate-[spin_30s_linear_infinite]" />
              <div className="absolute inset-10 border-2 border-dashed border-accent-violet/20 rounded-full animate-[spin_20s_linear_infinite_reverse]" />

              {/* Orbiting Nodes */}
              {[
                { top: '5%', left: '50%', color: 'bg-adidas-blue', delay: '0s' },
                { top: '50%', right: '2%', color: 'bg-accent-cyan', delay: '1s' },
                { bottom: '8%', left: '20%', color: 'bg-accent-violet', delay: '2s' },
                { top: '25%', left: '5%', color: 'bg-accent-amber', delay: '3s' },
              ].map((node, i) => (
                <div
                  key={i}
                  className={`absolute w-3 h-3 ${node.color} rounded-full`}
                  style={{
                    top: node.top,
                    left: node.left,
                    right: node.right,
                    bottom: node.bottom,
                    animation: `pulse-ring 3s ease-in-out infinite`,
                    animationDelay: node.delay,
                    boxShadow: `0 0 12px currentColor`,
                  }}
                />
              ))}

              {/* Center Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-adidas-blue/20 to-accent-violet/20 border border-white/10 flex items-center justify-center backdrop-blur-sm">
                  <BrainCircuit className="w-10 h-10 text-adidas-light" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Feature Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="lg:col-span-3 space-y-5"
          >
            {items.map(({ key, Icon, color, bg }, i) => (
              <motion.div
                key={key}
                variants={fadeInUp}
                custom={i}
                className="group glass rounded-2xl p-6 flex gap-5 hover:border-white/10 transition-all duration-500"
              >
                <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${bg} flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 ${color}`} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1.5">{t(`innovation.${key}_title`)}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{t(`innovation.${key}_desc`)}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
