import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Globe, ChevronDown, Menu, X } from 'lucide-react';

const languages = [
  { code: 'en',    label: 'English',     flag: '🇬🇧' },
  { code: 'my',    label: 'မြန်မာဘာသာ', flag: '🇲🇲' },
  { code: 'zh-TW', label: '繁體中文',    flag: '🇹🇼' },
  { code: 'zh-CN', label: '简体中文',    flag: '🇨🇳' },
  { code: 'vi',    label: 'Tiếng Việt', flag: '🇻🇳' },
];

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled]     = useState(false);
  const [langOpen, setLangOpen]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const langRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onClickOutside = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) setLangOpen(false);
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  const currentLang = languages.find((l) => l.code === i18n.language) ?? languages[0];

  const navLinks = [
    { href: '#about',      label: t('nav.about') },
    { href: '#operations', label: t('nav.operations') },
    { href: '#innovation', label: t('nav.innovation') },
    { href: '#support',    label: t('nav.support') },
    { href: '#team',       label: t('nav.team') },
  ];

  const scrollTo = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'nav-bg shadow-lg shadow-black/40' : 'bg-transparent'
      }`}
    >
      <div className="container-fluid">
        <div className="flex items-center justify-between h-16">

          {/* ── Brand ── */}
          <a href="#" onClick={(e) => scrollTo(e, '#hero')} aria-label="PMA IT — Home" className="flex items-center gap-2.5 group flex-shrink-0">
            <Cpu className="w-6 h-6 text-adidas-blue group-hover:text-adidas-light transition-colors duration-200" />
            <span className="text-base font-bold tracking-wide text-white">
              PMA <span className="text-adidas-blue">IT</span>
            </span>
          </a>

          {/* ── Desktop links ── */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className="relative px-4 py-2 text-sm font-medium text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200 group"
              >
                {link.label}
                <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-adidas-blue group-hover:w-1/2 transition-all duration-300 rounded-full" />
              </a>
            ))}
          </div>

          {/* ── Right controls ── */}
          <div className="flex items-center gap-2">

            {/* Language switcher */}
            <div className="relative" ref={langRef}>
              <button
                id="language-switcher"
                onClick={() => setLangOpen(!langOpen)}
                aria-label="Switch language"
                aria-haspopup="listbox"
                aria-expanded={langOpen}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-white/5 border border-white/8 hover:border-adidas-blue/40 transition-all duration-200"
              >
                <Globe className="w-4 h-4 text-adidas-blue flex-shrink-0" />
                <span className="hidden sm:inline max-w-[120px] truncate">{currentLang.flag} {currentLang.label}</span>
                <span className="sm:hidden">{currentLang.flag}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 flex-shrink-0 ${langOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    role="listbox"
                    initial={{ opacity: 0, y: -6, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6, scale: 0.97 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-1.5 w-52 rounded-xl overflow-hidden shadow-2xl shadow-black/60"
                    style={{ background: 'var(--color-navy-800)', border: '1px solid var(--color-navy-600)' }}
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        role="option"
                        aria-selected={i18n.language === lang.code}
                        onClick={() => { i18n.changeLanguage(lang.code); setLangOpen(false); }}
                        className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm text-left transition-colors duration-150 ${
                          i18n.language === lang.code
                            ? 'bg-adidas-blue/15 text-adidas-light font-semibold'
                            : 'text-slate-300 hover:bg-white/5 hover:text-white'
                        }`}
                      >
                        <span className="text-base leading-none">{lang.flag}</span>
                        <span>{lang.label}</span>
                        {i18n.language === lang.code && (
                          <div className="ml-auto w-1.5 h-1.5 rounded-full bg-adidas-blue flex-shrink-0" />
                        )}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile hamburger */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              className="lg:hidden p-2 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden"
            style={{ background: 'var(--color-navy-900)', borderTop: '1px solid var(--color-navy-700)' }}
          >
            <div className="container-fluid py-3 space-y-0.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  className="block px-4 py-2.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
