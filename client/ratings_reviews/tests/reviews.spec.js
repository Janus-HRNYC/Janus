import React from 'react';
import { shallow, mount } from 'enzyme';
import TextFieldForm from '../form_components/TextFieldForm.jsx';
import StarRating from '../StarRating.jsx';

describe('Reviews: TextFieldForm', () => {
  test('it should display the TextField form', () => {
    const wrapper = mount(
      <TextFieldForm type={'summary'} value={'summary'} error={false} />
    );
    expect(wrapper.props().value).toEqual('summary');
    wrapper.setProps({ value: 'body' });
    expect(wrapper.props().value).toEqual('body');
  });
});

describe('Reviews: Star Rating', () => {
  test('it should display the Start Rating', () => {
    const wrapper = mount(<StarRating star={5} size={'large'} update={true} />);
    expect(wrapper.props().star).toEqual(5);
    wrapper.setProps({ star: 1 });
    expect(wrapper.props().star).toEqual(1);
  });
});
