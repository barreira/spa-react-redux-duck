import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { bool, func, number, string } from 'prop-types'
import { Creators as TypingGameCreators } from '../../actions/typingGame'
import { SAMPLE_TEXT } from '../../constants'
import { Wrapper } from '../styles'

export const TypingGame = ({
  timer,
  text,
  score,
  hasStarted,
  userName,
  decrementTimer,
  saveText,
  saveScore,
  setStarted,
  restart
}) => {
  const playGame = async () => {
    setStarted(true)

    for (let i = 0; i < 10; i++) {
      await countdown(decrementTimer, 1000)
    }
  }

  const endGame = () => {
    const finalScore = calculateScore()
    saveScore(finalScore)

    const resultMessage = generateResultMessage()

    return (
      <>
        <h4>{resultMessage}</h4>
        <button onClick={restartGame}>Reset timer</button>
      </>
    )
  }

  const restartGame = () => {
    restart()
    saveText('')
  }

  const countdown = (callback, milliseconds) => {
    return new Promise(resolve => {
      setTimeout(() => {
        callback()
        resolve()
      }, milliseconds)
    })
  }

  const calculateScore = () => {
    let score = 0

    Array.from(text).forEach((c, index) => {
      if (SAMPLE_TEXT[index] === c) {
        score++
      }
    })

    return score
  }

  const generateResultMessage = () => {
    if (score === SAMPLE_TEXT.length) {
      return userName ? `Well done, ${userName}!` : 'Well done!'
    }

    return userName ? `Try again, ${userName}!` : 'Try again!'
  }

  const handleKeyUp = async () => {
    if (hasStarted) {
      return
    }

    playGame()
  }

  const handleTextArea = e => {
    saveText(e.target.value)
  }

  return (
    <Wrapper>
      <h5>{SAMPLE_TEXT}</h5>
      <textarea
        value={text}
        readOnly={timer === 0}
        rows={10}
        cols={35}
        onChange={e => handleTextArea(e)}
        onKeyUp={handleKeyUp}
      />
      <h3>{`You have ${timer} seconds`}</h3>
      {timer === 0 && endGame()}
    </Wrapper>
  )
}

export const mapStateToProps = state => {
  return {
    timer: state.typingGame.timer,
    text: state.typingGame.text,
    score: state.typingGame.score,
    hasStarted: state.typingGame.hasStarted,
    userName: state.user.firstName
  }
}

export const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...TypingGameCreators }, dispatch)

TypingGame.propTypes = {
  timer: number,
  text: string,
  score: number,
  hasStarted: bool,
  userName: string,
  decrementTimer: func,
  saveText: func,
  saveScore: func,
  setStarted: func,
  restart: func
}

export default connect(mapStateToProps, mapDispatchToProps)(TypingGame)
