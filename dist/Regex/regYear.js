"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.regexYear = void 0;
class regexYear {
    constructor() {
        this.YEAR_REGEX = /^(\d{2}|19\d{2}|20\d{2})\b$/;
    }
    Validate_Year(regex) {
        return this.YEAR_REGEX.test(regex);
    }
}
exports.regexYear = regexYear;
