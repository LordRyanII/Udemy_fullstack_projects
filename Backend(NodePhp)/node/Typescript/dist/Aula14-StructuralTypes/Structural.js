"use strict";
var verifyUser = function (user, sentValue) {
    return (user.username === sentValue.username && user.password === sentValue.password);
};
var bdUser = { username: 'João', password: '12345' };
var sentUser = { username: 'João', password: '12345' };
var logged1 = verifyUser(bdUser, sentUser);
console.log(logged1);
