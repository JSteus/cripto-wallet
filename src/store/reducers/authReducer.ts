import produce from 'immer';
import { ActionInterface } from '../../@types/user';

const INITIAL_STATE = {
  name: null,
  access_token: null,
  refresh_token: null,
  signed: false,
  loading: false,
};

function auth(state = INITIAL_STATE, action: ActionInterface) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST':
        draft.loading = true;
        break;
      case '@auth/LOGIN_REQUEST':
        draft.loading = true;
        break;
      case '@auth/SIGN_IN_SUCCESS':
        draft.loading = false;
        break;
      case '@auth/SIGN_IN_FAILURE':
        draft.loading = false;
        break;
      case '@auth/LOGIN_FAILURE':
        draft.loading = false;
        break;
      case '@auth/LOGIN_SUCCESS':
        draft.name = action.response.name;
        draft.access_token = action.response.access_token;
        draft.refresh_token = action.response.refresh_token;
        draft.signed = true;
        draft.loading = false;
        break;
      case '@auth/LOG_OUT':
        draft.name = null;
        draft.signed = false;
        draft.access_token = null;
        draft.refresh_token = null;
        break;
      default:
    }
  });
}

export default auth;
