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

const decrementTimer = (state = INITIAL_STATE) => ({
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

const setStarted = (state = INITIAL_STATE) => ({
  ...state,
  hasStarted: true
})

const restart = () => ({
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
