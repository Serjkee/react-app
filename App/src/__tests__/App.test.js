import React from 'react';
import App from '../App';

describe('App', () => {
  it('Adds App snapshot testing', () => {
    const component = shallow(<App />);
  
    expect(component).toMatchSnapshot();
  });
});