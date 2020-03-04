import React from 'react';
import { connect } from 'react-redux';

import { Wrapper } from '../styles';

export const TypingGame: React.FC<{}> = () => <Wrapper>Typing</Wrapper>;

export default connect(() => ({}), null)(TypingGame);
