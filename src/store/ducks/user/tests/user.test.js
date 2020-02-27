import userReducer, { Creators, INITIAL_STATE, Types } from '../../user'

describe('Types', () => {
  it('should export the expected action types', () => {
    expect(Types).toEqual({
      SAVE_USER: 'SAVE_USER'
    })
  })
})

describe('Creators', () => {
  it('should return the saveUser action', () => {
    expect(Creators.saveUser({ user: 'user' })).toEqual({
      type: Types.SAVE_USER,
      user: {
        user: 'user'
      }
    })
  })
})

describe('initialState', () => {
  it('should set the initial state', () => {
    expect(INITIAL_STATE).toEqual({
      firstName: '',
      lastName: '',
      age: ''
    })
  })
})

describe('Reducers', () => {
  describe('SAVE_USER', () => {
    it('should save user', () => {
      const action = {
        type: 'SAVE_USER',
        user: {
          firstName: 'some_name'
        }
      }

      expect(userReducer(INITIAL_STATE, action)).toEqual({
        ...INITIAL_STATE,
        ...action.user
      })
    })
  })
})
