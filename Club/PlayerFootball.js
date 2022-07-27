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
exports.PlayerFootball = void 0;
var Person_1 = require("./Person");
var PlayerFootball = /** @class */ (function (_super) {
    __extends(PlayerFootball, _super);
    function PlayerFootball(name, nationality, age, birth, dateOfJon, location, turnCompetition, numberGoal, wage) {
        var _this = _super.call(this, name, nationality, age, birth, dateOfJon) || this;
        _this._location = location;
        _this._turnCompetition = turnCompetition;
        _this._numberGoal = numberGoal;
        _this._wage = wage;
        return _this;
    }
    Object.defineProperty(PlayerFootball.prototype, "location", {
        get: function () {
            return this._location;
        },
        set: function (value) {
            this._location = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PlayerFootball.prototype, "turnCompetition", {
        get: function () {
            return this._turnCompetition;
        },
        set: function (value) {
            this._turnCompetition = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PlayerFootball.prototype, "numberGoal", {
        get: function () {
            return this._numberGoal;
        },
        set: function (value) {
            this._numberGoal = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PlayerFootball.prototype, "wage", {
        get: function () {
            return this._wage;
        },
        set: function (value) {
            this._wage = value;
        },
        enumerable: false,
        configurable: true
    });
    PlayerFootball.prototype.wagePlayer = function () {
        return this.wage + _super.prototype.allowance.call(this) + this.numberGoal * 1000000;
    };
    return PlayerFootball;
}(Person_1.Person));
exports.PlayerFootball = PlayerFootball;
