import React from 'react';
import Modal from 'react-modal';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import ModalBell from './ModalBell'
import sinon from 'sinon'

configure({ adapter: new Adapter() });

it('show content of modal', () => {
    const spy = sinon.spy();
    const wrapper = shallow(<ModalBell onTest={spy}></ModalBell>)
    expect(spy.called)
    wrapper.unmount();
})

it('renders react-modal', () => {
    const wrapper = shallow(<ModalBell />);
    expect(wrapper.find(Modal)).toHaveLength(0);
});


