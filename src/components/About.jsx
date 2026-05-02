import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Building2, Quote, Factory, Users2, Clock, Award } from 'lucide-react';

const stats = [
  { key: 'stats_factories', value: '150+', Icon: Factory },
  { key: 'stats_employees', value: '270K+', Icon: Users2 },
  { key: 'stats_years', value: '55+', Icon: Clock },
  { key: 'stats_brands', value: '20+', Icon: Award },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />
      <div className="blob w-72 h-72 bg-adidas-blue top-10 right-[-8rem] opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} custom={0} className="inline-flex items-center gap-2 mb-4">
            <Building2 className="w-5 h-5 text-adidas-blue" />
            <span className="text-xs font-semibold tracking-widest text-adidas-light uppercase">Since 1969</span>
          </motion.div>
          <motion.h2 variants={fadeInUp} custom={1} className="text-3xl sm:text-4xl lg:text-4xl font-bold text-white mb-4 text-balance">
            {t('about.title')}
          </motion.h2>
          <motion.div variants={fadeInUp} custom={2} className="w-20 h-1 bg-gradient-to-r from-adidas-blue to-accent-cyan mx-auto rounded-full mb-4" />
          <motion.p variants={fadeInUp} custom={3} className="text-slate-400 max-w-2xl mx-auto text-lg">
            {t('about.subtitle')}
          </motion.p>
        </motion.div>

        {/* Two Column: History + Mission */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* History */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="glass rounded-2xl p-8 sm:p-10"
          >
            <motion.h3 variants={fadeInUp} custom={0} className="text-xl font-bold text-white mb-5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-adidas-blue/15 flex items-center justify-center">
                <Clock className="w-5 h-5 text-adidas-blue" />
              </div>
              {t('about.history_title')}
            </motion.h3>
            <motion.p variants={fadeInUp} custom={1} className="text-slate-400 mb-4 leading-relaxed">
              {t('about.history_p1')}
            </motion.p>
            <motion.p variants={fadeInUp} custom={2} className="text-slate-400 leading-relaxed">
              {t('about.history_p2')}
            </motion.p>
          </motion.div>

          {/* Mission Quote */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="glass rounded-2xl p-8 sm:p-10 flex flex-col justify-center relative"
          >
            <Quote className="absolute top-6 right-6 w-12 h-12 text-adidas-blue/10" />
            <motion.h3 variants={fadeInUp} custom={0} className="text-xl font-bold text-white mb-5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-accent-emerald/15 flex items-center justify-center">
                <Award className="w-5 h-5 text-accent-emerald" />
              </div>
              {t('about.mission_title')}
            </motion.h3>
            <motion.blockquote
              variants={fadeInUp}
              custom={1}
              className="text-xl sm:text-2xl font-medium text-slate-200 leading-relaxed italic border-l-4 border-adidas-blue pl-6"
            >
              &ldquo;{t('about.mission_quote')}&rdquo;
            </motion.blockquote>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
        >
          {stats.map(({ key, value, Icon }, i) => (
            <motion.div
              key={key}
              variants={fadeInUp}
              custom={i}
              className="glass rounded-2xl p-6 text-center group hover:border-adidas-blue/30 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-adidas-blue/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-adidas-blue/20 transition-colors duration-300">
                <Icon className="w-6 h-6 text-adidas-blue" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{value}</div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium">{t(`about.${key}`)}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
