import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as usersActions from '../actions/users.actions';
import { tap, mergeMap, map, catchError } from 'rxjs/operators';
import { UserService } from '../../services/user/user.service';
import { of } from 'rxjs';



@Injectable()
export class UsersEffects {

    constructor(
        private actions$: Actions,
        private usersServices: UserService
    ){}


    cargarUsuarios$ = createEffect(
        () => this.actions$.pipe(
            ofType( usersActions.loadUsers ),
            mergeMap(
                () => this.usersServices.getUsers()
                    .pipe(
                        map( users => usersActions.loadUsersSuccess({ users }) ),
                        catchError( err => of(usersActions.loadUsersError({ payload: err })) )
                    )
            )
        )
    );

}