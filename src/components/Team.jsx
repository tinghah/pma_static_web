import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { User, Code2, PackageSearch, Settings } from 'lucide-react';

const members = [
  {
    key: 'paul',
    Icon: User,
    gradient: 'from-adidas-blue to-accent-cyan',
    skills: ['Digital Transformation', 'IT Strategy', 'Leadership'],
  },
  {
    key: 'ting',
    Icon: Code2,
    gradient: 'from-accent-violet to-adidas-blue',
    skills: ['AI Automation', 'React', 'Vibe Coding', 'SAP Integration'],
  },
  {
    key: 'didi',
    Icon: PackageSearch,
    gradient: 'from-accent-emerald to-accent-cyan',
    skills: ['WMS', 'Warehouse Ops', 'Logistics', 'Supply Chain'],
  },
  {
    key: 'harry',
    Icon: Settings,
    gradient: 'from-accent-amber to-adidas-blue',
    skills: ['SAP ERP', 'MES', 'SD Module', 'Production Support'],
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12 },
  }),
};

export default function Team() {
  const { t } = useTranslation();

  return (
    <section id="team" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />
      <div className="blob w-80 h-80 bg-accent-violet top-0 left-[-8rem] opacity-10" style={{ animationDelay: '5s' }} />
      <div className="blob w-64 h-64 bg-accent-cyan bottom-10 right-[-6rem] opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeInUp} custom={0} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('team.title')}
          </motion.h2>
          <motion.div variants={fadeInUp} custom={1} className="w-20 h-1 bg-gradient-to-r from-adidas-blue to-accent-violet mx-auto rounded-full mb-4" />
          <motion.p variants={fadeInUp} custom={2} className="text-slate-400 max-w-2xl mx-auto text-lg">
            {t('team.subtitle')}
          </motion.p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {members.map(({ key, Icon, gradient, skills }, i) => (
            <motion.div
              key={key}
              variants={fadeInUp}
              custom={i}
              className="group glass rounded-2xl p-7 text-center hover:border-white/10 transition-all duration-500 relative overflow-hidden"
            >
              {/* Top Glow */}
              <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r ${gradient} rounded-b-full opacity-60 group-hover:opacity-100 group-hover:w-48 transition-all duration-500`} />

              {/* Avatar */}
              <div className="relative mx-auto mb-5 w-20 h-20">
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                <div className="relative w-full h-full rounded-2xl bg-navy-800 border border-white/10 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-slate-300 group-hover:text-white transition-colors duration-300" />
                </div>
              </div>

              <h3 className="text-lg font-bold text-white mb-1">{t(`team.${key}_name`)}</h3>
              <p className="text-sm font-medium text-adidas-light mb-3">{t(`team.${key}_role`)}</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{t(`team.${key}_bio`)}</p>

              {/* Skill Tags */}
              <div className="flex flex-wrap justify-center gap-1.5">
                {skills.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
