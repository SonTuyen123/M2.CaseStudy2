"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.regNumber = void 0;
class regNumber {
    constructor() {
        this.NUMBER_REGEX = /^(?:[1-9]|[1-9]\d)$/;
    }
    Validate_Number(regex) {
        return this.NUMBER_REGEX.test(regex);
    }
}
exports.regNumber = regNumber;
