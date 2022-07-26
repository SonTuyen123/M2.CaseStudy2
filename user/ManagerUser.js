"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userManager = void 0;
var userManager = /** @class */ (function () {
    function userManager() {
    }
    userManager.prototype.getAllUsers = function () {
        return userManager.users;
    };
    userManager.prototype.addNewUser = function (user) {
        userManager.users.push(user);
    };
    userManager.prototype.checkUser = function (email, password) {
        var flag = false;
        for (var i = 0; i < userManager.users.length; i++) {
            if (userManager.users[i].email === email && userManager.users[i].password === password) {
                return true;
            }
        }
        return flag;
    };
    userManager.users = [];
    return userManager;
}());
exports.userManager = userManager;
