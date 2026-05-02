import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { BrainCircuit, Zap, Code2, Bot } from 'lucide-react';

const items = [
  { key: 'ai_agent',   Icon: BrainCircuit, color: 'text-adidas-blue',   bg: 'bg-adidas-blue/12'   },
  { key: 'agile',      Icon: Zap,          color: 'text-accent-amber',  bg: 'bg-accent-amber/12'  },
  { key: 'vibe',       Icon: Code2,        color: 'text-accent-violet', bg: 'bg-accent-violet/12' },
  { key: 'automation', Icon: Bot,          color: 'text-accent-cyan',   bg: 'bg-accent-cyan/12'   },
];

const fadeInUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.1 } }),
};

export default function Innovation() {
  const { t } = useTranslation();

  return (
    <section id="innovation" className="relative section-py overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />
      <div className="blob w-[500px] h-[500px] bg-accent-violet bottom-[-8rem] left-[-14rem]" />
      <div className="blob w-[350px] h-[350px] bg-adidas-blue   top-[-4rem]   right-[-10rem]" style={{ animationDelay: '10s' }} />

      <div className="relative z-10 container-fluid">

        {/* ── Section header ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} custom={0} className="eyebrow text-accent-violet mb-3">
            <BrainCircuit className="w-4 h-4 flex-shrink-0" />
            R&amp;D Lab
          </motion.div>
          <motion.h2 variants={fadeInUp} custom={1} className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
            {t('innovation.title')}
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            custom={2}
            className="section-divider mx-auto mb-5"
            style={{ background: 'linear-gradient(90deg, var(--color-accent-violet), var(--color-accent-cyan))' }}
          />
          <motion.p variants={fadeInUp} custom={3} className="text-slate-400 max-w-xl mx-auto text-base leading-relaxed">
            {t('innovation.subtitle')}
          </motion.p>
        </motion.div>

        {/* ── Two-column: visual + cards ── */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">

          {/* Left — animated circuit visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 flex items-center justify-center"
          >
            <div className="relative w-60 h-60 sm:w-72 sm:h-72">
              {/* Outer rotating ring */}
              <div className="absolute inset-2 rounded-full border-2 border-dashed border-adidas-blue/25 animate-[spin_28s_linear_infinite]" />
              {/* Inner rotating ring */}
              <div className="absolute inset-10 rounded-full border-2 border-dashed border-accent-violet/25 animate-[spin_18s_linear_infinite_reverse]" />

              {/* Nodes */}
              {[
                { style: { top: '4%',  left: '50%',  transform: 'translateX(-50%)' }, color: 'bg-adidas-blue',    delay: '0s' },
                { style: { top: '50%', right: '2%',  transform: 'translateY(-50%)' }, color: 'bg-accent-cyan',    delay: '1s' },
                { style: { bottom: '6%', left: '18%' },                               color: 'bg-accent-violet',  delay: '2s' },
                { style: { top: '22%', left: '4%' },                                  color: 'bg-accent-amber',   delay: '3s' },
              ].map((node, i) => (
                <div
                  key={i}
                  className={`absolute w-3 h-3 ${node.color} rounded-full`}
                  style={{ ...node.style, animation: `pulse-ring 3s ease-in-out ${node.delay} infinite` }}
                />
              ))}

              {/* Centre */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0,102,204,0.18), rgba(139,92,246,0.18))',
                    border: '1px solid rgba(255,255,255,0.10)',
                  }}
                >
                  <BrainCircuit className="w-10 h-10 text-adidas-light" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — feature cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="lg:col-span-3 flex flex-col gap-4"
          >
            {items.map(({ key, Icon, color, bg }, i) => (
              <motion.div
                key={key}
                variants={fadeInUp}
                custom={i}
                className="card p-6 flex gap-4 items-start"
              >
                <div className={`icon-box ${bg} flex-shrink-0 mt-0.5`}>
                  <Icon className={`w-5 h-5 ${color}`} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1.5">{t(`innovation.${key}_title`)}</h3>
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
