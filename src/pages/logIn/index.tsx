import React, { FormEvent, useEffect } from 'react';
import { RiLockPasswordLine } from 'react-icons/ri';
import { RiMailLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { useDispatch, useSelector } from 'react-redux';

import { Input } from '../../components/Input';
import {
  Container,
  Detail,
  FooterContainer,
  InputContainer,
  LoginFooter,
  LoginHeader,
  Link,
} from './styles';
import { loginRequest } from '../../store/actions/authenticationActions';
import { RootState } from '../../store/reducers';

interface FormElements extends HTMLFormControlsCollection {
  email: HTMLFormElement;
  password: HTMLFormElement;
}

interface LoginFormElements extends HTMLFormElement {
  readonly elements: FormElements;
}

export const LogIn: React.FC = () => {
  const dispatch = useDispatch();
  const isSigned = useSelector((state: RootState) => state.auth.signed);

  const navigate = useNavigate();

  const handleLogin = (event: FormEvent<LoginFormElements>) => {
    event.preventDefault();

    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;

    const data = {
      email,
      password,
    };

    dispatch(loginRequest(data));
  };

  useEffect(() => {
    if (isSigned) {
      navigate('/home');
    }
  }, []);
  return (
    <Container>
      <LoginHeader>
        <Detail>Olá!</Detail> <br /> Seja bem-vindo.
      </LoginHeader>
      <form onSubmit={handleLogin}>
        <InputContainer>
          <Input
            isPassword={false}
            icon={<RiMailLine />}
            entryType="email"
            placeholderText="Email"
            id="email"
          />
          <Input
            isPassword
            icon={<RiLockPasswordLine />}
            placeholderText="Senha"
            id="password"
          />
          <Button buttonTitle="Entrar" fill={true} type="submit" />
        </InputContainer>
      </form>
      <FooterContainer>
        <LoginFooter>
          Não tem uma conta?{' '}
          <Link onClick={() => navigate('/signin')}>Criar conta</Link>
        </LoginFooter>
      </FooterContainer>
    </Container>
  );
};
