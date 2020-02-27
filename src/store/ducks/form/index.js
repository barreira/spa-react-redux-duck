import { createActions, createReducer } from 'reduxsauce'

// Action types and creators

export const { Types, Creators } = createActions({
  saveForm: ['data'],
  saveField: ['field']
})

// Reducer handlers

export const INITIAL_STATE = {
  data: []
}

// eslint-disable-next-line no-unused-vars
const saveForm = (state = INITIAL_STATE, action) => ({
  data: [...action.data]
})

const saveField = (state = INITIAL_STATE, action) => {
  const filteredData = state.data.filter(obj => obj.id !== action.field.id)

  return {
    data: [
      ...filteredData,
      {
        id: action.field.id,
        text: action.field.text
      }
    ]
  }
}

// Reducer

export default createReducer(INITIAL_STATE, {
  [Types.SAVE_FORM]: saveForm,
  [Types.SAVE_FIELD]: saveField
})
