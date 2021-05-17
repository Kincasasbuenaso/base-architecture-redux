import { createAction, props } from '@ngrx/store';

export const loadUsers = createAction(
    '[Users] Load Users'
);

export const loadUsersSuccess = createAction(
    '[Users] Load Users Success',
    props<{ users: any }>()
);

export const loadUsersError = createAction(
    '[Users] Load Users Error',
    props<{ payload: any }>()
);