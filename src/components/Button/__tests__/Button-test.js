import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../Button';

const buttonProps = {
  title: 'button',
  textColor: '#333',
  disable: false,
  isLoading: false,
  onPress: () => {},
};
test('render button', () => {
  const tree = renderer.create(<Button {...buttonProps} />).toJSON();
  expect(tree).toMatchSnapshot();
});
