import * as actionTypes from "./actionTypes";

export const fetchSavedSuccess = (books) => {
  return {
    type: actionTypes.FETCH_SAVED_SUCCESS,
    books: books,
  };
};

export const fetchSavedFail = (error) => {
  return {
    type: actionTypes.FETCH_SAVED_FAIL,
    error: error,
  };
};

export const fetchSavedStart = () => {
  return {
    type: actionTypes.FETCH_SAVED_START,
  };
};

export const fetchSaved = (queryType, query) => {
  return {
    type: actionTypes.FETCH_SAVED,
    queryType: queryType,
    query: query,
  };
};

export const deleteSaved = (books) => {
  return {
    type: actionTypes.DELETE_SAVED,
    books: books,
  };
};

export const deleteSavedSuccess = () => {
  return {
    type: actionTypes.DELETE_SAVED_SUCCESS,
  };
};

export const deleteSavedFail = (error) => {
  return {
    type: actionTypes.DELETE_SAVED_FAIL,
    error: error,
  };
};

export const deleteSavedStart = () => {
  return {
    type: actionTypes.DELETE_SAVED_START,
  };
};

export const deleteSavedInit = () => {
  return {
    type: actionTypes.DELETE_SAVED_INIT,
  };
};

export const addSaved = (book) => {
  return {
    type: actionTypes.ADD_SAVED,
    book: book,
  };
};

export const addSavedSuccess = () => {
  return {
    type: actionTypes.ADD_SAVED_SUCCESS,
  };
};

export const addSavedFail = (error) => {
  return {
    type: actionTypes.ADD_SAVED_FAIL,
    error: error,
  };
};

export const addSavedStart = () => {
  return {
    type: actionTypes.ADD_SAVED_START,
  };
};

export const addSavedInit = () => {
  return {
    type: actionTypes.ADD_SAVED_INIT,
  };
};

export const clearSavedState = () => {
  return {
    type: actionTypes.CLEAR_SAVED_STATE,
  };
};
