import React from 'react'
import MoviesFound from '../components/SortingSection/MoviesFound/MoviesFound'

describe('Tests MoviesFound component', () => {
  it('Matching snapshot', () => {
    const component = shallow(<MoviesFound />)

    expect(component).toMatchSnapshot();
  })
})
