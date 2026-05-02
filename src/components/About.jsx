import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Building2, Quote, Factory, Users2, Clock, Award } from 'lucide-react';

const stats = [
  { key: 'stats_factories', value: '150+',  Icon: Factory,  color: 'text-adidas-blue',    bg: 'bg-adidas-blue/10'    },
  { key: 'stats_employees', value: '270K+', Icon: Users2,   color: 'text-accent-cyan',    bg: 'bg-accent-cyan/10'    },
  { key: 'stats_years',     value: '55+',   Icon: Clock,    color: 'text-accent-emerald', bg: 'bg-accent-emerald/10' },
  { key: 'stats_brands',    value: '20+',   Icon: Award,    color: 'text-accent-violet',  bg: 'bg-accent-violet/10'  },
];

const fadeInUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.1 } }),
};

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="relative section-py overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />
      <div className="blob w-[400px] h-[400px] bg-adidas-blue top-0 right-[-12rem]" />

      <div className="relative z-10 container-fluid">

        {/* ── Section header ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} custom={0} className="eyebrow text-adidas-light mb-3">
            <Building2 className="w-4 h-4 flex-shrink-0" />
            Since 1969
          </motion.div>
          <motion.h2 variants={fadeInUp} custom={1} className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
            {t('about.title')}
          </motion.h2>
          <motion.div variants={fadeInUp} custom={2} className="section-divider mx-auto mb-5" />
          <motion.p variants={fadeInUp} custom={3} className="text-slate-400 max-w-xl mx-auto text-base leading-relaxed">
            {t('about.subtitle')}
          </motion.p>
        </motion.div>

        {/* ── Two-column content ── */}
        <div className="grid lg:grid-cols-2 gap-6 mb-10">

          {/* History */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="card p-8"
          >
            <motion.h3 variants={fadeInUp} custom={0} className="text-lg font-bold text-white mb-5 flex items-center gap-3">
              <span className={`icon-box bg-adidas-blue/12`}>
                <Clock className="w-5 h-5 text-adidas-blue" />
              </span>
              {t('about.history_title')}
            </motion.h3>
            <motion.p variants={fadeInUp} custom={1} className="text-slate-400 text-sm leading-relaxed mb-4">
              {t('about.history_p1')}
            </motion.p>
            <motion.p variants={fadeInUp} custom={2} className="text-slate-400 text-sm leading-relaxed">
              {t('about.history_p2')}
            </motion.p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="card p-8 flex flex-col justify-center relative overflow-hidden"
          >
            <Quote className="absolute top-5 right-5 w-10 h-10 text-adidas-blue/10 flex-shrink-0" />
            <motion.h3 variants={fadeInUp} custom={0} className="text-lg font-bold text-white mb-5 flex items-center gap-3">
              <span className="icon-box bg-accent-emerald/12">
                <Award className="w-5 h-5 text-accent-emerald" />
              </span>
              {t('about.mission_title')}
            </motion.h3>
            <motion.blockquote
              variants={fadeInUp}
              custom={1}
              className="text-lg sm:text-xl font-medium text-slate-200 leading-relaxed italic border-l-4 border-adidas-blue pl-6"
            >
              &ldquo;{t('about.mission_quote')}&rdquo;
            </motion.blockquote>
          </motion.div>
        </div>

        {/* ── Stats row ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map(({ key, value, Icon, color, bg }, i) => (
            <motion.div
              key={key}
              variants={fadeInUp}
              custom={i}
              className="card p-6 text-center group"
            >
              <div className={`icon-box ${bg} mx-auto mb-4`}>
                <Icon className={`w-5 h-5 ${color}`} />
              </div>
              <div className="stat-number mb-1">{value}</div>
              <div className="text-xs text-slate-400 font-medium tracking-wide">{t(`about.${key}`)}</div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
