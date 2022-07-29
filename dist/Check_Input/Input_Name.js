"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.inputWages = exports.inputNumberGoals = exports.inputTurnCompetition = exports.inputLocation = exports.inputYear = exports.inputBrithDay = exports.inputAge = exports.inputNationality = exports.inputNamePlayer = void 0;
const regString_1 = require("../Regex/regString");
const regNumber_1 = require("../Regex/regNumber");
const regDate_1 = require("../Regex/regDate");
const rl = __importStar(require("readline-sync"));
const regYear_1 = require("../Regex/regYear");
function inputNamePlayer() {
    let RegString = new regString_1.regString();
    let name = rl.question('Nhập tên cầu thủ: ');
    if (RegString.Validate_String(name)) {
        return name;
    }
    else {
        console.log('Tên cầu thủ không được có số và ký tự đặc biệt');
        console.log('Nhập lại ');
        inputNamePlayer();
    }
    return name;
}
exports.inputNamePlayer = inputNamePlayer;
function inputNationality() {
    let RegString = new regString_1.regString();
    let nationality = rl.question('Quốc tịch: ');
    if (RegString.Validate_String(nationality)) {
        return nationality;
    }
    else {
        console.log('Quốc tịch không được có số và ký tự đặc biệt');
        console.log('Nhập lại ');
        inputNationality();
    }
    return nationality;
}
exports.inputNationality = inputNationality;
function inputAge() {
    let RegNumber = new regNumber_1.regNumber();
    let age = rl.question('Nhập tuổi: ');
    if (RegNumber.Validate_Number(age)) {
        return age;
    }
    else {
        console.log('Tổi không được chứa chữ cái và ký tự đặc biệt');
        console.log('Nhập lại ');
        inputAge();
    }
    return age;
}
exports.inputAge = inputAge;
function inputBrithDay() {
    let RegDate = new regDate_1.regexDate();
    let birthDay = rl.question('Nhập ngày tháng năm sinh: ');
    if (RegDate.Validate_Date(birthDay)) {
        return birthDay;
    }
    else {
        console.log('Ngày tháng năm sinh phải có dạng DD / MM / YYYY hoặc DD-MM-YYYY');
        console.log('Nhập lại ');
        inputBrithDay();
    }
    return birthDay;
}
exports.inputBrithDay = inputBrithDay;
function inputYear() {
    let RegYear = new regYear_1.regexYear();
    let year = rl.question('Nhập năm tham gia: ');
    if (RegYear.Validate_Year(year)) {
        return year;
    }
    else {
        console.log('Năm tham gia phải từ 1900-2099');
        console.log('Nhập lại ');
        inputYear();
    }
    return year;
}
exports.inputYear = inputYear;
function inputLocation() {
    let RegString = new regString_1.regString();
    let location = rl.question('Nhập vị trí thi đấu: ');
    if (RegString.Validate_String(location)) {
        return location;
    }
    else {
        console.log('Vị trí thi đấu không được có số và ký tự đặc biệt');
        console.log('Nhập lại ');
        inputLocation();
    }
    return location;
}
exports.inputLocation = inputLocation;
function inputTurnCompetition() {
    let RegNumber = new regNumber_1.regNumber();
    let turnCompetition = rl.question('Nhập số lần thi đấu: ');
    if (RegNumber.Validate_Number(turnCompetition)) {
        return turnCompetition;
    }
    else {
        console.log('Số lần thi đấu không được chứa chữ cái và ký tự đặc biệt');
        console.log('Nhập lại ');
        inputTurnCompetition();
    }
    return turnCompetition;
}
exports.inputTurnCompetition = inputTurnCompetition;
function inputNumberGoals() {
    let RegNumber = new regNumber_1.regNumber();
    let numberGoals = rl.question('Nhập số lần thi đấu: ');
    if (RegNumber.Validate_Number(numberGoals)) {
        return numberGoals;
    }
    else {
        console.log('Số bàn thắng không được chứa chữ cái và ký tự đặc biệt');
        console.log('Nhập lại ');
        inputNumberGoals();
    }
    return numberGoals;
}
exports.inputNumberGoals = inputNumberGoals;
function inputWages() {
    let RegNumber = new regNumber_1.regNumber();
    let wages = rl.question('Nhập tiền lương(năm): ');
    if (RegNumber.Validate_Number(wages)) {
        return wages;
    }
    else {
        console.log('Tiền lương không được chứa chữ cái và ký tự đặc biệt');
        console.log('Nhập lại ');
        inputWages();
    }
    return wages;
}
exports.inputWages = inputWages;
