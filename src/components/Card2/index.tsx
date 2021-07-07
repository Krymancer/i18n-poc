import React from 'react';

import { useTranslation } from 'react-i18next';
import { namespaces } from '../../internationalization/constants';

import './index.css';

const Card2: React.FC = () => {
  const { t, i18n } = useTranslation(namespaces.components);

  return (
    <div className="p-card">
      <h3 className="p-card__title">{t('title')}</h3>
      <p className="p-card__content">{t('content')}</p>
    </div>
  );
};

export default Card2;
