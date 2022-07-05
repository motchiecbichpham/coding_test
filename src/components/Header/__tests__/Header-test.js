import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../Header';

const headerProps = {
  title: 'header',
};
test('render header', () => {
  const tree = renderer.create(<Header {...headerProps} />).toJSON();
  expect(tree).toMatchSnapshot();
});
