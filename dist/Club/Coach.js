"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coach = void 0;
const Person_1 = require("./Person");
class Coach extends Person_1.Person {
    constructor(name, nationality, age, birth, dateOfJon, yearExperience, factorWage, allowanceCoach) {
        super(name, nationality, age, birth, dateOfJon);
        this._yearExperience = yearExperience;
        this._factorWage = factorWage;
        this._allowanceCoach = allowanceCoach;
    }
    get yearExperience() {
        return this._yearExperience;
    }
    set yearExperience(value) {
        this._yearExperience = value;
    }
    get factorWage() {
        return this._factorWage;
    }
    set factorWage(value) {
        this._factorWage = value;
    }
    get allowanceCoach() {
        return this._allowanceCoach;
    }
    set allowanceCoach(value) {
        this._allowanceCoach = value;
    }
    wageCoach() {
        return ((this.factorWage * 10) + this.allowanceCoach + super.allowance());
    }
}
exports.Coach = Coach;
