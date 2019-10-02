// import { shallow, mount, render } from 'enzyme';
// import Counter from './Counter';


// describe('<MyComponent />', () => {
//   it('renders three <Counter /> components', () => {
//     const wrapper = shallow(<MyComponent />);
//     console.log('3333333333333333333 ',wrapper)
//     expect(wrapper.find(Counter)).to.have.lengthOf(3);
//   })
// })

import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Counter from './Counter'

Enzyme.configure({ adapter: new Adapter() })

function setup() {
  const enzymeWrapper = shallow(<Counter />)
  return {
    enzymeWrapper
  }
}

describe('components', () => {
  describe('Counter', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup()

      expect(enzymeWrapper.find('div').hasClass('counter')).toBe(true)

      expect(enzymeWrapper.find('h3').text()).toBe(0)

    })
  })
})