import { infoAPI } from '../../api/infoAPI';

// ACTION
//----------------------------------------------//
export const SET_INFO = 'info/SET_INFO';

// REDUCER
//----------------------------------------------//
const initialState = {
  info: {},
};

export default function infoReducer(state = initialState, action) {
  switch (action.type) {
    case SET_INFO:
      return {
        ...state,
        info: { ...action.payload },
      };

    default:
      return state;
  }
}

// ACTION CREATOR
//----------------------------------------------//
export const setInfoActionCreator = (payload) => {
  return { type: SET_INFO, payload };
};

//THUNK
//----------------------------------------------//
export const updateInfoThunk = (infoData) => (dispatch) => {
  infoAPI
    .updateInfo(infoData)
    .then(() => {
      return infoAPI.fetchInfo();
    })
    .then((data) => {
      dispatch(setInfoActionCreator(data));
    });
};
