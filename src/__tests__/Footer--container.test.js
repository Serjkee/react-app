import React from 'react'
import Footer from '../containers/Footer/Footer'

describe('Tests Footer container', () => {
  it('Matching snapshot', () => {
    const container = shallow(<Footer />)

    expect(container).toMatchSnapshot();
  })
})
