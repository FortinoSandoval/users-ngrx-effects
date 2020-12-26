import { createAction, props } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';

export const loadUsers = createAction('[Usuarios] Load users');

export const loadUsersSuccess = createAction('[Usuarios] Load users Success',
  props<{ users: Usuario[] }>()
);

export const loadUsersError = createAction('[Usuarios] Load users error',
  props<{ payload: any }>()
);