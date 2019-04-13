import React from 'react'
import Search from '../components/Search/Search'

describe('Tests Search component', () => {
  it('Matching snapshot', () => {
    const component = shallow(<Search />)

    expect(component).toMatchSnapshot();
  })
})
