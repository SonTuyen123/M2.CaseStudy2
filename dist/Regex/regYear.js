"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.regexYear = void 0;
class regexYear {
    constructor() {
        this.YEAR_REGEX = /^(\d{2}|195\d|200\d|20[1-2]\d)\b$/;
    }
    Validate_Year(regex) {
        return this.YEAR_REGEX.test(regex);
    }
}
exports.regexYear = regexYear;
