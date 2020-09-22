import { authAPI } from '../../api/authAPI';

// ACTION
//----------------------------------------------//
export const SET_AUTH = 'auth/SET_AUTH';
export const TOGGLE_LOADING = 'auth/TOGGLE_LOADING';
export const SET_ERROR = 'auth/SET_ERROR';

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
        isAuth: action.isAuth,
      };

    case TOGGLE_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case SET_ERROR:
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
}

// ACTION CREATOR
//----------------------------------------------//
export const setAuthActionCreator = (isAuth) => {
  return { type: SET_AUTH, isAuth };
};

export const toggleLoadingActionCreator = (isLoading) => {
  return { type: TOGGLE_LOADING, isLoading };
};

export const setErrorActionCreator = (error) => {
  return { type: SET_AUTH, error };
};

// THUNK
//----------------------------------------------//
export const loginThunk = (email, password) => (dispatch) => {
  dispatch(toggleLoadingActionCreator(true));
  dispatch(setErrorActionCreator(null));
  
  authAPI
    .login(email, password)
    .then(() => {
      dispatch(setAuthActionCreator(true));
      dispatch(toggleLoadingActionCreator(false));
    })
    .catch((e) => {
      dispatch(toggleLoadingActionCreator(false));
      dispatch(setErrorActionCreator(e.message));
    });
};

export const logoutThunk = () => (dispatch) => {
  authAPI
    .logout()
    .then(() => {
      dispatch(setAuthActionCreator(false));
    })
    .catch((e) => {
      console.log(e);
    });
};
