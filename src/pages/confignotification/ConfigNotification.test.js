import React from 'react';
import { shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import ConfigNotification from './ConfigNotification';
import sinon from 'sinon'

it('show content of page', ()=>{
    const spy  = sinon.spy();
    const wrapper = shallow(<ConfigNotification onTest={spy}></ConfigNotification>)
    console.log(wrapper.debug())
    expect(spy.called)
    wrapper.unmount();
})
