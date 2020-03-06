import * as React from 'react';
import { mount } from 'enzyme';
import Input from '..';

describe('Input', () => {
  it('Renders Input', () => {
    const input = mount(
      <Input title="Input field" onChange={() => null} value="10" />
    );
    expect(input).toMatchSnapshot();
  });
});
