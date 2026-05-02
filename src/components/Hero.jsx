import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ShieldCheck, HeartHandshake, Lightbulb, Users } from 'lucide-react';

const values = [
  { key: 'professionalism', Icon: ShieldCheck },
  { key: 'dedication', Icon: HeartHandshake },
  { key: 'innovation', Icon: Lightbulb },
  { key: 'service', Icon: Users },
];

export default function Hero() {
  const { t } = useTranslation();

  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden" id="hero">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />
      <div className="absolute inset-0 grid-overlay opacity-50" />

      {/* Floating Blobs */}
      <div className="blob w-96 h-96 bg-adidas-blue top-20 -left-40" style={{ animationDelay: '0s' }} />
      <div className="blob w-80 h-80 bg-accent-cyan bottom-20 right-[-10rem]" style={{ animationDelay: '7s' }} />
      <div className="blob w-64 h-64 bg-accent-violet top-1/2 left-1/2" style={{ animationDelay: '14s' }} />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24 text-center pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-adidas-blue/30 bg-adidas-blue/10 text-adidas-light text-sm font-semibold tracking-widest uppercase mb-8"
        >
          <span className="w-2.5 h-2.5 bg-adidas-blue rounded-full animate-pulse" />
          {t('hero.badge')}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-extrabold text-white leading-tight mb-8"
        >
          {t('hero.title_line1')}
          <br />
          <span className="gradient-text">{t('hero.title_line2')}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-lg sm:text-xl lg:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed"
        >          {t('hero.subtitle')}
        </motion.p>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-14"
        >
          {values.map(({ key, Icon }, i) => (
            <motion.span
              key={key}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
              className="flex items-center gap-2.5 px-6 py-3 rounded-full glass-light text-base font-medium text-slate-300 hover:text-white hover:border-adidas-blue/40 transition-all duration-300 cursor-default"
            >
              <Icon className="w-5 h-5 text-adidas-blue" />

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
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="inline-flex items-center gap-3 px-10 py-4 bg-adidas-blue text-white text-lg font-semibold rounded-2xl hover:bg-adidas-light transition-all duration-300 shadow-xl shadow-adidas-blue/25 hover:shadow-adidas-blue/40 hover:-translate-y-1"
        >
          {t('hero.cta')}
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </motion.a>

      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-950 to-transparent" />
    </header>
  );
}
