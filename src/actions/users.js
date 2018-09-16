import database from '../firebase/firebase';

export const addUser = (user) => ({
  type: 'ADD_USER',
  user
});

export const editUser = (id, updates) => ({
  type: 'EDIT_USER',
  id,
  updates
});

export const startEditUser = (id, updates) => {
  return (dispatch) => {
    return database.ref(`users/${id}`).update(updates).then(() => {
      dispatch(editUser(id, updates));
    });
  };
};

export const setUsers = (users) => ({
  type: 'SET_USERS',
  users
});

export const startSetUsers = () => {
  return (dispatch) => {
    return database.ref('users').once('value').then((snapshot) => {
      const users = [];
      snapshot.forEach((childSnapshot) => {
        users.push({
          id: childSnapshot.key,
          ...childSnapshot.val()        
        });
      });
      dispatch(setUsers(users));
    });
  };
};