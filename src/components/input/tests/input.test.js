import React from 'react'
import { shallow } from 'enzyme'
import { Input } from '../../input'

describe('Input component', () => {
  let wrapper, props

  beforeEach(() => {
    props = {
      title: 'Title of the Input',
      onChange: () => {},
      onBlur: () => {},
      onClick: () => {}
    }

    wrapper = shallow(
      <Input
        title={props.title}
        onChange={props.onChange}
        onBlur={props.onBlur}
        onClick={props.onClick}
      />
    )
  })

  it('renders all its components', () => {
    const h3 = wrapper.find('h3')
    const input = wrapper.find('input')
    const button = wrapper.find('button')

    expect(h3).toHaveLength(1)
    expect(input).toHaveLength(1)
    expect(button).toHaveLength(1)
  })

  it('renders the correct text inside the h3 component', () => {
    const h3 = wrapper.find('h3')

    expect(h3.text()).toMatch(props.title)
  })
})
