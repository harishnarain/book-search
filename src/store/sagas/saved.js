import { put } from "redux-saga/effects";

import axios from "../../axios-saved";
import * as actions from "../actions/index";

export function* fetchSavedSaga(action) {
  yield put(actions.fetchSavedStart());

  try {
    const response = yield axios.get();
    const fetchedBooks = [];
    for (let key in response.data) {
      fetchedBooks.push({
        ...response.data[key],
      });
    }
    yield put(actions.fetchSavedSuccess(fetchedBooks));
  } catch (error) {
    yield put(actions.fetchSavedFail(error));
  }
}
