// ACTION
//----------------------------------------------//
export const SET_AUTH = 'auth/SET_AUTH';

// REDUCER
//----------------------------------------------//
const initialState = {
  isAuth: false
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_AUTH:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}

// ACTION CREATOR
//----------------------------------------------//
export const setAuthActionCreator = (authData) => {
  return { type: SET_AUTH, payload: authData}
}
