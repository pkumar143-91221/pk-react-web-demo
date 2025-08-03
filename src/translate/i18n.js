import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: require('../locales/en/translation.json')
            },
            hi: {
                translation: require('../locales/hi/translation.json')
            }
        },
        fallbackLng: 'en',
        debug: true,
        interpolation: {
            escapeValue: false, // react already safes from xss
        }
    });

export default i18n;