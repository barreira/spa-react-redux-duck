import formReducer, { Creators, INITIAL_STATE, Types } from '../../form'

describe('Types', () => {
  it('should export the expected action types', () => {
    expect(Types).toEqual({
      SAVE_FORM: 'SAVE_FORM',
      SAVE_FIELD: 'SAVE_FIELD'
    })
  })
})

describe('Creators', () => {
  it('should return the saveForm action', () => {
    const data = [
      {
        id: 1,
        text: 'This is some text 1'
      },
      {
        id: 2,
        text: 'This is some text 2'
      },
      {
        id: 3,
        text: 'This is some text 3'
      }
    ]

    expect(Creators.saveForm(data)).toEqual({
      type: Types.SAVE_FORM,
      data
    })
  })

  it('should return the saveField action', () => {
    const field = {
      id: 1,
      text: 'This is some text'
    }

    expect(Creators.saveField(field)).toEqual({
      type: Types.SAVE_FIELD,
      field
    })
  })
})

describe('INITIAL_STATE', () => {
  it('should set the initial state', () => {
    expect(INITIAL_STATE).toEqual({
      data: []
    })
  })
})

describe('Reducers', () => {
  describe('SAVE_FORM', () => {
    it('should save the form data', () => {
      const action = {
        type: 'SAVE_FORM',
        data: [
          {
            id: 1,
            text: 'This is some text 1'
          },
          {
            id: 2,
            text: 'This is some text 2'
          },
          {
            id: 3,
            text: 'This is some text 3'
          }
        ]
      }

      expect(formReducer(INITIAL_STATE, action)).toEqual({
        data: [...action.data]
      })
    })
  })

  describe('SAVE_FIELD', () => {
    it('should save a field from the from', () => {
      const action = {
        type: 'SAVE_FIELD',
        field: {
          id: 2,
          text: 'This is a text 2'
        }
      }

      expect(formReducer(INITIAL_STATE, action)).toEqual({
        data: [
          {
            id: 2,
            text: 'This is a text 2'
          }
        ]
      })
    })

    it('should update a field from the form', () => {
      const beforeState = {
        data: [
          {
            id: 1,
            text: 'This is some text 1'
          },
          {
            id: 2,
            text: 'This is some text 2'
          },
          {
            id: 3,
            text: 'This is some text 3'
          }
        ]
      }

      const action = {
        type: 'SAVE_FIELD',
        field: {
          id: 2,
          text: 'This is a different text'
        }
      }

      expect(formReducer(beforeState, action)).toEqual({
        data: [
          {
            id: 1,
            text: 'This is some text 1'
          },
          {
            id: 3,
            text: 'This is some text 3'
          },
          {
            id: 2,
            text: 'This is a different text'
          }
        ]
      })
    })
  })
})
