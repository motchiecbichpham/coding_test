import {useMemo, useCallback} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Actions} from '../navigation';

const useDashboard = () => {
  const fetchData = useCallback(async () => {
    try {
      const accessToken = await AsyncStorage.getItem('accessToken');
      if (!accessToken) {
        Actions.Login();
      }
    } catch (error) {}
  }, []);
  return useMemo(
    () => ({
      fetchData,
    }),
    [fetchData],
  );
};

export default useDashboard;
