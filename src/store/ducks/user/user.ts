import { User, UserTypes, UserActions } from './types';

const INITIAL_STATE: User[] = [
  {
    id: 1,
    firstName: 'Pedro',
    lastName: 'Gonçalves',
    age: 30
  }
];

export const saveUserAction = (user: User) => ({
  type: UserTypes.SAVE_USER,
  payload: {
    user
  }
});

export const deleteUserAction = (id: number) => ({
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
      return state.filter((user: User) => user.id !== action.payload.userId);

    default:
      return state;
  }
};
