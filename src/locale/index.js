import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en.json';
import tw from './zh-TW.json';

// default language
const resources = {
  'zh-TW': {
    translation: tw,
  },
  en: {
    translation: en,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'zh-TW',
  fallbackLng: 'zh-TW',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
