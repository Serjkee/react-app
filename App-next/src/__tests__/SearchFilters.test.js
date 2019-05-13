import React from 'react'
import SearchFilters from '../components/Search/SearchFilters/SearchFilters'

describe('Tests SearchFilters component', () => {
  it('Matching snapshot', () => {
    const component = shallow(<SearchFilters />)

    expect(component).toMatchSnapshot();
  })
})
