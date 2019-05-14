import { config } from '../config/config';

export default {
  users: {
    fetchUsers: () => fetch(config.url).then(res => res.json()).catch(err => err.message)
  },
  user: {
    createUser: (userData) => fetch(`${config.url}`, {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
      }, 
    }).then(res => res.json()).catch(err => err.message),
    deleteUser: (userId) => fetch(`${config.url}/${userId}`, {
      method: 'DELETE'
    }).catch(err => err.message)
  }
};