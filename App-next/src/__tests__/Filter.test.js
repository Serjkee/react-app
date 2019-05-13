import React from 'react'
import Filter from '../components/Search/SearchFilters/Filter/Filter'

describe('Tests Filter component', () => {
  it('Matching snapshot', () => {
    const component = shallow(<Filter />)

    expect(component).toMatchSnapshot();
  })
})
