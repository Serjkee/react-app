import React from 'react'
import SearchButton from '../components/Search/SearchButton/SearchButton'

describe('Tests SearchButton component', () => {
  it('Matching snapshot', () => {
    const component = shallow(<SearchButton />)

    expect(component).toMatchSnapshot();
  })
})
