import {SET_LANG} from "../Reducers/langReducer";

const setReduxLanguage = (isPolish) => {
  return {
    type: SET_LANG,
    payload: isPolish
  };
};

export const setLanguage = (isPolish) => async dispatch => {
  dispatch(setReduxLanguage(isPolish));
}
