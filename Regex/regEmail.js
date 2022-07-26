"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.regexEmail = void 0;
var regexEmail = /** @class */ (function () {
    function regexEmail() {
        this.EMAIL_REGEX = /^\w+@gmail.com$/i;
    }
    regexEmail.prototype.Validate_Email = function (regex) {
        return this.EMAIL_REGEX.test(regex);
    };
    return regexEmail;
}());
exports.regexEmail = regexEmail;
