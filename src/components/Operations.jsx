import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Database, Factory, Warehouse, CalendarClock, ArrowRight, Layers } from 'lucide-react';

const systems = [
  { key: 'sap', Icon: Database,      color: 'text-adidas-blue',    bg: 'bg-adidas-blue/12',    border: 'border-adidas-blue/20'    },
  { key: 'mes', Icon: Factory,       color: 'text-accent-cyan',    bg: 'bg-accent-cyan/12',    border: 'border-accent-cyan/20'    },
  { key: 'wms', Icon: Warehouse,     color: 'text-accent-emerald', bg: 'bg-accent-emerald/12', border: 'border-accent-emerald/20' },
  { key: 'mps', Icon: CalendarClock, color: 'text-accent-violet',  bg: 'bg-accent-violet/12',  border: 'border-accent-violet/20'  },
];

const fadeInUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.1 } }),
};

export default function Operations() {
  const { t } = useTranslation();

  return (
    <section id="operations" className="relative section-py overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-800 to-navy-950" />
      <div className="absolute inset-0 dot-grid opacity-25" />

      <div className="relative z-10 container-fluid">

        {/* ── Section header ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} custom={0} className="eyebrow text-adidas-blue mb-3">
            <Layers className="w-4 h-4 flex-shrink-0" />
            Factory 4.0
          </motion.div>
          <motion.h2 variants={fadeInUp} custom={1} className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
            {t('operations.title')}
          </motion.h2>
          <motion.div variants={fadeInUp} custom={2} className="section-divider mx-auto mb-5" />
          <motion.p variants={fadeInUp} custom={3} className="text-slate-400 max-w-xl mx-auto text-base leading-relaxed">
            {t('operations.subtitle')}
          </motion.p>
        </motion.div>

        {/* ── System cards ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10"
        >
          {systems.map(({ key, Icon, color, bg }, i) => (
            <motion.div
              key={key}
              variants={fadeInUp}
              custom={i}
              className="card p-7 group"
            >
              <div className={`icon-box ${bg} mb-5`}>
                <Icon className={`w-5 h-5 ${color}`} />
              </div>
              <h3 className="text-base font-bold text-white mb-2">{t(`operations.${key}_title`)}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{t(`operations.${key}_desc`)}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Integration map ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="card p-8 sm:p-10"
        >
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-white mb-1">{t('operations.map_title')}</h3>
            <p className="text-slate-400 text-sm">{t('operations.map_subtitle')}</p>
          </div>

          {/* Flow row */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {systems.map(({ key, Icon, color, bg, border }, i) => (
              <div key={key} className="flex items-center gap-3">
                <div className={`flex items-center gap-2 px-4 py-2.5 rounded-lg ${bg} border ${border}`}>
                  <Icon className={`w-4 h-4 ${color} flex-shrink-0`} />
                  <span className="text-sm font-semibold text-white whitespace-nowrap">{t(`operations.${key}_title`)}</span>
                </div>
                {i < systems.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-slate-600 hidden sm:block flex-shrink-0" />
                )}
              </div>
            ))}
          </div>

          {/* Hub node */}
          <div className="mt-7 flex justify-center">
            <div
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-adidas-light"
              style={{ background: 'rgba(0,102,204,0.1)', border: '1px solid rgba(0,102,204,0.3)' }}
            >
              <Database className="w-4 h-4 flex-shrink-0" />
              Unified Factory Data Hub
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
