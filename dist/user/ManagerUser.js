"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userManager = void 0;
class userManager {
    getAllUsers() {
        return userManager.users;
    }
    addNewUser(user) {
        userManager.users.push(user);
    }
    checkUser(email, password) {
        let flag = false;
        for (let i = 0; i < userManager.users.length; i++) {
            if (userManager.users[i].email === email && userManager.users[i].password === password) {
                return flag = true;
            }
        }
        return flag;
    }
}
exports.userManager = userManager;
userManager.users = [];
