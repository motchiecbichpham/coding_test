import React, {useContext, createContext, useReducer} from 'react';
import reducer, {initialState} from '../reducer/state';
export const MyContext = createContext([initialState, () => {}]);
const MyProvider = ({children}) => {
  return (
    <MyContext.Provider value={useReducer(reducer, {...initialState})}>
      {children}
    </MyContext.Provider>
  );
};
export default MyProvider;
export const useStateValue = () => useContext(MyContext)[0];
