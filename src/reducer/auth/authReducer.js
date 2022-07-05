export const INITIAL_STATE = {
  accessToken: null,
  loginError: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCEEDED':
      let {accessToken} = action.payload;
      return Object.assign({}, state, {accessToken});
    case 'LOGIN_FAILED':
      return Object.assign({}, state, {loginError: action.payload.error});
    case 'LOGOUT':
      return Object.assign({}, state, INITIAL_STATE);
    default:
      return state;
  }
};

export default authReducer;
