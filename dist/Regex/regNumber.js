"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegNumber = void 0;
class RegNumber {
    constructor() {
        this.NUMBER_REGEX = /^\d+$/;
    }
    Validate_Number(regex) {
        return this.NUMBER_REGEX.test(regex);
    }
}
exports.RegNumber = RegNumber;
