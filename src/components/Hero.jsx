import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ShieldCheck, HeartHandshake, Lightbulb, Users } from 'lucide-react';

const values = [
  { key: 'professionalism', Icon: ShieldCheck },
  { key: 'dedication',      Icon: HeartHandshake },
  { key: 'innovation',      Icon: Lightbulb },
  { key: 'service',         Icon: Users },
];

export default function Hero() {
  const { t } = useTranslation();

  return (
    <header
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-950 to-navy-950" />
      <div className="absolute inset-0 dot-grid opacity-60" />

      {/* Decorative blobs — purely behind content */}
      <div className="blob w-[600px] h-[600px] bg-adidas-blue   top-[-8rem]  left-[-16rem]" />
      <div className="blob w-[400px] h-[400px] bg-accent-cyan   bottom-[-6rem] right-[-12rem]" style={{ animationDelay: '8s' }} />
      <div className="blob w-[300px] h-[300px] bg-accent-violet top-1/2      left-1/2"         style={{ animationDelay: '16s' }} />

      {/* Content */}
      <div className="relative z-10 container-fluid text-center pt-28 pb-16">

        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-8"
          style={{
            background: 'rgba(0,102,204,0.12)',
            border: '1px solid rgba(0,102,204,0.3)',
          }}
        >
          <span className="w-2 h-2 bg-adidas-blue rounded-full animate-pulse flex-shrink-0" />
          <span className="eyebrow text-adidas-light">{t('hero.badge')}</span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.12] tracking-tight mb-6"
        >
          {t('hero.title_line1')}
          <br />
          <span className="gradient-text">{t('hero.title_line2')}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.28 }}
          className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {t('hero.subtitle')}
        </motion.p>

        {/* Core value badges */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.42 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {values.map(({ key, Icon }, i) => (
            <motion.span
              key={key}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, delay: 0.48 + i * 0.08 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-slate-300 cursor-default transition-colors duration-200 hover:text-white"
              style={{
                background: 'var(--color-navy-800)',
                border: '1px solid var(--color-navy-600)',
              }}
            >
              <Icon className="w-4 h-4 text-adidas-blue flex-shrink-0" />
              {t(`hero.${key}`)}
            </motion.span>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
          }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.58 }}
          className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-adidas-blue hover:bg-adidas-light text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-adidas-blue/20 hover:shadow-adidas-blue/35 hover:-translate-y-0.5"
        >
          {t('hero.cta')}
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </motion.a>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-navy-950 to-transparent pointer-events-none" />
    </header>
  );
}
