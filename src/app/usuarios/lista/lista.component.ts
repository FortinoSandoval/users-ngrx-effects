import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadUsers } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit {
  usuarios: Usuario[] = [];
  loading: boolean = false;
  error: any;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('users').subscribe(({ users, loading, error }) => {
      this.loading = loading;
      this.usuarios = users;
      this.error = error;
    });

    this.store.dispatch(loadUsers())
  }

}
