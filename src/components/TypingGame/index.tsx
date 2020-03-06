import React from 'react';
import { connect } from 'react-redux';

import { StoreState } from '../../store/ducks';
import {
  decrementTimerAction,
  saveTextAction,
  saveScoreAction,
  setStartedtAction,
  restartAction
} from '../../store/ducks/typingGame';
import { Container } from '../../styles';

export const SAMPLE_TEXT =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit';

export interface TypingGame {
  timer: number;
  text: string;
  score: number;
  hasStarted: boolean;
  decrementTimer: typeof decrementTimerAction;
  saveText: typeof saveTextAction;
  saveScore: typeof saveScoreAction;
  setStarted: typeof setStartedtAction;
  restart: typeof restartAction;
}

export const TypingGame: React.FC<TypingGame> = ({
  timer,
  text,
  score,
  hasStarted,
  decrementTimer,
  saveText,
  saveScore,
  setStarted,
  restart
}) => {
  React.useEffect(() => {
    if (timer === 0) {
      saveScore(
        Array.from(text).reduce((score, char, index) => {
          return SAMPLE_TEXT[index] === char ? score + 1 : score;
        }, 0)
      );
    }
  }, [text, timer, saveScore]);

  const playGame = async () => {
    setStarted();

    for (let i = 0; i < 100; i++) {
      await countdown<typeof decrementTimer>(decrementTimer, 100);
    }
  };

  const endGame = () => {
    const resultMessage = generateResultMessage();

    return (
      <>
        <h4>{resultMessage}</h4>
        <button onClick={restartGame}>Reset timer</button>
      </>
    );
  };

  const restartGame = () => {
    restart();
    saveText('');
  };

  const countdown = <T extends Function>(callback: T, milliseconds: number) => {
    return new Promise(resolve => {
      setTimeout(() => {
        callback();
        resolve();
      }, milliseconds);
    });
  };

  const generateResultMessage = (): string => {
    if (score === SAMPLE_TEXT.length) {
      return 'Well done!';
    }

    return 'Try again!';
  };

  const handleKeyUp = async () => {
    if (hasStarted) {
      return;
    }

    playGame();
  };

  const handleTextArea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    saveText(event.target.value);
  };

  return (
    <Container>
      <h5>{SAMPLE_TEXT}</h5>
      <textarea
        value={text}
        readOnly={timer === 0}
        rows={10}
        cols={35}
        onChange={event => handleTextArea(event)}
        onKeyUp={handleKeyUp}
      />
      <h3>{`You have ${timer} seconds`}</h3>

      {timer === 0 && endGame()}
    </Container>
  );
};

export const mapStateToProps = ({ typingGame }: StoreState) => {
  return {
    ...typingGame
  };
};

export default connect(mapStateToProps, {
  decrementTimer: decrementTimerAction,
  saveText: saveTextAction,
  saveScore: saveScoreAction,
  setStarted: setStartedtAction,
  restart: restartAction
})(TypingGame);
