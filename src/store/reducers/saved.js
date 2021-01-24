import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  books: [],
  loading: false,
  deleted: false,
  added: false,
  error: null,
};

const fetchSavedStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const fetchSavedSuccess = (state, action) => {
  return updateObject(state, {
    books: action.books,
    loading: false,
  });
};

const fetchSavedFail = (state, action) => {
  return updateObject(state, { loading: false });
};

const deleteSavedStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const deleteSavedSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    deleted: true,
  });
};

const deleteSavedFail = (state, action) => {
  return updateObject(state, { loading: false });
};

const deleteSavedInit = (state, action) => {
  return updateObject(state, { deleted: false });
};

const addSavedStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const addSavedSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    added: true,
  });
};

const addSavedFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

const addSavedInit = (state, action) => {
  return updateObject(state, { added: false });
};

const clearSavedState = (state, action) => {
  return updateObject(state, {
    error: null,
    added: false,
    updated: false,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SAVED_START:
      return fetchSavedStart(state, action);
    case actionTypes.FETCH_SAVED_SUCCESS:
      return fetchSavedSuccess(state, action);
    case actionTypes.FETCH_SAVED_FAIL:
      return fetchSavedFail(state, action);
    case actionTypes.DELETE_SAVED_START:
      return deleteSavedStart(state, action);
    case actionTypes.DELETE_SAVED_SUCCESS:
      return deleteSavedSuccess(state, action);
    case actionTypes.DELETE_SAVED_FAIL:
      return deleteSavedFail(state, action);
    case actionTypes.DELETE_SAVED_INIT:
      return deleteSavedInit(state, action);
    case actionTypes.ADD_SAVED_START:
      return addSavedStart(state, action);
    case actionTypes.ADD_SAVED_SUCCESS:
      return addSavedSuccess(state, action);
    case actionTypes.ADD_SAVED_FAIL:
      return addSavedFail(state, action);
    case actionTypes.ADD_SAVED_INIT:
      return addSavedInit(state, action);
    case actionTypes.CLEAR_SAVED_STATE:
      return clearSavedState(state, action);
    default:
      return state;
  }
};

export default reducer;
