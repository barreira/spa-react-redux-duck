import React from 'react'
import { connect } from 'react-redux'
import { arrayOf, shape, string } from 'prop-types'
import { Wrapper } from '../styles'

export const FormResult = ({ data }) => {
  const sortArrayById = arr => {
    return [...arr].sort((a, b) => {
      return parseInt(a.id) - parseInt(b.id)
    })
  }

  return (
    <Wrapper>
      {sortArrayById(data).map(textData => (
        <h4 key={textData.id}>{textData.text}</h4>
      ))}
    </Wrapper>
  )
}

export const mapStateToProps = state => {
  return {
    data: state.form.data
  }
}

FormResult.propTypes = {
  data: arrayOf(
    shape({
      id: string,
      text: string
    })
  )
}

export default connect(mapStateToProps, null)(FormResult)
