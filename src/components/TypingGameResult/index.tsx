import React from 'react';
import { connect } from 'react-redux';

import { StoreState } from '../../store/ducks';
import { Container } from '../../styles';

interface TypingGameResultProps {
  score: number;
}

const TypingGameResult: React.FC<TypingGameResultProps> = ({ score }) => (
  <Container>{<h5>{`Score: ${score}`}</h5>}</Container>
);

export const mapStateToProps = (state: StoreState) => {
  return {
    score: state.typingGame.score
  };
};

export default connect(mapStateToProps)(TypingGameResult);
