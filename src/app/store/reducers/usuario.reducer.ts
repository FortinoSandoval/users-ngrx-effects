import { createReducer, on } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';
import { loadUser, loadUserError, loadUserSuccess } from '../actions';

export interface UsuarioState {
  id: string,
  user: Usuario,
  loaded: boolean,
  loading: boolean,
  error: any
}

export const usuarioInitialState: UsuarioState = {
  id: null,
  user: null,
  loaded: false,
  loading: false,
  error: null
}

const _userReducer = createReducer(usuarioInitialState,
  on(loadUser, (state, { id }) => {
    return ({ ...state, loading: true, id: id });
  }),
  on(loadUserSuccess, (state, { user }) => ({
    ...state,
    loading: false,
    loaded: true,
    user: { ...user }
  })),
  on(loadUserError, (state, { payload }) => ({
    ...state,
    loading: false,
    error: {
      url: payload.url,
      name: payload.name,
      message: payload.message
    }
  }))
);

export function userReducer(state, action) {
  return _userReducer(state, action);
}