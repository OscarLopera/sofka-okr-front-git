import React from 'react';
import { shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ConfigNotification from './ConfigNotification';
import sinon from 'sinon'

configure({ adapter: new Adapter() });

it('show content of page', ()=>{
    const spy  = sinon.spy();
    const wrapper = shallow(<ConfigNotification onTest={spy}></ConfigNotification>)
    expect(spy.called)
    wrapper.unmount();
})
