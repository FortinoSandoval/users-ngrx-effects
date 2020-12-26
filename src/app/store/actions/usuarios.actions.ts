import { createAction, props } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';

export const loadUsers = createAction('[Usuarioss] Load users');

export const loadUsersSuccess = createAction('[Usuarioss] Load users Success',
  props<{ users: Usuario[] }>()
);

export const loadUsersError = createAction('[Usuarioss] Load users error',
  props<{ payload: any }>()
);