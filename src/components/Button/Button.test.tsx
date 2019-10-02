import React from 'react'
import { shallow, mount } from 'enzyme'
import Button from './Button'

describe('<Button/>', () => {
    it('renders correctly default', () => {
        const wrapper = shallow(<Button>Default Button</Button>)
        expect(wrapper).toMatchSnapshot()
    })
    it('renders correctly default with loading', () => {
        const wrapper = shallow(<Button isLoading>Default Button</Button>)
        expect(wrapper).toMatchSnapshot()
    })
    it('renders correctly default with size small', () => {
        const wrapper = shallow(<Button size='small'>Default Button Small</Button>)
        expect(wrapper).toMatchSnapshot()
    })
    it('renders correctly default with size medium', () => {
        const wrapper = shallow(<Button size='medium'>Default Button Medium</Button>)
        expect(wrapper).toMatchSnapshot()
    })
    it('renders correctly default with size large', () => {
        const wrapper = shallow(<Button size='large'>Default Button Large</Button>)
        expect(wrapper).toMatchSnapshot()
    })
    it('renders correctly primary', () => {
        const wrapper = shallow(<Button theme='primary'>Primary Button</Button>)
        expect(wrapper).toMatchSnapshot()
    })
    it('renders correctly primary with size small', () => {
        const wrapper = shallow(<Button theme='primary' size='small'>Primary Button Small</Button>)
        expect(wrapper).toMatchSnapshot()
    })
    it('renders correctly primary with size medium', () => {
        const wrapper = shallow(<Button theme='primary' size='medium'>Primary Button Medium</Button>)
        expect(wrapper).toMatchSnapshot()
    })
    it('renders correctly primary with size large', () => {
        const wrapper = shallow(<Button theme='primary' size='large'>Primary Button Large</Button>)
        expect(wrapper).toMatchSnapshot()
    })
    it('renders correctly secondary', () => {
        const wrapper = shallow(<Button theme='secondary'>Secondary Button</Button>)
        expect(wrapper).toMatchSnapshot()
    })
    it('renders correctly secondary with small', () => {
        const wrapper = shallow(<Button theme='secondary' size='small'>Secondary Button Small</Button>)
        expect(wrapper).toMatchSnapshot()
    })
    it('renders correctly secondary with medium', () => {
        const wrapper = shallow(<Button theme='secondary' size='medium'>Secondary Button Medium</Button>)
        expect(wrapper).toMatchSnapshot()
    })
    it('renders correctly secondary with large', () => {
        const wrapper = shallow(<Button theme='secondary' size='large'>Secondary Button Large</Button>)
        expect(wrapper).toMatchSnapshot()
    })
    it('button onclick work correct', () => {
        const fn = jest.fn()
        const wrapper = mount(<Button onClick={fn}>Default</Button>)
        wrapper.find('button').simulate('click')
        expect(fn).toHaveBeenCalled()
    })

})