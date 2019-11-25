/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */

import App from './src/App';

describe('<App /> rendering', () => {
  it('should render', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toHaveLength(1);
  });
});
