import React from 'react'
import Search from '../components/Search/Search'

describe('Tests Search component', () => {
  it('Matching snapshot', () => {
    const component = shallow(<Search />)

    expect(component).toMatchSnapshot();
  })

  it('Checking submit event', () => {
    const component = mount(<Search />)

    component.find('form').simulate('submit')
    expect(component.state().clicked).toEqual('event fired')
  })
})
