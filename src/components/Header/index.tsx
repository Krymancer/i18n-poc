import React from 'react';

import { Container, Image } from './styles';

import { useTranslation } from 'react-i18next';
import { namespaces } from '../../internationalization/constants';

const AccessibilityBar: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Image>.</Image>
      <h1>
        {t('header.institutional', {
          ns: namespaces.components,
          returnObjects: true,
        })}
      </h1>
      <h1>
        {t('header.areasofexpertise', {
          ns: namespaces.components,
          returnObjects: true,
        })}
      </h1>
      <h1>
        {t('header.oursolutions', {
          ns: namespaces.components,
          returnObjects: true,
        })}
      </h1>
      <h1>
        {t('header.workwithus', {
          ns: namespaces.components,
          returnObjects: true,
        })}
      </h1>
    </Container>
  );
};

export default AccessibilityBar;
