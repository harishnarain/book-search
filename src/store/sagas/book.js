import { put } from "redux-saga/effects";

import axios from "../../axios-books";
import * as actions from "../actions/index";

export function* fetchBooksSaga(action) {
  yield put(actions.fetchBooksStart());
  //const queryParams = '?auth=' + action.token + '&orderBy="userId"&equalTo="' + action.userId + '"';
  //const queryParams = '?$filter=startswith(displayName,\'' + action.query + '\')';
  let queryParams = "?q=";
  if (action.query) {
    queryParams = `?q=${action.query}`;
  }
  try {
    //const response = yield axios.get('/users.json' + queryParams);
    const response = yield axios.get("volumes" + queryParams);
    const fetchedBooks = [];
    for (let key in response.data.items) {
      fetchedBooks.push({
        ...response.data.items[key],
      });
    }
    yield put(actions.fetchBooksSuccess(fetchedBooks));
  } catch (error) {
    yield put(actions.fetchBooksFail(error));
  }
}
