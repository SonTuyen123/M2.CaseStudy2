import {regString} from "../Regex/regString";
import {regNumber} from "../Regex/regNumber";
import * as rl from "readline-sync";

export function inputNameCoach(){
    let RegString =new regString();
    let name = rl.question('Nhập tên Coach: ');
    while (!RegString.Validate_String(name)){
        console.log('Tên Coach không được có số và ký tự đặc biệt');
        name = rl.question('Nhập tên Coach:  ');
    }return name;
}

export function inputYearExperience(){
    let RegNumber =new regNumber();
    let turnCompetition = rl.question('Nhập số năm kinh nghiệm: ');
    while (!RegNumber.Validate_Number(turnCompetition)){
        console.log('Số năm kinh nghiệm không được chứa chữ cái và ký tự đặc biệt');
        turnCompetition = rl.question('Nhập số năm kinh nghiệm:  ');
    }return turnCompetition;
}
export function inputFactorWage(){
    let RegNumber =new regNumber();
    let factorWage = rl.question('Nhập hệ số lương: ');
    while (!RegNumber.Validate_Number(factorWage)){
        console.log('Hệ số lương không được chứa chữ cái và ký tự đặc biệt');
        factorWage = rl.question('Nhập hệ số lương:  ');
    }return factorWage;
}
export function inputAllowanceCoach(){
    let RegNumber =new regNumber();
    let allowanceCoach = rl.question('Nhập phụ cấp: ');
    while (!RegNumber.Validate_Number(allowanceCoach)){
        console.log('Tiền phụ cấp không được chứa chữ cái và ký tự đặc biệt');
        allowanceCoach = rl.question('Nhập phụ cấp:  ');
    }return allowanceCoach;
}



