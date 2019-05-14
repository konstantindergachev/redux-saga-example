import { call, put } from 'redux-saga/effects';
import api from '../../api/api';
import { TYPES } from '../actions/types';

export function* receiveUsersFromDB() {
  try {
    const users = yield call(api.users.fetchUsers);
    yield put({ type: TYPES.USERS_FETCHED_ASYNC, payload: users });
  } catch (err) {
    yield put({ type: TYPES.ERROR, error: err.message });
  }
}

export function* receiveUserFromDB(user) {
  const { payload: oneUser } = user;
  try {
    yield put({ type: TYPES.USER_FETCHED_ASYNC, payload: oneUser });
  } catch (err) {
    yield put({ type: TYPES.ERROR, error: err.message });
  }
}

export function* createUserForDB(userData) {
  try {
    yield call(api.user.createUser(userData.payload));
    yield put({ type: TYPES.CREATE_USER_ASYNC, payload: userData.payload });
  } catch (err) {
    yield put({ type: TYPES.ERROR, error: err.message });
  }
}

export function* deleteUserFromDB(user) {
  try {
    yield call(api.user.deleteUser(user.payload.id));
    yield put({ type: TYPES.DELETE_USER_ASYNC, payload: {} });
  } catch (err) {
    yield put({ type: TYPES.ERROR, error: err.message });
  }
}
