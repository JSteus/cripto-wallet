import { Auth, UserLogin, UserSignIn } from '../../@types/user';

export function signInRequest({ name, email, password }: UserSignIn) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { name, email, password },
  };
}

export function signInSuccess() {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
  };
}

export function signInFailure({ error }: any) {
  return {
    type: '@auth/SIGN_IN_FAILURE',
    payload: error,
  };
}

export function loginRequest({ email, password }: UserLogin) {
  return {
    type: '@auth/LOGIN_REQUEST',
    payload: { email, password },
  };
}

export function loginSuccess({ access_token, refresh_token, user }: Auth) {
  return {
    type: '@auth/LOGIN_SUCCESS',
    payload: { access_token, refresh_token, user },
  };
}

export function loginFailure({ error }: any) {
  return {
    type: '@auth/LOGIN_FAILURE',
    payload: error,
  };
}

export function logOut() {
  return {
    type: '@auth/LOG_OUT',
  };
}
