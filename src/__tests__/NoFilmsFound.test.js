import React from 'react'
import NoFilmsFound from '../components/NoFilmsFound/NoFilmsFound'

describe('Tests NoFilmsFound component', () => {
  it('Matching snapshot', () => {
    const component = shallow(<NoFilmsFound />);

    expect(component).toMatchSnapshot();
  })
})
