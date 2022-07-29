"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.regString = void 0;
class regString {
    constructor() {
        this.String_REGEX = /^[a-zA-Z]+$/;
    }
    Validate_String(regex) {
        return this.String_REGEX.test(regex);
    }
}
exports.regString = regString;
