import database from '../firebase/firebase';

export const addUser = (user) => ({
  type: 'ADD_USER',
  user
});

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