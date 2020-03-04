import * as React from 'react';

import User from '../components/User';
import Form from '../components/Form';
import FormResult from '../components/FormResult';
import { UserResult } from '../components/UserResult';
import TypingGame from '../components/TypingGame';
import TypingGameResult from '../components/TypingGameResult';
import { Wrapper, Container } from './styles';

export default class Main extends React.Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <h1>Form</h1>
          <Form />
          <FormResult />
        </Container>

        <Container>
          <h1>Typing Game</h1>
          <TypingGame />
          <TypingGameResult />
        </Container>

        <Container>
          <h1>Add User</h1>
          <User />
          <h1>Users</h1>
          <UserResult />
        </Container>
      </Wrapper>
    );
  }
}
