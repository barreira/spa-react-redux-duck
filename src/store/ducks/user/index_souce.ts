import { createReducer } from '../../storeUtils';

export interface User {
  readonly id: number;
  readonly firstName: string;
  readonly lastName: string;
  readonly age: number;
}

export const INITIAL_STATE: User = {
  id: 0,
  firstName: '',
  lastName: '',
  age: 0
};

// Action Types
enum UserTypes {
  SAVE_USER = 'SAVE_USER',
  DELETE_USER = 'DELETE_USER'
}

export const userActions = {
  saveUser(user: User) {
    return {
      type: UserTypes.SAVE_USER,
      payload: {
        user
      }
    };
  },
  deleteUser(id: number) {
    return {
      type: UserTypes.DELETE_USER,
      payload: {
        id
      }
    };
  }
};

interface SaveUserAction {
  type: UserTypes.SAVE_USER;
  payload: {
    user: User;
  };
}

interface DeleteUserAction {
  type: UserTypes.DELETE_USER;
  payload: {
    userId: number;
  };
}

type UserActions = SaveUserAction | DeleteUserAction;

export const userReducer = createReducer<User, UserTypes, UserActions>(
  INITIAL_STATE,
  {
    [UserTypes.SAVE_USER]: (state, action): User => ({
      ...state,
      ...(action as SaveUserAction).payload.user
    }),
    [UserTypes.DELETE_USER]: (state, action): User => state
  }
);
