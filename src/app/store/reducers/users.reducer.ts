import { createReducer, on } from '@ngrx/store';
import { loadUsers, loadUsersError, loadUsersSuccess } from '../actions';

export interface UsersState {
    users: any []
}

const usersInitialState: UsersState = {
    users:[]
}

const _usersReducer = createReducer(usersInitialState,
    on( loadUsers, state => ({...state})),

    on( loadUsersSuccess, (state, { users }) => ({ 
        ...state,
        users: [ ...users ] 
    })),

    on( loadUsersError, (state, { payload }) => ({ 
        ...state,
        error: {
            url: payload.url,
            name: payload.name,
            message: payload.message
        }
    })),
);


export function usersReducer(state,action) {
    return _usersReducer(state,action);
}
