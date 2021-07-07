import React from 'react';

import { Container, Separator } from './styles';

import { useTranslation } from 'react-i18next';
import { namespaces } from '../../internationalization/constants';

import Button from './Button';

const AccessibilityBar: React.FC = () => {
  const { t, i18n } = useTranslation();

  const handleLanguage = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ): void => {
    event.preventDefault();
    const language = event.target.value;
    console.log(language);
    i18n.changeLanguage(language);
  };

  return (
    <Container>
      <Separator>
        <Button
          icon="K"
          text={t('accessibilityBar.goToContent', {
            ns: namespaces.components,
            returnObjects: true,
          })}
        />
        <Button
          icon="Q"
          text={t('accessibilityBar.menu', {
            ns: namespaces.components,
            returnObjects: true,
          })}
        />
        <Button
          icon="A"
          text={t('accessibilityBar.accssibilityShortchuts', {
            ns: namespaces.components,
            returnObjects: true,
          })}
        />
      </Separator>
      <Separator>
        <Button icon="1" />
        <Button icon="2" />
        <Button icon="3" />
        <Button icon="4" />
        <Button icon="5" />
        <Button icon="6" />
        <select defaultValue="pt" onChange={handleLanguage}>
          <option value="en">English</option>
          <option value="pt">Português</option>
        </select>
      </Separator>
    </Container>
  );
};

export default AccessibilityBar;
