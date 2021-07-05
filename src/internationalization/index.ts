import i18next, { i18n as i18nInstance } from 'i18next';
import { initReactI18next } from 'react-i18next';
import { languages, namespaces } from './constants';
import HttpApi from 'i18next-http-backend';

const createI18n = (language: string): i18nInstance => {
  const i18n = i18next.createInstance().use(initReactI18next);

  i18n.use(HttpApi).init({
    backend: {
      loadPath: './locales/{{lng}}/{{ns}}.json',
    },
    lng: language,
    fallbackLng: language,
    ns: namespaces.common,
  });

  return i18n;
};

const i18n = createI18n(languages.pt);

export default i18n;
