import React from 'react';

interface props {
  icon: string;
  text?: string;
}

import { Container, Round, Text } from './styles';

const Button: React.FC<props> = (props: props) => {
  return (
    <Container>
      <Round>{props.icon}</Round>
      <Text>{props.text}</Text>
    </Container>
  );
};

export default Button;
