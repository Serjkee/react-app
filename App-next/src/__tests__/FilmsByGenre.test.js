import React from 'react'
import FilmsByGenre from '../components/SortingSection/FilmsByGenre/FilmsByGenre'

describe('Tests FilmsByGenre component', () => {
  it('Matching snapshot', () => {
    const component = shallow(<FilmsByGenre />)

    expect(component).toMatchSnapshot();
  })
})
