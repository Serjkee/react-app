import React from 'react'
import NetflixLogo from '../components/NetflixLogo/NetflixLogo'

describe('Tests NetflixLogo component', () => {
  it('Matching snapshot', () => {
    const component = shallow(<NetflixLogo />);

    expect(component).toMatchSnapshot();
  })
})
