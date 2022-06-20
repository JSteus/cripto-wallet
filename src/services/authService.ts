import { auth } from './firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { LoginRequest, SignInRequest } from '../@types/user';

export const signInUserService = async (request: SignInRequest) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      request.payload.email,
      request.payload.password,
    );

    updateProfile(userCredential.user, {
      displayName: request.payload.name,
    });

    return;
  } catch (e) {
    throw e;
  }
};

export const loginUserService = async (request: LoginRequest) => {
  try {
    const { user } = await signInWithEmailAndPassword(
      auth,
      request.payload.email,
      request.payload.password,
    );

    const access_token = await user.getIdToken();
    const authorizedUser = {
      name: user.displayName,
      access_token,
      refresh_token: user.refreshToken,
    };

    location.replace('/home');

    return authorizedUser;
  } catch (e) {
    throw e;
  }
};
