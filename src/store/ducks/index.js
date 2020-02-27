import { combineReducers } from 'redux'
import formReducer from './form'
import userReducer from './user'
import typingGameReducer from './typingGame'

export default combineReducers({
  form: formReducer,
  user: userReducer,
  typingGame: typingGameReducer
})
