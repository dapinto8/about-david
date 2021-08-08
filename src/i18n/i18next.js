import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

i18next.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: ['en', 'es'],
  ns: ['translations'],
  defaultNS: 'translations',
  returnObjects: true,
  keySeparator: '.',
  interpolation: { escapeValue: false },
  react: { useSuspense: true },
  debug: process.env.NODE_ENV === 'development',
  resources: {
    en: {
      translations: require('./locales/en/translations.json')
    },
    es: {
      translations: require('./locales/es/translations.json')
    },
  },
});

i18next.languages = ['en', 'es'];

export default i18next;
