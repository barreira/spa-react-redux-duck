import {
  User,
  UserTypes,
  UserActions,
  SaveUserAction,
  DeleteUserAction
} from './types';

const INITIAL_STATE: User[] = [];

export const saveUserAction = (user: User): SaveUserAction => ({
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

export const userReducer = (
  state: User[] = INITIAL_STATE,
  action: UserActions
): User[] => {
  switch (action.type) {
    case UserTypes.SAVE_USER:
      return [...state, action.payload.user];

    case UserTypes.DELETE_USER:
      return state.filter((user: User) => user.id !== action.payload.id);

    default:
      return state;
  }
};
