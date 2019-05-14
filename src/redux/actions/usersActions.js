import { TYPES } from './types';

export const receiverUsers = (users) => {
  return ({
    type: TYPES.USERS_FETCHED,
    payload: users,
  });
};

export const receiverUser = (user) => {
  return ({
    type: TYPES.USER_FETCHED,
    payload: user,
  });
};

export const createUser = (userData) => {
  return ({
    type: TYPES.CREATE_USER,
    payload: userData,
  });
};

export const deleteUser = (user) => {
  return ({
    type: TYPES.DELETE_USER,
    payload: user,
  });
};
