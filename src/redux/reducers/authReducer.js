const initialState = {
  email: '',
  password: '',
  isAuth: false,
};

export const SET_AUTH_DATA = 'auth/SET_AUTH_DATA';

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_AUTH_DATA:
      console.log(action.payload)
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}

// ACTIONS
export const setAuthDataAction = ({email, password, isAuth}) => {
  return { type: SET_AUTH_DATA, payload: {email, password, isAuth}}
}
