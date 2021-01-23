import * as actionTypes from "./actionTypes";

export const fetchBooksSuccess = (books) => {
  return {
    type: actionTypes.FETCH_BOOKS_SUCCESS,
    books: books,
  };
};

export const fetchBooksFail = (error) => {
  return {
    type: actionTypes.FETCH_BOOKS_FAIL,
    error: error,
  };
};

export const fetchBooksStart = () => {
  return {
    type: actionTypes.FETCH_BOOKS_START,
  };
};

export const fetchBooks = (queryType, query) => {
  return {
    type: actionTypes.FETCH_BOOKS,
    queryType: queryType,
    query: query,
  };
};

export const clearBookState = () => {
  return {
    type: actionTypes.CLEAR_BOOK_STATE,
  };
};
