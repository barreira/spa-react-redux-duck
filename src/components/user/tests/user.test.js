import React from 'react'
import { shallow } from 'enzyme'
import { User } from '../../user'
import { mapDispatchToProps } from '../../user'
import { Creators as UserCreators } from '../../../actions/user'

describe('User component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<User saveUser={() => {}} />)
  })

  it('should render a styled div component at the root', () => {
    expect(wrapper.name()).toMatch('styled.div')
  })

  it('renders all the Input elements', () => {
    const inputs = wrapper.find('Input')

    expect(inputs).toHaveLength(3)
  })

  describe('#mapDispatchToProps', () => {
    let dispatch, props

    beforeEach(() => {
      dispatch = jest.fn()
      props = mapDispatchToProps(dispatch)
    })

    it('should dispatch saveUser', () => {
      props.saveUser()
      expect(dispatch).toHaveBeenCalledWith(UserCreators.saveUser())
    })
  })
})
