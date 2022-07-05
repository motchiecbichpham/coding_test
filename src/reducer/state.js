import authReducer from './auth/authReducer';

import {INITIAL_STATE} from './auth/authReducer';

export const initialState = {
  auth: INITIAL_STATE,
};

export default ({auth}, action) => ({
  auth: authReducer(auth, action),
});
