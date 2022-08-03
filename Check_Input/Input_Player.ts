import {regString} from "../Regex/regString";
import {regNumber} from "../Regex/regNumber";
import {regexDate} from "../Regex/regDate";
import {regexYear} from "../Regex/regYear";
import * as rl from "readline-sync";


export function inputNamePlayer(){
    let RegString =new regString();
    let name = rl.question('Nhập tên cầu thủ: ');
    while (!RegString.Validate_String(name)){
        console.log('Tên cầu thủ không được có số và ký tự đặc biệt ');
        name = rl.question('Nhập tên cầu thủ: ');
    }return name;
}
export function inputNationality(){
    let RegString =new regString();
    let nationality = rl.question('Quốc tịch: ');
    while (!RegString.Validate_String(nationality)){
        console.log('Quốc tịch cầu thủ không được có số và ký tự đặc biệt ');
        nationality = rl.question('Quốc tịch: ');
    }return nationality;
}

export function inputAge(){
    let RegNumber =new regNumber();
    let age = rl.question('Nhập tuổi: ');
    while (!RegNumber.Validate_Number(age)){
        console.log('Tuổi không được chứa chữ cái và ký tự đặc biệt ');
        age = rl.question('Nhập tuổi: ');
    }return age;

}
export function inputBrithDay(){
    let RegDate =new regexDate();
    let birthDay = rl.question('Nhập ngày tháng năm sinh: ');
    while (!RegDate.Validate_Date(birthDay)){
        console.log('Ngày tháng năm sinh phải có dạng DD / MM / YYYY hoặc DD-MM-YYYY ');
        birthDay = rl.question('NNhập ngày tháng năm sinh: ');
    }return birthDay;
}
export function inputYear(){
    let RegYear =new regexYear();
    let year = rl.question('Nhập năm tham gia: ');
    while (!RegYear.Validate_Year(year)){
        console.log('ăm tham gia phải từ 1950-2099 ');
        year = rl.question('Nhập năm tham gia: ');
    }return year;
}
export function inputLocation(){
    let RegString =new regString();
    let location = rl.question('Nhập vị trí thi đấu: ');
    while (!RegString.Validate_String(location)){
        console.log('Vị trí thi đấu không được có số và ký tự đặc biệt ');
        location = rl.question('Nhập vị trí thi đấu: ');
    }return location;
}
export function inputTurnCompetition(){
    let RegNumber =new regNumber();
    let turnCompetition = rl.question('Nhập số lần thi đấu: ');
    while (!RegNumber.Validate_Number(turnCompetition)){
        console.log('Số lần thi đấu không được chứa chữ cái và ký tự đặc biệt ');
        turnCompetition = rl.question('Nhập số lần thi đấu: ');
    }return turnCompetition;

}
export function inputNumberGoals(){
    let RegNumber =new regNumber();
    let numberGoals = rl.question('Nhập số bàn thắng đã có: ');
    while (!RegNumber.Validate_Number(numberGoals)){
        console.log('Số bàn thắng không được chứa chữ cái và ký tự đặc biệt ');
        numberGoals = rl.question('hập số bàn thắng đã có: ');
    }return numberGoals;
}
export function inputWages(){
    let RegNumber =new regNumber();
    let wages = rl.question('Nhập tiền lương(năm): ');
    while (!RegNumber.Validate_Number(wages)){
        console.log('Tiền lương không được chứa chữ cái và ký tự đặc biệt');
        wages = rl.question('Nhập tiền lương(năm): ');
    }return wages;
}



