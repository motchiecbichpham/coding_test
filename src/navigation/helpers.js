import {navigationRef, isReadyRef} from './Navigation';

function isRefReady() {
  return navigationRef.current && isReadyRef.current;
}

const helpers = {
  navigate: (routeName, params) => {
    if (!isRefReady()) {
      return;
    }
    if (params && params.constructor && params.constructor.name === 'Class') {
      params = undefined;
    }
    setTimeout(
      () =>
        navigationRef.current &&
        navigationRef.current.navigate(routeName, params),
      10,
    );
  },
};

export default helpers;
