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

export function* deleteSavedSaga(action) {
  yield put(actions.deleteSavedStart());
  try {
    for (let book in action.books) {
      // eslint-disable-next-line
      const response = yield axios.delete("/" + action.books[book].id);
    }

    yield put(actions.deleteSavedSuccess());
  } catch (error) {
    yield put(actions.deleteSavedFail(error));
  }
}

export function* addSavedSaga(action) {
  yield put(actions.addSavedStart());
  try {
    yield action.book.forEach((book) => {
      console.log(book);
      axios.post("/", book);
      put(actions.addSavedSuccess());
    });
  } catch (error) {
    yield put(actions.addSavedFail(error));
  }
}
