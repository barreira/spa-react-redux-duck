import { Dispatch } from 'redux';
import axios from 'axios';

import {
  User,
  UserTypes,
  UserActions,
  SaveUserAction,
  DeleteUserAction,
  FetchUsersAction
} from './types';

const fetchUrl =
  'https://my-json-server.typicode.com/barreira/spa-react-redux-duck/users';
const INITIAL_STATE: User[] = [];

export const saveUserAction = (user: Partial<User>): SaveUserAction => ({
  type: UserTypes.SAVE_USER,
  payload: {
    user
  }
});

export const deleteUserAction = (id: number): DeleteUserAction => ({
  type: UserTypes.DELETE_USER,
  payload: {
    id
  }
});

export const fetchUsersAction = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<User[]>(fetchUrl);

    dispatch<FetchUsersAction>({
      type: UserTypes.FETCH_USERS,
      payload: {
        users: response.data
      }
    });
  };
};

export const userReducer = (
  state: User[] = INITIAL_STATE,
  action: UserActions
): User[] => {
  switch (action.type) {
    case UserTypes.SAVE_USER:
      return [
        ...state,
        {
          id: state.length + 1,
          ...action.payload.user
        } as User
      ];

    case UserTypes.DELETE_USER:
      return state.filter((user: User) => user.id !== action.payload.id);

    case UserTypes.FETCH_USERS:
      return [...state, ...action.payload.users];

    default:
      return state;
  }
};
