// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(initReactI18next) // Integrates i18n with React
  .use(LanguageDetector) // Detects user language
  .init({
    // Resources for translations will be added here
    resources: {
      en: {
        translation: {
          "welcome_message": "Welcome to My Portfolio"
          // ... more translations for English
        }
      },
      sv: {
        translation: {
          "welcome_message": "Välkommen till Mitt Portfolio"
          // ... more translations for Swedish
        }
      }
    },
    fallbackLng: 'en', // Use English if the user's language is not available
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;
