import React from 'react';

import { useTranslation } from 'react-i18next';
import { namespaces } from '../../internationalization/constants';

import './index.css';

const Main: React.FC = () => {
  const { t, i18n } = useTranslation(namespaces.pages.main);

  const handleLanguage = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ): void => {
    event.preventDefault();
    const language = event.target.value;
    console.log(language);
    i18n.changeLanguage(language);
  };

  return (
    <>
      <div className="header">
        <h1>Internationalization</h1>
        <select
          className="language-selector"
          defaultValue="pt"
          onChange={handleLanguage}
        >
          <option value="de">Deutsche</option>
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="pt">Português</option>
          <option value="ru">Pусский</option>
        </select>
      </div>

      <div className="container">
        <div className="content">
          <h1>{t('language')}</h1>

          <div className="components-container">
            <input placeholder={t('language')}></input>
          </div>

          <div className="buttons-container">
            <button
              className="ok"
              onClick={() => {
                alert(
                  t('alert') +
                    ': ' +
                    t('buttons.ok', { ns: namespaces.common }),
                );
              }}
            >
              {t('buttons.ok', { ns: namespaces.common })}
            </button>
            <button
              className="cancel"
              onClick={() => {
                alert(t('buttons.cancel', { ns: namespaces.common }));
              }}
            >
              {t('buttons.cancel', { ns: namespaces.common })}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
