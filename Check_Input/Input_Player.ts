import {regString} from "../Regex/regString";
import {regNumber} from "../Regex/regNumber";
import {regexDate} from "../Regex/regDate";

import * as rl from "readline-sync";
import {regexYear} from "../Regex/regYear";

export function inputNamePlayer(){
    let RegString =new regString();
    let name = rl.question('Nhập tên cầu thủ: ');
    if(RegString.Validate_String(name)){
        return name;
    }else {
        console.log('Tên cầu thủ không được có số và ký tự đặc biệt');
        console.log('Nhập lại ');
        inputNamePlayer();
    }return name;
}
export function inputNationality(){
    let RegString =new regString();
    let nationality = rl.question('Quốc tịch: ');
    if(RegString.Validate_String(nationality)){
        return nationality;
    }else {
        console.log('Quốc tịch không được có số và ký tự đặc biệt');
        console.log('Nhập lại ');
        inputNationality();
    }return nationality;
}

export function inputAge(){
    let RegNumber =new regNumber();
    let age = rl.question('Nhập tuổi: ');
    if(RegNumber.Validate_Number(age)){
        return age;
    }else {
        console.log('Tổi không được chứa chữ cái và ký tự đặc biệt');
        console.log('Nhập lại ');
        inputAge();
    }return age;
}
export function inputBrithDay(){
    let RegDate =new regexDate();
    let birthDay = rl.question('Nhập ngày tháng năm sinh: ');
    if(RegDate.Validate_Date(birthDay)){
        return birthDay;
    }else {
        console.log('Ngày tháng năm sinh phải có dạng DD / MM / YYYY hoặc DD-MM-YYYY');
        console.log('Nhập lại ');
        inputBrithDay();
    }return birthDay;
}
export function inputYear(){
    let RegYear =new regexYear();
    let year = rl.question('Nhập năm tham gia: ');
    if(RegYear.Validate_Year(year)){
        return year;
    }else {
        console.log('Năm tham gia phải từ 1900-2099');
        console.log('Nhập lại ');
        inputYear();
    }return year;
}
export function inputLocation(){
    let RegString =new regString();
    let location = rl.question('Nhập vị trí thi đấu: ');
    if(RegString.Validate_String(location)){
        return location;
    }else {
        console.log('Vị trí thi đấu không được có số và ký tự đặc biệt');
        console.log('Nhập lại ');
        inputLocation();
    }return location;
}
export function inputTurnCompetition(){
    let RegNumber =new regNumber();
    let turnCompetition = rl.question('Nhập số lần thi đấu: ');
    if(RegNumber.Validate_Number(turnCompetition)){
        return turnCompetition;
    }else {
        console.log('Số lần thi đấu không được chứa chữ cái và ký tự đặc biệt');
        console.log('Nhập lại ');
        inputTurnCompetition();
    }return turnCompetition;
}
export function inputNumberGoals(){
    let RegNumber =new regNumber();
    let numberGoals = rl.question('Nhập số lần thi đấu: ');
    if(RegNumber.Validate_Number(numberGoals)){
        return numberGoals;
    }else {
        console.log('Số bàn thắng không được chứa chữ cái và ký tự đặc biệt');
        console.log('Nhập lại ');
        inputNumberGoals();
    }return numberGoals;
}
export function inputWages(){
    let RegNumber =new regNumber();
    let wages = rl.question('Nhập tiền lương(năm): ');
    if(RegNumber.Validate_Number(wages)){
        return wages;
    }else {
        console.log('Tiền lương không được chứa chữ cái và ký tự đặc biệt');
        console.log('Nhập lại ');
        inputWages();
    }return wages;
}



