import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en.json';
import my from './my.json';
import zhTW from './zh-TW.json';
import zhCN from './zh-CN.json';
import vi from './vi.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    my: { translation: my },
    'zh-TW': { translation: zhTW },
    'zh-CN': { translation: zhCN },
    vi: { translation: vi },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
