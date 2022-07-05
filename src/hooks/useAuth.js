import {useContext, useMemo, useCallback} from 'react';
import {MyContext} from '../provider';
import {Actions} from '../navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
const useAuth = () => {
  const [, dispatch] = useContext(MyContext);
  const getLogin = useCallback(
    async ({username, password}) => {
      try {
        if (username === 'User1' && password === '123') {
          dispatch({
            type: 'LOGIN_SUCCEEDED',
            payload: {accessToken: 'accessToken'},
          });
          await AsyncStorage.setItem('accessToken', 'accessToken');
          Actions.Dashboard();
        } else {
          dispatch({
            type: LOGIN_FAILED,
            payload: {error: 'Please check username and password'},
          });
        }
      } catch (error) {
        dispatch({
          type: LOGIN_FAILED,
          payload: {error: 'Please check username and password'},
        });
      }
    },
    [dispatch],
  );
  return useMemo(
    () => ({
      getLogin,
    }),
    [getLogin],
  );
};

export default useAuth;
