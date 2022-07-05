import React from 'react';
import renderer from 'react-test-renderer';
import AssessmentCard from '../AssessmentCard';
const assessmentProps = {
  id: 1,
  title: 'Advanced Health Screening',
  description: 'Earn up to <b>{{num}}</b> pts',
  image: require('../../../asset/assessment1.jpeg'),
  point: 99999,
};
const assessmentPropsWithoutPoint = {
  id: 1,
  title: 'Advanced Health Screening',
  description: 'Earn up to <b>{{num}}</b> pts',
  image: require('../../../asset/assessment1.jpeg'),
};
test('renders with point = 99999', () => {
  const tree = renderer
    .create(<AssessmentCard props={assessmentProps} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
test('renders without point', () => {
  const tree = renderer
    .create(<AssessmentCard props={assessmentPropsWithoutPoint} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
