import React from 'react';
import renderer from 'react-test-renderer';
import ChallengeCard from '../ChallengeCard';
const challengeProps = {
  id: 1,
  title: 'Advanced Health Screening',
  description: 'Earn up to <b>{{num}}</b> pts',
  image: require('../../../asset/challenge1.jpeg'),
  point: 99999,
};
const challengePropsWithoutPoint = {
  id: 1,
  title: 'Advanced Health Screening',
  description: 'Earn up to <b>{{num}}</b> pts',
  image: require('../../../asset/challenge1.jpeg'),
};
test('renders with point = 99999', () => {
  const tree = renderer
    .create(<ChallengeCard props={challengeProps} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
test('renders without point', () => {
  const tree = renderer
    .create(<ChallengeCard props={challengePropsWithoutPoint} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
