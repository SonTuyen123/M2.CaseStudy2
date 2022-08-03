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
    while (!RegString.Validate_String(name)) {
        console.log('Tên cầu thủ không được có số và ký tự đặc biệt ');
        name = rl.question('Nhập tên cầu thủ: ');
    }
    return name;
}
exports.inputNamePlayer = inputNamePlayer;
function inputNationality() {
    let RegString = new regString_1.regString();
    let nationality = rl.question('Quốc tịch: ');
    while (!RegString.Validate_String(nationality)) {
        console.log('Quốc tịch cầu thủ không được có số và ký tự đặc biệt ');
        nationality = rl.question('Quốc tịch: ');
    }
    return nationality;
}
exports.inputNationality = inputNationality;
function inputAge() {
    let RegNumber = new regNumber_1.regNumber();
    let age = rl.question('Nhập tuổi: ');
    while (!RegNumber.Validate_Number(age)) {
        console.log('Tuổi không được chứa chữ cái và ký tự đặc biệt ');
        age = rl.question('Nhập tuổi: ');
    }
    return age;
}
exports.inputAge = inputAge;
function inputBrithDay() {
    let RegDate = new regDate_1.regexDate();
    let birthDay = rl.question('Nhập ngày tháng năm sinh: ');
    while (!RegDate.Validate_Date(birthDay)) {
        console.log('Ngày tháng năm sinh phải có dạng DD / MM / YYYY hoặc DD-MM-YYYY ');
        birthDay = rl.question('NNhập ngày tháng năm sinh: ');
    }
    return birthDay;
}
exports.inputBrithDay = inputBrithDay;
function inputYear() {
    let RegYear = new regYear_1.regexYear();
    let year = rl.question('Nhập năm tham gia: ');
    while (!RegYear.Validate_Year(year)) {
        console.log('ăm tham gia phải từ 1950-2099 ');
        year = rl.question('Nhập năm tham gia: ');
    }
    return year;
}
exports.inputYear = inputYear;
function inputLocation() {
    let RegString = new regString_1.regString();
    let location = rl.question('Nhập vị trí thi đấu: ');
    while (!RegString.Validate_String(location)) {
        console.log('Vị trí thi đấu không được có số và ký tự đặc biệt ');
        location = rl.question('Nhập vị trí thi đấu: ');
    }
    return location;
}
exports.inputLocation = inputLocation;
function inputTurnCompetition() {
    let RegNumber = new regNumber_1.regNumber();
    let turnCompetition = rl.question('Nhập số lần thi đấu: ');
    while (!RegNumber.Validate_Number(turnCompetition)) {
        console.log('Số lần thi đấu không được chứa chữ cái và ký tự đặc biệt ');
        turnCompetition = rl.question('Nhập số lần thi đấu: ');
    }
    return turnCompetition;
}
exports.inputTurnCompetition = inputTurnCompetition;
function inputNumberGoals() {
    let RegNumber = new regNumber_1.regNumber();
    let numberGoals = rl.question('Nhập số bàn thắng đã có: ');
    while (!RegNumber.Validate_Number(numberGoals)) {
        console.log('Số bàn thắng không được chứa chữ cái và ký tự đặc biệt ');
        numberGoals = rl.question('hập số bàn thắng đã có: ');
    }
    return numberGoals;
}
exports.inputNumberGoals = inputNumberGoals;
function inputWages() {
    let RegNumber = new regNumber_1.regNumber();
    let wages = rl.question('Nhập tiền lương(năm): ');
    while (!RegNumber.Validate_Number(wages)) {
        console.log('Tiền lương không được chứa chữ cái và ký tự đặc biệt');
        wages = rl.question('Nhập tiền lương(năm): ');
    }
    return wages;
}
exports.inputWages = inputWages;
