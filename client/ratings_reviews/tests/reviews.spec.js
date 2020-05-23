import React from 'react';
import { shallow, mount } from 'enzyme';
import TextFieldForm from '../form_components/TextFieldForm.jsx';
import Recommend from '../form_components/Recommend.jsx';
import RatingBreakdown from '../RatingBreakdown.jsx';
import StarRating from '../StarRating.jsx';
import RatingSummary from '../RatingSummary.jsx';

describe('Reviews: TextFieldForm', () => {
  test('it should display the TextField component', () => {
    const wrapper = mount(
      <TextFieldForm type={'summary'} value={'summary'} error={false} />
    );
    expect(wrapper.props().value).toEqual('summary');
    wrapper.setProps({ value: 'body' });
    expect(wrapper.props().value).toEqual('body');
  });
});

describe('Reviews: Star Rating', () => {
  test('it should display the Start Rating component', () => {
    const wrapper = mount(<StarRating star={5} size={'large'} update={true} />);
    expect(wrapper.props().star).toEqual(5);
    wrapper.setProps({ star: 1 });
    expect(wrapper.props().star).toEqual(1);
  });
});

describe('Reviews: Recommend', () => {
  test('it should display the Recommend component', () => {
    const wrapper = mount(<Recommend value={5} />);
    expect(wrapper.props().value).toEqual(5);
    wrapper.setProps({ value: 2 });
    expect(wrapper.props().value).toEqual(2);
  });
});

describe('Reviews: Rating Breakdown', () => {
  test('it should display the RatingBreakdown component', () => {
    const wrapper = mount(<RatingBreakdown rating={5} ratingValue={50} />);
    expect(wrapper.props().rating).toEqual(5);
    wrapper.setProps({ rating: 1 });
    expect(wrapper.props().rating).toEqual(1);
  });
});

describe('Reviews: Rating Summary', () => {
  test('it should display the Rating Summary component', () => {
    const wrapper = mount(
      <RatingSummary ratings={{ 1: '1' }} recommended={{ 1: '1' }} />
    );
    expect(wrapper.props().ratings).toEqual({ 1: '1' });
    wrapper.setProps({ ratings: { 2: '1' } });
    expect(wrapper.props().ratings).toEqual({ 2: '1' });
  });
});
