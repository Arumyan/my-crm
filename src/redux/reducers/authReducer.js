import { authAPI } from '../../api/authAPI';

// ACTION
//----------------------------------------------//
export const SET_AUTH = 'auth/SET_AUTH';

// REDUCER
//----------------------------------------------//
const initialState = {
  isAuth: false,
  isLoading: false,
  error: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_AUTH:
      return {
        ...state,
        ...action.authData,
      };

    default:
      return state;
  }
}

// ACTION CREATOR
//----------------------------------------------//
export const setAuthActionCreator = (authData) => {
  return { type: SET_AUTH, authData };
};

// THUNK
//----------------------------------------------//
export const loginThunk = (email, password) => (dispatch) => {
  dispatch(setAuthActionCreator({ isLoading: true, error: null }));

  authAPI
    .login(email, password)
    .then(() => {
      dispatch(setAuthActionCreator({ isAuth: true, isLoading: false }));
    })
    .catch((e) => {
      dispatch(setAuthActionCreator({ isLoading: false, error: e.message }));
    });
};

export const logoutThunk = () => (dispatch) => {
  authAPI
    .logout()
    .then(() => {
      dispatch(setAuthActionCreator({ isAuth: false }));
    })
    .catch((e) => {
      console.log(e);
    });
};
