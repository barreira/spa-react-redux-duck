import React from 'react'
import Form from '../../components/form'
import User from '../../components/user'
import FormResult from '../../components/formResult'
import UserResult from '../../components/userResult'
import TypingGame from '../../components/typingGame'
import TypingGameResult from '../../components/typingGameResult'
import { Wrapper, Container } from './styles'

const Main = () => (
  <Wrapper>
    <Form />
    <TypingGame />
    <Container>
      <User />
      <FormResult />
      <UserResult />
      <TypingGameResult />
    </Container>
  </Wrapper>
)

export default Main
