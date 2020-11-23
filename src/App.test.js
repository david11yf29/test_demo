import { render, screen } from '@testing-library/react';
import Enzyme, { EnzymeAdapter } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders learn react link', () => {
  
});
