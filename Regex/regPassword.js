"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.regexPassword = void 0;
var regexPassword = /** @class */ (function () {
    function regexPassword() {
        this.PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$/;
    }
    regexPassword.prototype.Validate_Pasword = function (regex) {
        return this.PASSWORD_REGEX.test(regex);
    };
    return regexPassword;
}());
exports.regexPassword = regexPassword;
