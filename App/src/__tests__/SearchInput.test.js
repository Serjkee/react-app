import React from 'react'
import SearchInput from '../components/Search/SearchInput/SearchInput'

describe('Tests SearchInput component', () => {
  it('Matching snapshot', () => {
    const component = shallow(<SearchInput />)

    expect(component).toMatchSnapshot();
  })
})
