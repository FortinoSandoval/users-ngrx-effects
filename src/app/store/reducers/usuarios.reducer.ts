import { createReducer, on } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';
import { loadUsers, loadUsersError, loadUsersSuccess } from '../actions';

export interface UsuariosState {
  users: Usuario[],
  loaded: boolean,
  loading: boolean,
  error: any
}

export const usuariosInitialState: UsuariosState = {
  users: [],
  loaded: false,
  loading: false,
  error: null
}

const _usersReducer = createReducer(usuariosInitialState,
  on(loadUsers, state => ({ ...state, loading: true })),
  on(loadUsersSuccess, (state, { users }) => ({
    ...state,
    loading: false,
    loaded: true,
    users: [...users]
  })),
  on(loadUsersError, (state, { payload }) => ({
    ...state,
    loading: false,
    error: {
      url: payload.url,
      name: payload.name,
      message: payload.message
    }
  }))
);

export function usersReducer(state, action) {
  return _usersReducer(state, action);
}