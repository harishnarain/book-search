import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  books: [],
  loading: false,
  error: null,
};

const fetchBooksStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const fetchBooksSuccess = (state, action) => {
  return updateObject(state, {
    books: action.books,
    loading: false,
  });
};

const fetchBooksFail = (state, action) => {
  return updateObject(state, { loading: false });
};

const clearBookState = (state, action) => {
  return updateObject(state, {
    error: null,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_BOOKS_START:
      return fetchBooksStart(state, action);
    case actionTypes.FETCH_BOOKS_SUCCESS:
      return fetchBooksSuccess(state, action);
    case actionTypes.FETCH_BOOKS_FAIL:
      return fetchBooksFail(state, action);
    case actionTypes.CLEAR_BOOK_STATE:
      return clearBookState(state, action);
    default:
      return state;
  }
};

export default reducer;
