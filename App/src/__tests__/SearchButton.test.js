import React from 'react'
import SearchButton from '../components/Search/SearchButton/SearchButton'

describe('Tests SearchButton component', () => {
  it('Matching snapshot', () => {
    const component = shallow(<SearchButton />)

    expect(component).toMatchSnapshot();
  })

  it('Passing filter string as buttonClass and receiving search-button class', () => {
    const component = mount(<SearchButton buttonClass='filter' />)

    expect(component.find('button').props().className).toEqual('search-button');
  })

  it('Renders button text that we pass in buttonText', () => {
    const component = mount(<SearchButton buttonText='hey' />)

    expect(component.find('button').props().children).toEqual('hey');
  })
})
