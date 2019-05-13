import React from 'react'
import ErrorBoundary from '../utility/ErrorBoundary/ErrorBoundary'

describe('Tests ErrorBoundary container', () => {
  it('Matching snapshot', () => {
    const container = shallow(<ErrorBoundary />)

    expect(container).toMatchSnapshot();
  })
})
