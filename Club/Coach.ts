import {Person} from "./Person";

export class Coach extends Person{
    private _yearExperience:number;
    private _factorWage:number;
    private _allowanceCoach:number;

    constructor(name: string,
                nationality: string,
                age: number,
                birth: string,
                dateOfJon: number,
                yearExperience: number,
                factorWage: number,
                allowanceCoach: number) {
        super(name, nationality, age, birth, dateOfJon);
        this._yearExperience = yearExperience;
        this._factorWage = factorWage;
        this._allowanceCoach = allowanceCoach;
    }

    get yearExperience(): number {
        return this._yearExperience;
    }

    set yearExperience(value: number) {
        this._yearExperience = value;
    }

    get factorWage(): number {
        return this._factorWage;
    }

    set factorWage(value: number) {
        this._factorWage = value;
    }

    get allowanceCoach(): number {
        return this._allowanceCoach;
    }

    set allowanceCoach(value: number) {
        this._allowanceCoach = value;
    }

    wageCoach(){
        return ((this.factorWage * 10) +this.allowanceCoach + super.allowance());
    }
}