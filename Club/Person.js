"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, nationality, age, birth, dateOfJon) {
        this._name = name;
        this._nationality = nationality;
        this._age = age;
        this._birth = birth;
        this._yearOfJon = dateOfJon;
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "nationality", {
        get: function () {
            return this._nationality;
        },
        set: function (value) {
            this._nationality = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            this._age = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "birth", {
        get: function () {
            return this._birth;
        },
        set: function (value) {
            this._birth = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "yearOfJon", {
        get: function () {
            return this._yearOfJon;
        },
        set: function (value) {
            this._yearOfJon = value;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.allowance = function () {
        var str = new Date();
        var year = str.getFullYear();
        return year - this.yearOfJon;
    };
    return Person;
}());
exports.Person = Person;
