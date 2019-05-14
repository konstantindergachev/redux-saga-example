import { takeLatest } from 'redux-saga/effects';
import { TYPES } from '../actions/types';
import { createUserForDB, deleteUserFromDB, receiveUserFromDB, receiveUsersFromDB } from '../sagas/usersSaga';

export default function* rootSaga() {
  yield takeLatest(TYPES.USERS_FETCHED, receiveUsersFromDB);
  yield takeLatest(TYPES.USER_FETCHED, receiveUserFromDB);
  yield takeLatest(TYPES.CREATE_USER, createUserForDB);
  yield takeLatest(TYPES.DELETE_USER, deleteUserFromDB);
}
