import { createAction, props } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';

export const loadUser = createAction('[Usuarios] Load user',
  props<{ id: string }>()
);

export const loadUserSuccess = createAction('[Usuarios] Load user Success',
  props<{ user: Usuario }>()
);

export const loadUserError = createAction('[Usuarios] Load user error',
  props<{ payload: any }>()
);