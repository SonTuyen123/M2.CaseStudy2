import {Person} from "./Person";

export class PlayerFootball extends Person {
    private _location: string;
    private _turnCompetition: string;
    private _numberGoal: number;
    private _wage: number;

    constructor(name: string,
                nationality: string,
                age: number,
                birth: string,
                dateOfJon: number,
                location: string,
                turnCompetition: string,
                numberGoal: number,
                wage: number) {
        super(name, nationality, age, birth, dateOfJon);
        this._location = location;
        this._turnCompetition = turnCompetition;
        this._numberGoal = numberGoal;
        this._wage = wage;
    }

    get location(): string {
        return this._location;
    }

    set location(value: string) {
        this._location = value;
    }

    get turnCompetition(): string {
        return this._turnCompetition;
    }

    set turnCompetition(value: string) {
        this._turnCompetition = value;
    }

    get numberGoal(): number {
        return this._numberGoal;
    }

    set numberGoal(value: number) {
        this._numberGoal = value;
    }

    get wage(): number {
        return this._wage;
    }

    set wage(value: number) {
        this._wage = value;
    }

    wagePlayer() {
        return this.wage + super.allowance() + this.numberGoal * 1000000;
    }
}