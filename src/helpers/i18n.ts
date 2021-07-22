import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: false,
    detection: {
      order: ["querystring", "cookie"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "./locales/{{lng}}/translation.json",
    },
    load: "all",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
