// ACTION
//----------------------------------------------//
export const SET_CATEGORIES = 'categories/SET_CATEGORIES';

// REDUCER
//----------------------------------------------//
const initialState = {
  categories: []
};

export default function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CATEGORIES:
      return {
        ...state,
        categories: [...action.payload],
      };

    default:
      return state;
  }
}

// ACTION CREATOR
//----------------------------------------------//
export const setCategoriesCreator = (categories) => {
  return { type: SET_CATEGORIES, payload: categories}
}
