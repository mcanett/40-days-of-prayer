import database, { authProvider, createUser } from '../firebase/firebase';

// Start Sign Up
export const startSignUp = (email, password) => (
  // authProvider.createUserWithEmailAndPassword(email, password)
  createUser(email, password)
);


// Log In
export const login = (user) => ({
  type: 'LOGIN',
  uid: user.uid,
  userName: user.userName,
  email: user.email,
  userType: user.userType
});

export const startLogIn = (email, password) => (
  authProvider.signInWithEmailAndPassword(email, password)
);

export const getUserInfo = (uid) => {
  return (dispatch) => {
    return database.ref('users')
    .orderByChild('uid')
    .equalTo(uid)
    .once('value')
    .then((snapshot) => {
      const keys = Object.keys(snapshot.val());
      dispatch(login(snapshot.val()[keys[0]]));
    });
  };
  
};

export const saveUserInfo = (uid, userName, email, userType) => {
  const user = {
    uid,
    userName,
    email,
    userType
  };

  return database.ref('users').push(user);
};

// Log Out
export const logout = () => ({
  type: 'LOGOUT'
});

export const startLogOut = () => (
  authProvider.signOut()
);

// Password Reset
export const startPasswordReset = (email) => (
  authProvider.sendPasswordResetEmail(email)
);

// Password Change
export const startPasswordUpdate = (password) => (
  auth.currentUser.updatePassword(password)
);

