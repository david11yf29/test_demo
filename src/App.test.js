import { render, screen } from '@testing-library/react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import App from './App';

Enzyme.configure({ adapter: new Adapter() });

test('renders without crashing', () => {
  const wrapper = shallow(<App />);
  // console.log(wrapper.debug());
  expect(wrapper).toBeTruthy();
});
