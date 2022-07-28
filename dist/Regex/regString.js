"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegString = void 0;
class RegString {
    constructor() {
        this.String_REGEX = /^[a-zA-Z]+$/;
    }
    Validate_String(regex) {
        return this.String_REGEX.test(regex);
    }
}
exports.RegString = RegString;
