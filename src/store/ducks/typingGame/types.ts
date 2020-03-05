export interface TypingGame {
  readonly timer: number;
  readonly text: string;
  readonly score: number;
  readonly hasStarted: boolean;
}

export enum TypingGameTypes {
  DECREMENT_TIMER = 'DECREMENT_TIMER',
  SAVE_TEXT = 'SAVE_TEXT',
  SAVE_SCORE = 'SAVE_SCORE',
  SET_STARTED = 'SET_STARTED',
  RESTART = 'RESTART'
}

export interface DecrementTimerAction {
  type: TypingGameTypes.DECREMENT_TIMER;
}

export interface SaveTextAction {
  type: TypingGameTypes.SAVE_TEXT;
  payload: {
    text: string;
  };
}

export interface SaveScoreAction {
  type: TypingGameTypes.SAVE_SCORE;
  payload: {
    score: number;
  };
}

export interface SetStartedtAction {
  type: TypingGameTypes.SET_STARTED;
}

export interface RestartAction {
  type: TypingGameTypes.RESTART;
}

export type TypingGameActions =
  | DecrementTimerAction
  | SaveTextAction
  | SaveScoreAction
  | SetStartedtAction
  | RestartAction;
