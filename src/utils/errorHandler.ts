import { Ierror } from '../@types/user';

export const errorCodes: Ierror = {
  'auth/email-already-in-use': 'Este email já possui um cadastro',
  'auth/invalid-email': 'Endereço de email inválido',
  'auth/weak-password':
    'Senha fraca. A senha deve conter 6 caracteres e ao menos 1 número',
  'auth/network-request-failed': 'Erro de rede. Tente novamente mais tarde',
  'auth/user-disabled': 'Este usuário foi desativado',
  'auth/user-not-found': 'Usuário não encontrado',
  'auth/wrong-password': 'Senha incorreta',
};
