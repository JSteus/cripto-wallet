export interface ActionInterface {
  type: string;
  response: any;
}

export interface UserSignIn {
  name: string;
  email: string;
  password: string;
}

export interface UserLogin {
  email: string;
  password: string;
}

export interface LoginRequest {
  type: string;
  payload: UserLogin;
}

export interface SignInRequest {
  type: string;
  payload: UserSignIn;
}

export interface Auth {
  access_token: string;
  refresh_token: string;
  user: any;
}

export interface Ierror {
  [propertyName: string]: string;
}
