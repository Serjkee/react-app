import React from 'react'
import OneFilmCard from '../components/OneFilmCard/OneFilmCard'

describe('Tests OneFilmCard component', () => {
  it('Matching snapshot', () => {
    const component = shallow(<OneFilmCard />)

    expect(component).toMatchSnapshot();
  })
})
