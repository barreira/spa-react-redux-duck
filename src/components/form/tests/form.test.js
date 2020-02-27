import React from 'react'
import { shallow } from 'enzyme'
import { Form } from '../../form'
import Input from '../../input'
import { mapDispatchToProps } from '../../form'
import { Creators as FormCreators } from '../../../actions/form'

describe('Form component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Form saveForm={() => {}} saveField={() => {}} />)
  })

  it('should render a styled div component at the root', () => {
    const rootElementName = wrapper.name()

    expect(rootElementName).toMatch('styled.div')
  })

  it('should render three Input components with the correct title prop', () => {
    const inputs = wrapper.find(Input)

    expect(inputs).toHaveLength(3)

    for (let i = 0; i < 3; i++) {
      expect(inputs.at(i).props().title).toBe(`Text${i + 1}`)
    }
  })

  it('should render a button', () => {
    const button = wrapper.find('button')

    expect(button.exists()).toBe(true)
  })

  describe('#mapDispatchToProps', () => {
    let dispatch, props

    beforeEach(() => {
      dispatch = jest.fn()
      props = mapDispatchToProps(dispatch)
    })

    it('should dispatch saveForm', () => {
      props.saveForm()
      expect(dispatch).toHaveBeenCalledWith(FormCreators.saveForm())
    })
    it('should dispatch saveField', () => {
      props.saveField()
      expect(dispatch).toHaveBeenCalledWith(FormCreators.saveField())
    })
  })
})
