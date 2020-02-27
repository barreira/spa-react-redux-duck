import { createActions, createReducer } from 'reduxsauce'

// Action types and creators

export const { Types, Creators } = createActions({
  decrementTimer: [],
  saveText: ['text'],
  saveScore: ['score'],
  setStarted: [],
  restart: []
})

// Reducer handlers

export const INITIAL_STATE = {
  timer: 10,
  text: '',
  score: 0,
  hasStarted: false
}

// eslint-disable-next-line no-unused-vars
const decrementTimer = (state = INITIAL_STATE, action) => ({
  ...state,
  timer: state.timer - 1
})

const saveText = (state = INITIAL_STATE, action) => ({
  ...state,
  text: action.text
})

const saveScore = (state = INITIAL_STATE, action) => ({
  ...state,
  score: action.score
})

// eslint-disable-next-line no-unused-vars
const setStarted = (state = INITIAL_STATE, action) => ({
  ...state,
  hasStarted: true
})

// eslint-disable-next-line no-unused-vars
const restart = (state = INITIAL_STATE, action) => ({
  ...INITIAL_STATE
})

// Reducer

export default createReducer(INITIAL_STATE, {
  [Types.DECREMENT_TIMER]: decrementTimer,
  [Types.SAVE_TEXT]: saveText,
  [Types.SAVE_SCORE]: saveScore,
  [Types.SET_STARTED]: setStarted,
  [Types.RESTART]: restart
})
