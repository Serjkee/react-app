import React from 'react'
import Header from '../containers/Header/Header'

describe('Tests Header container', () => {
  it('Matching snapshot', () => {
    const container = shallow(<Header />)

    expect(container).toMatchSnapshot();
  })
})
