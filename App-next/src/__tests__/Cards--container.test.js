import React from 'react'
import Cards from '../containers/Cards/Cards'

describe('Tests Cards container', () => {
  it('Matching snapshot', () => {
    const container = shallow(<Cards />)

    expect(container).toMatchSnapshot();
  })
})
