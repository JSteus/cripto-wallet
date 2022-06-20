import React, { FormEvent } from 'react';
import { useDispatch } from 'react-redux';

import { RiUser3Line } from 'react-icons/ri';
import { RiMailLine } from 'react-icons/ri';
import { RiLockPasswordLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';

import { Input } from '../../components/Input';
import {
  Container,
  InputContainer,
  Link,
  SigninFooter,
  SigninHeader,
  FooterContainer,
} from './styles';
import { signInRequest } from '../../store/actions/authenticationActions';
import { toast } from 'react-toastify';
import { passwordChecker } from '../../utils/formaters';

interface FormElements extends HTMLFormControlsCollection {
  name: HTMLFormElement;
  email: HTMLFormElement;
  password: HTMLFormElement;
  confirmPassword: HTMLFormElement;
}

interface SignInFormElements extends HTMLFormElement {
  readonly elements: FormElements;
}

export const SignIn: React.FC = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onHandleRegistration = (event: FormEvent<SignInFormElements>) => {
    event.preventDefault();

    const name = event.currentTarget.elements.name.value;
    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;
    const confirmPassword = event.currentTarget.elements.confirmPassword.value;

    if (!name || !email || !password || !confirmPassword) {
      toast.warn('Preencha todos os campos');
      return;
    }

    if (password !== confirmPassword) {
      toast.warn('Confirme sua senha');
      return;
    }

    if (!passwordChecker(password)) {
      toast.warn(
        'Senha fraca. A senha deve conter 6 caracteres e ao menos 1 número',
      );
      return;
    }

    const data = {
      name,
      email,
      password,
    };

    dispatch(signInRequest(data));
  };

  return (
    <Container>
      <SigninHeader>Criar Conta</SigninHeader>
      <form onSubmit={onHandleRegistration}>
        <InputContainer>
          <Input
            isPassword={false}
            icon={<RiUser3Line />}
            placeholderText="Nome Completo"
            id="name"
          />
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
          <Input
            isPassword
            icon={<RiLockPasswordLine />}
            placeholderText="Confirmar Senha"
            id="confirmPassword"
          />
          <Button buttonTitle="Cadastrar" fill={true} type="submit" />
        </InputContainer>
      </form>
      <FooterContainer>
        <SigninFooter>
          Já tem uma conta?{' '}
          <Link onClick={() => navigate('/login')}>Faça o login</Link>
        </SigninFooter>
      </FooterContainer>
    </Container>
  );
};
