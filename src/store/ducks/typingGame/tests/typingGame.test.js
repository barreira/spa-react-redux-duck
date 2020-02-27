import typingGameReducer, {
  Creators,
  INITIAL_STATE,
  Types
} from '../../typingGame'

describe('Types', () => {
  it('should export the expected action types', () => {
    expect(Types).toEqual({
      DECREMENT_TIMER: 'DECREMENT_TIMER',
      SAVE_TEXT: 'SAVE_TEXT',
      SAVE_SCORE: 'SAVE_SCORE',
      SET_STARTED: 'SET_STARTED',
      RESTART: 'RESTART'
    })
  })
})

describe('Creators', () => {
  it('should return the decrementTimer action', () => {
    expect(Creators.decrementTimer()).toEqual({
      type: Types.DECREMENT_TIMER
    })
  })

  it('should return the saveText action', () => {
    const text = 'This is some text'

    expect(Creators.saveText(text)).toEqual({
      type: Types.SAVE_TEXT,
      text
    })
  })

  it('should return the saveScore action', () => {
    const score = 25

    expect(Creators.saveScore(score)).toEqual({
      type: Types.SAVE_SCORE,
      score
    })
  })

  it('should return the setStarted action', () => {
    expect(Creators.setStarted()).toEqual({
      type: Types.SET_STARTED
    })
  })

  it('should return the restart action', () => {
    expect(Creators.restart()).toEqual({
      type: Types.RESTART
    })
  })
})

describe('INITIAL_STATE', () => {
  it('should set the initial state', () => {
    expect(INITIAL_STATE).toEqual({
      timer: 10,
      text: '',
      score: 0,
      hasStarted: false
    })
  })
})

describe('Reducers', () => {
  describe('DECREMENT_TIMER', () => {
    it('should decrement the timer in the state by one', () => {
      const action = {
        type: 'DECREMENT_TIMER'
      }

      expect(typingGameReducer(INITIAL_STATE, action)).toEqual({
        ...INITIAL_STATE,
        timer: 9
      })
    })
  })

  describe('SAVE_TEXT', () => {
    it('should save the text in the state', () => {
      const inputText = 'This is some text'

      const action = {
        type: 'SAVE_TEXT',
        text: inputText
      }

      expect(typingGameReducer(INITIAL_STATE, action)).toEqual({
        ...INITIAL_STATE,
        text: inputText
      })
    })
  })

  describe('SAVE_SCORE', () => {
    it('should save the score in the state', () => {
      const inputScore = 5

      const action = {
        type: 'SAVE_SCORE',
        score: inputScore
      }

      expect(typingGameReducer(INITIAL_STATE, action)).toEqual({
        ...INITIAL_STATE,
        score: inputScore
      })
    })
  })

  describe('SET_STARTED', () => {
    it('should set the hasStarted field to true', () => {
      const action = {
        type: 'SET_STARTED'
      }

      expect(typingGameReducer(INITIAL_STATE, action)).toEqual({
        ...INITIAL_STATE,
        hasStarted: true
      })
    })
  })

  describe('RESTART', () => {
    it('should reset the state to the INITIAL_STATE', () => {
      const beforeState = {
        timer: 0,
        text: 'Lorem',
        score: 5,
        hasStarted: true
      }

      const action = {
        type: 'RESTART'
      }

      expect(typingGameReducer(beforeState, action)).toEqual({
        ...INITIAL_STATE
      })
    })
  })
})
