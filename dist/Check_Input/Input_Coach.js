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
exports.inputAllowanceCoach = exports.inputFactorWage = exports.inputYearExperience = exports.inputNameCoach = void 0;
const regString_1 = require("../Regex/regString");
const regNumber_1 = require("../Regex/regNumber");
const rl = __importStar(require("readline-sync"));
function inputNameCoach() {
    let RegString = new regString_1.regString();
    let name = rl.question('Nhập tên Coach: ');
    while (!RegString.Validate_String(name)) {
        console.log('Tên Coach không được có số và ký tự đặc biệt');
        name = rl.question('Nhập tên Coach:  ');
    }
    return name;
}
exports.inputNameCoach = inputNameCoach;
function inputYearExperience() {
    let RegNumber = new regNumber_1.regNumber();
    let turnCompetition = rl.question('Nhập số năm kinh nghiệm: ');
    while (!RegNumber.Validate_Number(turnCompetition)) {
        console.log('Số năm kinh nghiệm không được chứa chữ cái và ký tự đặc biệt');
        turnCompetition = rl.question('Nhập số năm kinh nghiệm:  ');
    }
    return turnCompetition;
}
exports.inputYearExperience = inputYearExperience;
function inputFactorWage() {
    let RegNumber = new regNumber_1.regNumber();
    let factorWage = rl.question('Nhập hệ số lương: ');
    while (!RegNumber.Validate_Number(factorWage)) {
        console.log('Hệ số lương không được chứa chữ cái và ký tự đặc biệt');
        factorWage = rl.question('Nhập hệ số lương:  ');
    }
    return factorWage;
}
exports.inputFactorWage = inputFactorWage;
function inputAllowanceCoach() {
    let RegNumber = new regNumber_1.regNumber();
    let allowanceCoach = rl.question('Nhập phụ cấp: ');
    while (!RegNumber.Validate_Number(allowanceCoach)) {
        console.log('Tiền phụ cấp không được chứa chữ cái và ký tự đặc biệt');
        allowanceCoach = rl.question('Nhập phụ cấp:  ');
    }
    return allowanceCoach;
}
exports.inputAllowanceCoach = inputAllowanceCoach;
