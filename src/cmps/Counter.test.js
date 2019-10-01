import { shallow, mount, render } from 'enzyme';
import Counter from './Counter';

describe('<MyComponent />', () => {
  it('renders three <Counter /> components', () => {
    const wrapper = shallow(<MyComponent />);
    console.log('3333333333333333333 ',wrapper)
    expect(wrapper.find(Counter)).to.have.lengthOf(3);
  })
})
