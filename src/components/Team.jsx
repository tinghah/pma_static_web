import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { User, Code2, PackageSearch, Settings, Users } from 'lucide-react';

const members = [
  {
    key: 'paul',
    Icon: User,
    accent: 'text-adidas-blue',
    iconBg: 'bg-adidas-blue/12',
    topBar: 'from-adidas-blue to-accent-cyan',
    skills: ['Digital Transformation', 'IT Strategy', 'Leadership'],
  },
  {
    key: 'ting',
    Icon: Code2,
    accent: 'text-accent-violet',
    iconBg: 'bg-accent-violet/12',
    topBar: 'from-accent-violet to-adidas-blue',
    skills: ['AI Automation', 'React', 'Vibe Coding', 'SAP Integration'],
  },
  {
    key: 'didi',
    Icon: PackageSearch,
    accent: 'text-accent-emerald',
    iconBg: 'bg-accent-emerald/12',
    topBar: 'from-accent-emerald to-accent-cyan',
    skills: ['WMS', 'Warehouse Ops', 'Logistics', 'Supply Chain'],
  },
  {
    key: 'harry',
    Icon: Settings,
    accent: 'text-accent-amber',
    iconBg: 'bg-accent-amber/12',
    topBar: 'from-accent-amber to-accent-cyan',
    skills: ['SAP ERP', 'MES', 'SD Module', 'Production Support'],
  },
];

const fadeInUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.1 } }),
};

export default function Team() {
  const { t } = useTranslation();

  return (
    <section id="team" className="relative section-py overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />
      <div className="blob w-[420px] h-[420px] bg-accent-violet top-0    left-[-12rem]" style={{ animationDelay: '5s' }} />
      <div className="blob w-[300px] h-[300px] bg-accent-cyan  bottom-0  right-[-8rem]" />

      <div className="relative z-10 container-fluid">

        {/* ── Section header ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} custom={0} className="eyebrow text-accent-cyan mb-3">
            <Users className="w-4 h-4 flex-shrink-0" />
            Meet the Team
          </motion.div>
          <motion.h2 variants={fadeInUp} custom={1} className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
            {t('team.title')}
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            custom={2}
            className="section-divider mx-auto mb-5"
            style={{ background: 'linear-gradient(90deg, var(--color-adidas-blue), var(--color-accent-violet))' }}
          />
          <motion.p variants={fadeInUp} custom={3} className="text-slate-400 max-w-xl mx-auto text-base leading-relaxed">
            {t('team.subtitle')}
          </motion.p>
        </motion.div>

        {/* ── Team grid ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {members.map(({ key, Icon, accent, iconBg, topBar, skills }, i) => (
            <motion.div
              key={key}
              variants={fadeInUp}
              custom={i}
              className="card p-7 text-center group relative overflow-hidden flex flex-col"
            >
              {/* Top accent bar */}
              <div
                className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${topBar} opacity-50 group-hover:opacity-100 transition-opacity duration-300`}
              />

              {/* Avatar */}
              <div className="relative mx-auto mb-5 w-[72px] h-[72px] flex-shrink-0">
                <div className={`w-full h-full rounded-2xl ${iconBg} border border-white/8 flex items-center justify-center group-hover:border-white/15 transition-colors duration-300`}>
                  <Icon className={`w-8 h-8 ${accent} transition-colors duration-300`} />
                </div>
              </div>

              {/* Name & role */}
              <h3 className="text-base font-bold text-white mb-1">{t(`team.${key}_name`)}</h3>
              <p className={`text-sm font-semibold ${accent} mb-3`}>{t(`team.${key}_role`)}</p>
              <p className="text-slate-400 text-xs leading-relaxed mb-5 flex-1">{t(`team.${key}_bio`)}</p>

              {/* Skill tags */}
              <div className="flex flex-wrap justify-center gap-1.5 mt-auto">
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
