import {COLORS} from './colors';
export const DEFAULT_ICON = {
  color: COLORS.lightPink,
  name: 'arrow-forward',
  size: 24,
};
export const defaultLoginModalProps = {
  usernameTitle: 'Username',
  usernamePlaceholder: 'Enter your username',
  passwordTitle: 'Password',
  passwordPlaceholder: 'Enter your password',
  buttonTitle: 'Login',
};
export const defaultAssessmentCards = {
  title: 'Assessments',
  data: [
    {
      id: 1,
      title: 'Advanced Health Screening',
      description: 'Earn up to <b>{{num}}</b> pts',
      image: require('../asset/assessment1.jpeg'),
      point: 1000,
    },
    {
      id: 2,
      title: 'Advanced Health Screening',
      description: 'Earn up to <b>{{num}}</b> pts',
      image: require('../asset/assessment2.jpeg'),
      point: 1000,
    },
    {
      id: 3,
      title: 'Advanced Health Screening',
      description: 'Earn up to <b>{{num}}</b> pts',
      image: require('../asset/assessment3.jpeg'),
      point: 1000,
    },
  ],
};
export const defaultChallengeCards = {
  title: 'Challenges',
  data: [
    {
      id: 1,
      title: 'Say no to sugar',
      subTitle: '6 day left',
      description: 'Earn up to <b>{{num}}</b> pts',
      image: require('../asset/challenge1.jpeg'),
      point: 1000,
    },
    {
      id: 2,
      title: '5km challenge',
      description: 'Earn up to <b>{{num}}</b> pts',
      image: require('../asset/challenge2.jpeg'),
      point: 1000,
    },
    {
      id: 3,
      title: 'Advanced Health Screening',
      subTitle: '6 day left',
      description: 'Earn up to <b>{{num}}</b> pts',
      image: require('../asset/challenge3.jpeg'),
      point: 1000,
    },
  ],
};
export const defaultHeaderTitle = 'Dashboard';
