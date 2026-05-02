import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FileStack, CheckCircle, Headset, HardDrive } from 'lucide-react';

const services = [
  { key: 'sd', Icon: FileStack, color: 'text-adidas-blue', bg: 'bg-adidas-blue/10' },
  { key: 'qm', Icon: CheckCircle, color: 'text-accent-emerald', bg: 'bg-accent-emerald/10' },
  { key: 'production', Icon: HardDrive, color: 'text-accent-cyan', bg: 'bg-accent-cyan/10' },
  { key: 'helpdesk', Icon: Headset, color: 'text-accent-amber', bg: 'bg-accent-amber/10' },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12 },
  }),
};

export default function Support() {
  const { t } = useTranslation();

  return (
    <section id="support" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-800 to-navy-950" />
      <div className="absolute inset-0 grid-overlay opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} custom={0} className="inline-flex items-center gap-2 mb-4">
            <Headset className="w-5 h-5 text-accent-amber" />
            <span className="text-xs font-semibold tracking-widest text-accent-amber uppercase">24/7 Ready</span>
          </motion.div>
          <motion.h2 variants={fadeInUp} custom={1} className="text-3xl sm:text-4xl lg:text-4xl font-bold text-white mb-4 text-balance">
            {t('support.title')}
          </motion.h2>
          <motion.div variants={fadeInUp} custom={2} className="w-20 h-1 bg-gradient-to-r from-accent-amber to-accent-emerald mx-auto rounded-full mb-4" />
          <motion.p variants={fadeInUp} custom={3} className="text-slate-400 max-w-2xl mx-auto text-lg">
            {t('support.subtitle')}
          </motion.p>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid sm:grid-cols-2 gap-6"
        >
          {services.map(({ key, Icon, color, bg }, i) => (
            <motion.div
              key={key}
              variants={fadeInUp}
              custom={i}
              className="group glass rounded-2xl p-8 hover:border-white/10 transition-all duration-500"
            >
              <div className={`w-14 h-14 rounded-xl ${bg} flex items-center justify-center mb-5`}>
                <Icon className={`w-7 h-7 ${color}`} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{t(`support.${key}_title`)}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{t(`support.${key}_desc`)}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
