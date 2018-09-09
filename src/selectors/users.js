import replaceLetters from '../utils/replaceLetters';

// Get visible users
export default (users, { username, userType }) => {
  return users.filter((user) => {
    const usernameMatch = typeof username !== 'string' 
    || replaceLetters(user.userName.replace(/ /g,'').toLowerCase())
    .includes(replaceLetters(username.replace(/ /g,'')).toLowerCase());
    const typeMatch = user.userType.includes(userType);

    return usernameMatch && typeMatch;
  });
};