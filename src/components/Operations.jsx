import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Database, Factory, Warehouse, CalendarClock, ArrowRight } from 'lucide-react';

const systems = [
  { key: 'sap', Icon: Database, color: 'adidas-blue' },
  { key: 'mes', Icon: Factory, color: 'accent-cyan' },
  { key: 'wms', Icon: Warehouse, color: 'accent-emerald' },
  { key: 'mps', Icon: CalendarClock, color: 'accent-violet' },
];

const colorMap = {
  'adidas-blue': { bg: 'bg-adidas-blue/10', border: 'border-adidas-blue/20', text: 'text-adidas-blue', glow: 'group-hover:shadow-adidas-blue/10' },
  'accent-cyan': { bg: 'bg-accent-cyan/10', border: 'border-accent-cyan/20', text: 'text-accent-cyan', glow: 'group-hover:shadow-accent-cyan/10' },
  'accent-emerald': { bg: 'bg-accent-emerald/10', border: 'border-accent-emerald/20', text: 'text-accent-emerald', glow: 'group-hover:shadow-accent-emerald/10' },
  'accent-violet': { bg: 'bg-accent-violet/10', border: 'border-accent-violet/20', text: 'text-accent-violet', glow: 'group-hover:shadow-accent-violet/10' },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12 },
  }),
};

export default function Operations() {
  const { t } = useTranslation();

  return (
    <section id="operations" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-800 to-navy-950" />
      <div className="absolute inset-0 grid-overlay opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeInUp} custom={0} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('operations.title')}
          </motion.h2>
          <motion.div variants={fadeInUp} custom={1} className="w-20 h-1 bg-gradient-to-r from-adidas-blue to-accent-cyan mx-auto rounded-full mb-4" />
          <motion.p variants={fadeInUp} custom={2} className="text-slate-400 max-w-2xl mx-auto text-lg">
            {t('operations.subtitle')}
          </motion.p>
        </motion.div>

        {/* System Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {systems.map(({ key, Icon, color }, i) => {
            const c = colorMap[color];
            return (
              <motion.div
                key={key}
                variants={fadeInUp}
                custom={i}
                className={`group glass rounded-2xl p-7 hover:border-white/10 transition-all duration-500 hover:shadow-xl ${c.glow}`}
              >
                <div className={`w-14 h-14 rounded-xl ${c.bg} flex items-center justify-center mb-5 transition-all duration-300`}>
                  <Icon className={`w-7 h-7 ${c.text}`} />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{t(`operations.${key}_title`)}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{t(`operations.${key}_desc`)}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* System Integration Map */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="glass rounded-2xl p-8 sm:p-12"
        >
          <div className="text-center mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{t('operations.map_title')}</h3>
            <p className="text-slate-400 text-sm">{t('operations.map_subtitle')}</p>
          </div>

          {/* Visual Integration Flow */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 flex-wrap">
            {systems.map(({ key, Icon, color }, i) => {
              const c = colorMap[color];
              return (
                <div key={key} className="flex items-center gap-3 sm:gap-4">
                  <div className={`flex items-center gap-2.5 px-5 py-3 rounded-xl ${c.bg} border ${c.border}`}>
                    <Icon className={`w-5 h-5 ${c.text}`} />
                    <span className="text-sm font-semibold text-white">{t(`operations.${key}_title`)}</span>
                  </div>
                  {i < systems.length - 1 && (
                    <ArrowRight className="w-5 h-5 text-slate-500 hidden sm:block" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Central node */}
          <div className="mt-8 flex justify-center">
            <div className="px-6 py-3 rounded-xl bg-adidas-blue/15 border border-adidas-blue/30 text-adidas-light font-bold text-sm flex items-center gap-2">
              <Database className="w-4 h-4" />
              Unified Factory Data Hub
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
