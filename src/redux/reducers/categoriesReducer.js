import { categoryAPI } from '../../api/categoryAPI';

// ACTION
//----------------------------------------------//
export const SET_CATEGORIES = 'categories/SET_CATEGORIES';

// REDUCER
//----------------------------------------------//
const initialState = {
  isLoading: false,
  error: null,
  categories: [],
};

export default function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CATEGORIES:
      return {
        ...state,
        ...action.categoriesData,
      };

    default:
      return state;
  }
}

// ACTION CREATOR
//----------------------------------------------//
export const setCategoriesCreator = (categoriesData) => {
  return { type: SET_CATEGORIES, categoriesData };
};

//THUNK
//----------------------------------------------//
export const getCategoriesThunk = () => (dispatch) => {
  dispatch(setCategoriesCreator({ isLoading: true, error: null }));
  categoryAPI
    .getCategories()
    .then((categories) => {
      dispatch(setCategoriesCreator({ categories, isLoading: false }));
    })
    .catch((e) => {
      dispatch(setCategoriesCreator({ isLoading: false, error: e.message }));
    });
};

export const createCategoryThunk = (name, limit) => (dispatch) => {
  categoryAPI.createCategory(name, limit).then(() => {
    return categoryAPI.getCategories()
  })
  .then((categories) => {
    dispatch(setCategoriesCreator({ categories }));
  });
};
