import { combineReducers } from 'redux';
import { User, userReducer } from './user';
import { TypingGame, typingGameReducer } from './typingGame';

export interface StoreState {
  user: User[];
  typingGame: TypingGame;
}

export default combineReducers<StoreState>({
  user: userReducer,
  typingGame: typingGameReducer
});
