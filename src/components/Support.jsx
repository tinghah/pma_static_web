import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FileStack, CheckCircle, Headset, HardDrive } from 'lucide-react';

const services = [
  { key: 'sd',         Icon: FileStack,    color: 'text-adidas-blue',   bg: 'bg-adidas-blue/12'   },
  { key: 'qm',         Icon: CheckCircle,  color: 'text-accent-emerald',bg: 'bg-accent-emerald/12'},
  { key: 'production', Icon: HardDrive,    color: 'text-accent-cyan',   bg: 'bg-accent-cyan/12'   },
  { key: 'helpdesk',   Icon: Headset,      color: 'text-accent-amber',  bg: 'bg-accent-amber/12'  },
];

const fadeInUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.1 } }),
};

export default function Support() {
  const { t } = useTranslation();

  return (
    <section id="support" className="relative section-py overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-800 to-navy-950" />
      <div className="absolute inset-0 dot-grid opacity-20" />

      <div className="relative z-10 container-fluid">

        {/* ── Section header ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} custom={0} className="eyebrow text-accent-amber mb-3">
            <Headset className="w-4 h-4 flex-shrink-0" />
            24 / 7 Ready
          </motion.div>
          <motion.h2 variants={fadeInUp} custom={1} className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
            {t('support.title')}
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            custom={2}
            className="section-divider mx-auto mb-5"
            style={{ background: 'linear-gradient(90deg, var(--color-accent-amber), var(--color-accent-emerald))' }}
          />
          <motion.p variants={fadeInUp} custom={3} className="text-slate-400 max-w-xl mx-auto text-base leading-relaxed">
            {t('support.subtitle')}
          </motion.p>
        </motion.div>

        {/* ── Service cards — 2 × 2 ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 gap-5"
        >
          {services.map(({ key, Icon, color, bg }, i) => (
            <motion.div
              key={key}
              variants={fadeInUp}
              custom={i}
              className="card p-8 group"
            >
              <div className={`icon-box ${bg} mb-5`}>
                <Icon className={`w-5 h-5 ${color}`} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2.5">{t(`support.${key}_title`)}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{t(`support.${key}_desc`)}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
