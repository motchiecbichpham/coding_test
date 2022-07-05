import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {Actions} from '.';
import helpers from './helpers';
import DashboardPage from '../pages/dashboard/DashboardPage';
export const navigationRef = React.createRef({});
export const isReadyRef = React.createRef();
const Root = createStackNavigator();
const commonScreenOptions = {
  headerShown: false,
  gestureEnabled: false,
  cardStyle: {
    backgroundColor: 'transparent',
  },
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};
const fadeAnimation = {
  cardStyleInterpolator: ({current: {progress}}) => ({
    cardStyle: {
      opacity: progress.interpolate({
        inputRange: [0, 0.5, 0.9, 1],
        outputRange: [0, 0.25, 0.7, 1],
      }),
    },
    overlayStyle: {
      opacity: progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0.5],
        extrapolate: 'clamp',
      }),
    },
  }),
};

function Navigation(props) {
  const {mainRoutes} = require('./routes');
  assignHelpersToActions();
  assignActions(mainRoutes);

  return (
    <>
      <NavigationContainer
        ref={navigationRef}
        onReady={() => (isReadyRef.current = true)}>
        {rootNavigator()}
      </NavigationContainer>
    </>
  );

  function rootNavigator() {
    return (
      <Root.Navigator mode="modal" screenOptions={commonScreenOptions}>
        <Root.Screen name="DashboardPage" component={DashboardPage} />
        {renderScreens(mainRoutes, Root)}
      </Root.Navigator>
    );
  }

  function renderScreens(routes, navigator) {
    return routes.map(({name, component, options}) => {
      return (
        <navigator.Screen
          key={name}
          name={name}
          children={() => wrappedComponent(component)}
          options={options}
        />
      );
    });
  }

  function wrappedComponent(Component) {
    let currentRoute =
      navigationRef.current && navigationRef.current.getCurrentRoute();
    let navParams = currentRoute && currentRoute.params;
    return <Component {...navParams} />;
  }

  function assignHelpersToActions() {
    for (let action in helpers) {
      Actions[action] = helpers[action];
    }
  }

  function assignActions(routes) {
    for (let route of routes) {
      Actions[route.name] = params => {
        Actions.navigate(route.name, params);
      };
    }
  }
}

export default Navigation;
