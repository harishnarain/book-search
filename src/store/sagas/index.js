import { takeEvery } from "redux-saga/effects";

import * as actionTypes from "../actions/actionTypes";
import { fetchBooksSaga } from "./book";
import { fetchSavedSaga, deleteSavedSaga, addSavedSaga } from "./saved";

export function* watchBook() {
  yield takeEvery(actionTypes.FETCH_BOOKS, fetchBooksSaga);
}

export function* watchSaved() {
  yield takeEvery(actionTypes.FETCH_SAVED, fetchSavedSaga);
  yield takeEvery(actionTypes.DELETE_SAVED, deleteSavedSaga);
  yield takeEvery(actionTypes.ADD_SAVED, addSavedSaga);
}
