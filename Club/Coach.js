"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coach = void 0;
var Person_1 = require("./Person");
var Coach = /** @class */ (function (_super) {
    __extends(Coach, _super);
    function Coach(name, nationality, age, birth, dateOfJon, yearExperience, factorWage, allowanceCoach) {
        var _this = _super.call(this, name, nationality, age, birth, dateOfJon) || this;
        _this._yearExperience = yearExperience;
        _this._factorWage = factorWage;
        _this._allowanceCoach = allowanceCoach;
        return _this;
    }
    Object.defineProperty(Coach.prototype, "yearExperience", {
        get: function () {
            return this._yearExperience;
        },
        set: function (value) {
            this._yearExperience = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Coach.prototype, "factorWage", {
        get: function () {
            return this._factorWage;
        },
        set: function (value) {
            this._factorWage = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Coach.prototype, "allowanceCoach", {
        get: function () {
            return this._allowanceCoach;
        },
        set: function (value) {
            this._allowanceCoach = value;
        },
        enumerable: false,
        configurable: true
    });
    Coach.prototype.wageCoach = function () {
        return ((this.factorWage * 10) + this.allowanceCoach + _super.prototype.allowance.call(this));
    };
    return Coach;
}(Person_1.Person));
exports.Coach = Coach;
