export interface User {
  readonly id: number;
  readonly firstName: string;
  readonly lastName: string;
  readonly age: number;
}

// Action Types
export enum UserTypes {
  SAVE_USER = 'SAVE_USER',
  DELETE_USER = 'DELETE_USER',
  FETCH_USERS = 'FETCH_USERS'
}

export interface SaveUserAction {
  type: UserTypes.SAVE_USER;
  payload: {
    user: Partial<User>;
  };
}

export interface DeleteUserAction {
  type: UserTypes.DELETE_USER;
  payload: {
    id: number;
  };
}

export interface FetchUsersAction {
  type: UserTypes.FETCH_USERS;
  payload: {
    users: User[];
  };
}

export type UserActions = SaveUserAction | DeleteUserAction | FetchUsersAction;
