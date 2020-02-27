import React, { useState } from 'react'
import { func } from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as FormCreators } from '../../actions/form'
import Input from '../input'
import { Wrapper } from '../styles'

export const Form = ({ saveForm, saveField }) => {
  const [textArray, setTextArray] = useState([])

  const handleText = (e, textId) => {
    const filteredTextArray = textArray.filter(obj => obj.id !== textId)

    setTextArray([
      ...filteredTextArray,
      {
        id: textId,
        text: e.target.value
      }
    ])
  }

  const handleSubmitAll = () => {
    saveForm(textArray)
  }

  const handleSubmitField = id => {
    const arrayElement = textArray.filter(textData => textData.id === id)

    saveField({
      id,
      text: arrayElement[0] ? arrayElement[0].text : ''
    })
  }

  return (
    <Wrapper>
      <Input
        title="Text1"
        onChange={e => handleText(e, '1')}
        onClick={() => handleSubmitField('1')}
      />
      <Input
        title="Text2"
        onChange={e => handleText(e, '2')}
        onClick={() => handleSubmitField('2')}
      />
      <Input
        title="Text3"
        onChange={e => handleText(e, '3')}
        onClick={() => handleSubmitField('3')}
      />
      <br />
      <button onClick={handleSubmitAll}>Submit all</button>
    </Wrapper>
  )
}

export const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...FormCreators }, dispatch)

Form.propTypes = {
  saveForm: func,
  saveField: func
}

export default connect(null, mapDispatchToProps)(Form)
