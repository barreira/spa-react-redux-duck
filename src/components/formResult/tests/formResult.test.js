import React from 'react'
import { shallow } from 'enzyme'
import { initialState } from '../../../reducers/form'
import { FormResult } from '../../formResult'
import { mapStateToProps } from '../../formResult'

describe('FormResult component', () => {
  let wrapper, state

  beforeEach(() => {
    state = initialState

    wrapper = shallow(<FormResult data={state.data} />)
  })

  it('should render a styled div component at the root', () => {
    expect(wrapper.name()).toMatch('styled.div')
  })

  describe("when there's no data", () => {
    beforeEach(() => {
      state = initialState

      wrapper = shallow(<FormResult data={state.data} />)
    })
    it("shouldn't render any h4's", () => {
      const h4s = wrapper.find('h4')

      expect(h4s).toHaveLength(0)
    })
  })

  describe('when the user has inserted some text', () => {
    let h4s

    beforeEach(() => {
      state = {
        data: [
          { id: '1', text: 'This is the first text' },
          { id: '2', text: 'This is the second text' },
          { id: '3', text: 'This is the third text' }
        ]
      }

      wrapper = shallow(<FormResult data={state.data} />)

      h4s = wrapper.find('h4')
    })
    it("should render an amount of h4's equal to the number of texts inserted", () => {
      expect(h4s).toHaveLength(state.data.length)
    })

    it("the text of the h4's should correspond to text in the state (in the same order)", () => {
      for (let i = 0; i < state.data.length; i++) {
        const h4text = h4s.at(i).text()

        expect(h4text).toMatch(state.data[i].text)
      }
    })
  })

  describe('#mapStateToProps', () => {
    let state

    beforeEach(() => {
      state = {
        form: {
          data: [
            {
              id: '1',
              text: 'This is a text'
            },
            {
              id: '2',
              text: 'This is another text'
            }
          ]
        }
      }
    })

    it('should return state with data and its two elements', () => {
      expect(mapStateToProps(state).data).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: state.form.data[0].id,
            text: state.form.data[0].text
          })
        ])
      )

      expect(mapStateToProps(state).data).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: state.form.data[1].id,
            text: state.form.data[1].text
          })
        ])
      )
    })
  })
})
