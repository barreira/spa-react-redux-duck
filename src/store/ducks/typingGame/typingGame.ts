import {
  TypingGame,
  TypingGameTypes,
  TypingGameActions,
  DecrementTimerAction,
  SaveTextAction,
  SaveScoreAction,
  SetStartedtAction,
  RestartAction
} from './types';

export const INITIAL_STATE: TypingGame = {
  timer: 10,
  text: '',
  score: 0,
  hasStarted: false
};

export const decrementTimerAction = (): DecrementTimerAction => ({
  type: TypingGameTypes.DECREMENT_TIMER
});

export const saveTextAction = (text: string): SaveTextAction => ({
  type: TypingGameTypes.SAVE_TEXT,
  payload: {
    text
  }
});

export const saveScoreAction = (score: number): SaveScoreAction => ({
  type: TypingGameTypes.SAVE_SCORE,
  payload: {
    score
  }
});

export const setStartedtAction = (): SetStartedtAction => ({
  type: TypingGameTypes.SET_STARTED
});

export const restartAction = (): RestartAction => ({
  type: TypingGameTypes.RESTART
});

export const typingGameReducer = (
  state: TypingGame = INITIAL_STATE,
  action: TypingGameActions
): TypingGame => {
  switch (action.type) {
    case TypingGameTypes.DECREMENT_TIMER:
      return {
        ...state,
        timer: +(state.timer - 0.1).toFixed(1)
      };

    case TypingGameTypes.SAVE_TEXT:
      return {
        ...state,
        text: action.payload.text
      };

    case TypingGameTypes.SAVE_SCORE:
      return {
        ...state,
        score: action.payload.score
      };

    case TypingGameTypes.SET_STARTED:
      return {
        ...state,
        hasStarted: true
      };

    case TypingGameTypes.RESTART:
      return { ...INITIAL_STATE };

    default:
      return state;
  }
};
