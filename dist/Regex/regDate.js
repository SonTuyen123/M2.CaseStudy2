"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.regexDate = void 0;
class regexDate {
    constructor() {
        this.DATE_REGEX = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    }
    Validate_Date(regex) {
        return this.DATE_REGEX.test(regex);
    }
}
exports.regexDate = regexDate;
