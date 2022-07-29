"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerFootball = void 0;
const Person_1 = require("./Person");
class PlayerFootball extends Person_1.Person {
    constructor(name, nationality, age, birth, dateOfJon, location, turnCompetition, numberGoal, wage, randomId) {
        super(name, nationality, age, birth, dateOfJon);
        this._location = location;
        this._turnCompetition = turnCompetition;
        this._numberGoal = numberGoal;
        this._wage = wage;
        this._randomId = randomId;
    }
    get location() {
        return this._location;
    }
    set location(value) {
        this._location = value;
    }
    get turnCompetition() {
        return this._turnCompetition;
    }
    set turnCompetition(value) {
        this._turnCompetition = value;
    }
    get numberGoal() {
        return this._numberGoal;
    }
    set numberGoal(value) {
        this._numberGoal = value;
    }
    get wage() {
        return this._wage;
    }
    set wage(value) {
        this._wage = value;
    }
    get randomId() {
        return this._randomId;
    }
    set randomId(value) {
        this._randomId = value;
    }
    wagePlayer() {
        return this.wage + super.allowance() + this.numberGoal * 10;
    }
}
exports.PlayerFootball = PlayerFootball;
