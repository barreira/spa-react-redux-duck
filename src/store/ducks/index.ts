import { combineReducers } from 'redux';
import { User, userReducer } from './user';

export interface StoreState {
  user: User[];
}

export default combineReducers<StoreState>({
  user: userReducer
});
