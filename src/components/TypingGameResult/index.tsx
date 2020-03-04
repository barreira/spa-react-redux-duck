import React from 'react';
import { connect } from 'react-redux';

import { Wrapper } from '../styles';

export const TypingGameResult: React.FC<{}> = () => (
  <Wrapper>TypingGameResult score: 1092 credits</Wrapper>
);

export default connect(() => ({}), null)(TypingGameResult);
