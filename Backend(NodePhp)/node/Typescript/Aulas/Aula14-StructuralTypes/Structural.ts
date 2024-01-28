type verifyUserFn = (user: User, sentValue: User) => boolean;
type User = { username: string; password: string };

const verifyUser: verifyUserFn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};


const bdUser = {username: 'João', password: '12345'};
const sentUser = {username: 'João', password: '12345'};

const logged1 = verifyUser(bdUser, sentUser);

console.log(logged1);                                                  