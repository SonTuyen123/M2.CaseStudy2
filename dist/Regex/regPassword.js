"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.regexPassword = void 0;
class regexPassword {
    constructor() {
        this.PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$/;
    }
    Validate_Pasword(regex) {
        return this.PASSWORD_REGEX.test(regex);
    }
}
exports.regexPassword = regexPassword;
