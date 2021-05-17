import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadUsers } from 'src/app/store/actions/users.actions';
import { AppState } from 'src/app/store/app.reducers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users = [];

  constructor(private store: Store<AppState>) {  }

  ngOnInit(): void {

    this.store.select('users').subscribe( ({ users }) => {
      this.users = users;
    });

    this.store.dispatch( loadUsers() );
  }

}
