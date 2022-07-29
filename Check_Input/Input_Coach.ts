import {regString} from "../Regex/regString";
import {regNumber} from "../Regex/regNumber";
import * as rl from "readline-sync";

export function inputNameCoach(){
    let RegString =new regString();
    let name = rl.question('Nhập tên Coach: ');
    if(RegString.Validate_String(name)){
        return name;
    }else {
        console.log('Tên Coach không được có số và ký tự đặc biệt');
        console.log('Nhập lại ');
        inputNameCoach();
    }return name;
}

export function inputYearExperience(){
    let RegNumber =new regNumber();
    let turnCompetition = rl.question('Nhập số năm kinh nghiệm: ');
    if(RegNumber.Validate_Number(turnCompetition)){
        return turnCompetition;
    }else {
        console.log('Số năm kinh nghiệm không được chứa chữ cái và ký tự đặc biệt');
        console.log('Nhập lại ');
        inputYearExperience();
    }return turnCompetition;
}
export function inputFactorWage(){
    let RegNumber =new regNumber();
    let factorWage = rl.question('Nhập hệ số lương: ');
    if(RegNumber.Validate_Number(factorWage)){
        return factorWage;
    }else {
        console.log('Hệ số lương không được chứa chữ cái và ký tự đặc biệt');
        console.log('Nhập lại ');
        inputFactorWage();
    }return factorWage;
}
export function inputAllowanceCoach(){
    let RegNumber =new regNumber();
    let allowanceCoach = rl.question('Nhập phụ cấp: ');
    if(RegNumber.Validate_Number(allowanceCoach)){
        return allowanceCoach;
    }else {
        console.log('Tiền phụ cấp không được chứa chữ cái và ký tự đặc biệt');
        console.log('Nhập lại ');
        inputAllowanceCoach();
    }return allowanceCoach;
}



