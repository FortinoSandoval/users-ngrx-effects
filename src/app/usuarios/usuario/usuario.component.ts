import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { Usuario } from 'src/app/models/usuario.model';
import { loadUser } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {
  user: Usuario;

  constructor(private router: ActivatedRoute, private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('user').pipe(
      filter(user => user.user != null)
    ).subscribe(user => {
      console.log(user);
      this.user = user.user;
    })

    this.router.params.subscribe(({ id }) => {
      this.store.dispatch(loadUser({ id }));
    });
  }

}
