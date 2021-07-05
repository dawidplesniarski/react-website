export const SET_LANG = 'SET_LANG';

const initialState = {
  isPolish: false
};

export const langReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANG:
      return {
        ...state,
        isPolish: action.payload
      }
    default:
      return state;
  }
}
