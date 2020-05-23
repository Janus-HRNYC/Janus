import React from 'react';
import { shallow, mount } from 'enzyme';
import TextFieldForm from '../form_components/TextFieldForm.jsx';

describe('Reviews: TextFieldForm', () => {
  test('it should display the TextField form', () => {
    const wrapper = shallow(
      <TextFieldForm type={'summary'} value={'summary'} error={false} />
    );
    expect(wrapper.exists()).toBe(true);
  });
});
