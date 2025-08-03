import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// i18n
//     .use(LanguageDetector)
//     .use(initReactI18next)
//     .init({
//         resources: {
//             en: {
//                 translation: require('../locales/en/translation.json')
//             },
//             hi: {
//                 translation: require('../locales/hi/translation.json')
//             }
//         },
//         fallbackLng: 'en',
//         debug: true,
//         interpolation: {
//             escapeValue: false, // react already safes from xss
//         }
//     });

// If you want to use backend option
i18n
    .use(Backend) // Enables loading translations from a backend
    .use(LanguageDetector) // Detects user's language
    .use(initReactI18next) // Passes the i18n instance to react-i18next
    .init({
        fallbackLng: 'en', // Fallback language if detection fails
        debug: true, // Enable debug mode for development
        interpolation: {
            escapeValue: false, // React already escapes values
        },
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json', // Path to your translation files
        },
    });

export default i18n;