import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Cpu, MapPin, ExternalLink } from 'lucide-react';

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="relative pt-16 pb-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 to-navy-900" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-adidas-blue/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a href="#" className="flex items-center gap-2.5 mb-4 group">
              <Cpu className="w-6 h-6 text-adidas-blue" />
              <span className="text-lg font-bold text-white">
                PMA <span className="text-adidas-blue">B150 IT</span>
              </span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed">{t('footer.desc')}</p>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">{t('footer.location_title')}</h3>
            <div className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
              <MapPin className="w-4 h-4 text-adidas-blue flex-shrink-0 mt-1" />
              <span>{t('footer.address')}</span>
            </div>
          </motion.div>

          {/* Official Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">{t('footer.links_title')}</h3>
            <div className="space-y-3">
              <a
                href="https://www.pouchen.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-adidas-light text-sm transition-colors duration-300"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                {t('footer.pouchen')}
              </a>
              <a
                href="https://www.yueyuen.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-adidas-light text-sm transition-colors duration-300"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                {t('footer.yueyuen')}
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-6 text-center">
          <p className="text-slate-500 text-xs">
            {t('footer.copyright', { year })}
          </p>
        </div>
      </div>
    </footer>
  );
}
