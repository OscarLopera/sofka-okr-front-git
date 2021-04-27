import React from 'react';
import Modal from 'react-modal';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import OkrFinish from './OkrFinish'
import sinon from 'sinon'

configure({ adapter: new Adapter() });

it('show content of modal', ()=>{
    const spy  = sinon.spy();
    const wrapper = shallow(<OkrFinish onTest={spy}></OkrFinish>)
    console.log(wrapper.debug())
    expect(spy.called)
})

it('renders react-modal', () => {
    const wrapper = shallow(<OkrFinish />);
    expect(wrapper.find(Modal)).toHaveLength(1);
});

it('opens modal when button is clicked', () => {
    const wrapper = shallow(<OkrFinish />);
    expect(wrapper.find(Modal).prop('isOpen')).toBe(false);
    wrapper.find('button').simulate('click');
    expect(wrapper.find(Modal).prop('isOpen')).toBe(true);
});

it('renders childen when modal is open', () => {
    const wrapper = shallow(<OkrFinish>modal content</OkrFinish>);
    //expect(wrapper.find(Modal).prop('children')).toBe();
    expect(wrapper.find(Modal).prop('children')).toMatchSnapshot();
});