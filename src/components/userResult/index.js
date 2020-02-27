import React from 'react'
import { connect } from 'react-redux'
import { shape, string } from 'prop-types'
import { Wrapper } from '../styles'

export const UserResult = ({ user }) => (
  <Wrapper>
    <h5>{`Name: ${user.firstName} ${user.lastName}`}</h5>
    <h5>{`Age: ${user.age}`}</h5>
  </Wrapper>
)

export const mapStateToProps = state => {
  return {
    user: {
      firstName: state.user.firstName,
      lastName: state.user.lastName,
      age: state.user.age
    }
  }
}

UserResult.propTypes = {
  user: shape({
    firstName: string,
    lastName: string,
    age: string
  })
}

export default connect(mapStateToProps, null)(UserResult)
