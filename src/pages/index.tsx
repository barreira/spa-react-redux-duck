import * as React from 'react';

import UserForm from '../components/UserForm';
import UsersList from '../components/UsersList';
import TypingGame from '../components/TypingGame';
import TypingGameResult from '../components/TypingGameResult';
import { Wrapper, Container } from '../styles';

export default class Main extends React.Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <h1>Typing Game</h1>
          <TypingGame />
          <TypingGameResult />
        </Container>

        <Container>
          <h1>Add User</h1>
          <UserForm />
        </Container>

        <Container>
          <h1>Users</h1>
          <UsersList />
        </Container>
      </Wrapper>
    );
  }
}
