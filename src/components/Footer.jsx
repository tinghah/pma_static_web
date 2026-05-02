import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Cpu, MapPin, ExternalLink } from 'lucide-react';

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="relative pt-14 pb-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 to-navy-900" />
      {/* Top rule */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0,102,204,0.4), transparent)' }}
      />

      <div className="relative z-10 container-fluid">

        {/* Three-column grid */}
        <div className="grid md:grid-cols-3 gap-10 mb-10">

          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a href="#" className="inline-flex items-center gap-2.5 mb-4 group">
              <Cpu className="w-5 h-5 text-adidas-blue" />
              <span className="text-base font-bold text-white">
                PMA <span className="text-adidas-blue">B150 IT</span>
              </span>
            </a>
            <p className="text-slate-500 text-sm leading-relaxed">{t('footer.desc')}</p>
          </motion.div>

          {/* Location column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">{t('footer.location_title')}</h3>
            <div className="flex items-start gap-2.5 text-slate-500 text-sm leading-relaxed">
              <MapPin className="w-4 h-4 text-adidas-blue flex-shrink-0 mt-0.5" />
              <span>{t('footer.address')}</span>
            </div>
          </motion.div>

          {/* Links column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">{t('footer.links_title')}</h3>
            <div className="flex flex-col gap-2.5">
              {[
                { href: 'https://www.pouchen.com', label: t('footer.pouchen'),  ariaLabel: 'Visit Pouchen Group official website' },
                { href: 'https://www.yueyuen.com', label: t('footer.yueyuen'), ariaLabel: 'Visit Yue Yuen Industrial official website' },
              ].map(({ href, label, ariaLabel }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={ariaLabel}
                  className="inline-flex items-center gap-2 text-slate-500 hover:text-adidas-light text-sm transition-colors duration-200 w-fit"
                >
                  <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
                  {label}
                </a>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Bottom bar */}
        <div className="border-t pt-6 text-center" style={{ borderColor: 'var(--color-navy-700)' }}>
          <p className="text-slate-600 text-xs tracking-wide">
            {t('footer.copyright', { year })}
          </p>
        </div>

      </div>
    </footer>
  );
}
