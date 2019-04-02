import React from 'react'
import CardItem from '../components/CardSection/CardItem'

describe('Test CardItem component', () => {
  it('Matching snapshot', () => {
    const component = shallow(<CardItem />);

    expect(component).toMatchSnapshot();
  })
})
