import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enNavbar from "./locales/en/navbar.json";
import mrNavbar from "./locales/mr/navbar.json";

import enHome from "./locales/en/home.json";
import mrHome from "./locales/mr/home.json";

import enAbout from "./locales/en/about.json";
import mrAbout from "./locales/mr/about.json";

import enAcademics from "./locales/en/academics.json";
import mrAcademics from "./locales/mr/academics.json";

import enAdmissions from "./locales/en/admissions.json";
import mrAdmissions from "./locales/mr/admissions.json";

import enContact from "./locales/en/contact.json";
import mrContact from "./locales/mr/contact.json";

import enFooter from "./locales/en/footer.json";
import mrFooter from "./locales/mr/footer.json";

import enHero from "./locales/en/hero.json";
import mrHero from "./locales/mr/hero.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: enNavbar,
        home: enHome,
        about: enAbout,
        academics: enAcademics,
        admissions: enAdmissions,
        contact: enContact,
        footer: enFooter,
        hero: enHero,
      },
      mr: {
        common: mrNavbar,
        home: mrHome,
        about: mrAbout,
        academics: mrAcademics,
        admissions: mrAdmissions,
        contact: mrContact,
        footer: mrFooter,
        hero: mrHero,
      },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
