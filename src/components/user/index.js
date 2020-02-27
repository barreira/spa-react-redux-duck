import React, { useState } from 'react'
import { func } from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as UserCreators } from '../../actions/user'
import Input from '../input'
import { Wrapper } from '../styles'

export const User = ({ saveUser }) => {
  const [user, setUser] = useState()

  const handleUser = (e, field) => {
    const value = e.target.value

    switch (field) {
      case 'firstName':
        setUser({
          ...user,
          firstName: value
        })
        break
      case 'lastName':
        setUser({
          ...user,
          lastName: value
        })
        break
      case 'age':
        setUser({
          ...user,
          age: value
        })
        break
    }
  }

  const handleSubmit = field => {
    switch (field) {
      case 'firstName':
        saveUser({
          firstName: user.firstName
        })
        break
      case 'lastName':
        saveUser({
          lastName: user.lastName
        })
        break
      case 'age':
        saveUser({
          age: user.age
        })
        break
    }
  }

  return (
    <Wrapper>
      <Input
        onChange={e => handleUser(e, 'firstName')}
        onBlur={() => handleSubmit('firstName')}
        onClick={() => handleSubmit('firstName')}
      />
      <Input
        onChange={e => handleUser(e, 'lastName')}
        onBlur={() => handleSubmit('lastName')}
        onClick={() => handleSubmit('lastName')}
      />
      <Input
        onChange={e => handleUser(e, 'age')}
        onBlur={() => handleSubmit('age')}
        onClick={() => handleSubmit('age')}
      />
    </Wrapper>
  )
}

export const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...UserCreators }, dispatch)

User.propTypes = {
  saveUser: func
}

export default connect(null, mapDispatchToProps)(User)
