import React from 'react';
import renderer from 'react-test-renderer';
import LoginModal from '../LoginModal';

const loginModalProps = {
  onClose: () => {},
  onSubmit: () => {},
};
test('render login modal', () => {
  const tree = renderer.create(<LoginModal {...loginModalProps} />).toJSON();
  expect(tree).toMatchSnapshot();
});
