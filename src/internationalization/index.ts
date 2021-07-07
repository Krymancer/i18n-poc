import i18next, { i18n as i18nInstance } from 'i18next';
import { initReactI18next } from 'react-i18next';
import { namespaces } from './constants';

import languages from '../translations';

const createI18n = (language: string): i18nInstance => {
  const i18n = i18next.createInstance().use(initReactI18next);

  i18n.init({
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: languages,
    lng: language,
    ns: namespaces.common,
    fallbackLng: language,
  });

  return i18n;
};

const i18n = createI18n('pt');

export default i18n;
