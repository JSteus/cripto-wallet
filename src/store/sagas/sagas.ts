import { put, call, takeLatest, all } from 'redux-saga/effects';
import {
  signInUserService,
  loginUserService,
} from '../../services/authService';

import { Ierror, LoginRequest, SignInRequest } from '../../@types/user';
import { toast } from 'react-toastify';
import { errorCodes } from '../../utils/errorHandler';

export function* signInSaga(payload: SignInRequest) {
  try {
    const response: ReturnType<typeof signInUserService> = yield call(
      signInUserService,
      payload,
    );
    yield put({ type: '@auth/SIGN_IN_SUCCESS', response });
  } catch (error) {
    yield put({ type: '@auth/SIGN_IN_FAILURE', error });
  }
}

export function* loginSaga(payload: LoginRequest) {
  try {
    const response: ReturnType<typeof loginUserService> = yield call(
      loginUserService,
      payload,
    );
    yield put({ type: '@auth/LOGIN_SUCCESS', response });
  } catch (error) {
    yield put({ type: '@auth/LOGIN_FAILURE', error });
  }
}

export function* signInSuccessSaga() {
  toast.success('Conta cadastrada com sucesso');
}

export function* signInFailureSaga(error: { type: string; error: Ierror }) {
  toast.error(errorCodes[error.error.code]);
}

export function* loginFailureSaga(error: { type: string; error: Ierror }) {
  toast.error(errorCodes[error.error.code]);
}

export default all([
  takeLatest('@auth/LOGIN_REQUEST', loginSaga),
  takeLatest('@auth/SIGN_IN_REQUEST', signInSaga),
  takeLatest('@auth/SIGN_IN_SUCCESS', signInSuccessSaga),
  takeLatest('@auth/LOGIN_FAILURE', loginFailureSaga),
  takeLatest('@auth/SIGN_IN_FAILURE', signInFailureSaga),
]);
