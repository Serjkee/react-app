import React from 'react'
import SortBy from '../components/SortingSection/SortBy/SortBy'

describe('Tests SortBy component', () => {
  it('Matching snapshot', () => {
    const component = shallow(<SortBy />)

    expect(component).toMatchSnapshot();
  })
})
