import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { UsuarioService } from 'src/app/services/usuario.service';
import * as usersActions from '../actions';

@Injectable()
export class UsuarioEffects {
  constructor(private actions$: Actions, private usuariosService: UsuarioService) { }

  cargarUsuario$ = createEffect(
    () => this.actions$.pipe(
      ofType(usersActions.loadUser),
      mergeMap(
        (action) => {
          return this.usuariosService.getUserById(action.id).pipe(
            map(user => usersActions.loadUserSuccess({ user })),
            catchError(payload => of(usersActions.loadUserError({ payload }))),
          )
        }
      )
    )
  );
}