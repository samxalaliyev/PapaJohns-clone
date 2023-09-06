import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import translationAZ from "./locales/az/translationAZ.json";
import translationEN from "./locales/en/translationEN.json";
import translationRU from "./locales/ru/translationRU.json";

const resources = {
  az: {
    translation: translationAZ,
  },
  en: {
    translation: translationEN,
  },
  ru: {
    translation: translationRU,
  },
};

i18n.use(initReactI18next).use(Backend).init({
  lng: "az",
  resources,
});

export default i18n;
