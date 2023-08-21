const CHECK_STATUS = 'categories/checkStatus';

export const checkStatus = () => ({ type: CHECK_STATUS });

const initialState = {
  status: 'Under Construction',
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return {
        ...state,
        status: 'Active',
      };
    default:
      return state;
  }
};

export default categoriesReducer;
