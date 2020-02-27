import { createActions, createReducer } from 'reduxsauce'

// Action types and creators

export const { Types, Creators } = createActions({
  saveUser: ['user']
})

// Reducer handlers

export const INITIAL_STATE = {
  firstName: '',
  lastName: '',
  age: ''
}

const saveUser = (state = INITIAL_STATE, action) => ({
  ...state,
  ...action.user
})

// Reducer

export default createReducer(INITIAL_STATE, {
  [Types.SAVE_USER]: saveUser
})
