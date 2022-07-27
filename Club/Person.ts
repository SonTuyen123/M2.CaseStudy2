export class Person {
    private _name: string;
    private _nationality: string;
    private _age: string;
    private _birth: string;
    private _yearOfJon: number;
    constructor(name: string, nationality: string, age: string, birth: string, dateOfJon: number) {
        this._name = name;
        this._nationality = nationality;
        this._age = age;
        this._birth = birth;
        this._yearOfJon = dateOfJon;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get nationality(): string {
        return this._nationality;
    }

    set nationality(value: string) {
        this._nationality = value;
    }

    get age(): string {
        return this._age;
    }

    set age(value: string) {
        this._age = value;
    }

    get birth(): string {
        return this._birth;
    }

    set birth(value: string) {
        this._birth = value;
    }

    get yearOfJon(): number {
        return this._yearOfJon;
    }

    set yearOfJon(value: number) {
        this._yearOfJon = value;
    }
    allowance():number{
        let str= new Date();
        let year = str.getFullYear();
        return year - this.yearOfJon;
    }
}