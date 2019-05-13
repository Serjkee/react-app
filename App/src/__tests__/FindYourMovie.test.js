import React from 'react'
import FindYourMovie from '../components/Header/FindYourMovie/FindYourMovie'

describe('Tests FindYourMovie component', () => {
  it('Matching snapshot', () => {
    const component = shallow(<FindYourMovie />);

    expect(component).toMatchSnapshot();
  })
})
