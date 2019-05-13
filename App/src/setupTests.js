import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, render, mount } from 'enzyme';
global.shallow = shallow;
global.render = render;
global.mount = mount;

console.error = message => {
  throw new Error(message);
};

configure({ adapter: new Adapter() });