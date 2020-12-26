import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { UsuarioService } from 'src/app/services/usuario.service';
import * as usersActions from '../actions';

@Injectable()
export class UsuariosEffects {
  constructor(private actions$: Actions, private usuariosService: UsuarioService) { }

  cargarUsuarios$ = createEffect(
    () => this.actions$.pipe(
      ofType(usersActions.loadUsers),
      mergeMap(
        () => this.usuariosService.getUsers().pipe(
          map(users => usersActions.loadUsersSuccess({ users })),
          catchError(payload => of(usersActions.loadUsersError({ payload }))),
        )
      )
    )
  );
}