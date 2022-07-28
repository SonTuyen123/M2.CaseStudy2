"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.regexEmail = void 0;
class regexEmail {
    constructor() {
        this.EMAIL_REGEX = /^\w+@gmail.com$/i;
    }
    Validate_Email(regex) {
        return this.EMAIL_REGEX.test(regex);
    }
}
exports.regexEmail = regexEmail;
