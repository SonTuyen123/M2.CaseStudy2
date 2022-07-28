"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(name, nationality, age, birth, dateOfJon) {
        this._name = name;
        this._nationality = nationality;
        this._age = age;
        this._birth = birth;
        this._yearOfJon = dateOfJon;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get nationality() {
        return this._nationality;
    }
    set nationality(value) {
        this._nationality = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
    get birth() {
        return this._birth;
    }
    set birth(value) {
        this._birth = value;
    }
    get yearOfJon() {
        return this._yearOfJon;
    }
    set yearOfJon(value) {
        this._yearOfJon = value;
    }
    allowance() {
        let str = new Date();
        let year = str.getFullYear();
        return year - this.yearOfJon;
    }
}
exports.Person = Person;
