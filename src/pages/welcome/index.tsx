import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../components/Button';
import { Container, Content, WelcomeContainer, WelcomeText } from './styles';

export const Welcome: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Content>
        <WelcomeContainer>
          <WelcomeText>
            Bem-vindo a<br />
            sua carteira digital
            <br />
            de criptomoedas
          </WelcomeText>
        </WelcomeContainer>
        <Button
          buttonTitle="Entrar"
          onClick={() => navigate('/login')}
          fill={true}
        />
        <Button
          buttonTitle="Criar Conta"
          onClick={() => navigate('/signin')}
          fill={false}
        />
      </Content>
    </Container>
  );
};
