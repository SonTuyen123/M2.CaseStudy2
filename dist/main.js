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
const rl = __importStar(require("readline-sync"));
const ManagerUser_1 = require("./user/ManagerUser");
const User_1 = require("./user/User");
const PlayerFootball_1 = require("./Club/PlayerFootball");
const Coach_1 = require("./Club/Coach");
const Club_1 = require("./Club/Club");
const Manager_1 = require("./Club/Manager");
const EMUN_MENU_1 = require("./Enum/EMUN_MENU");
const ENUM_MENU_PLAYER_1 = require("./Enum/ENUM_MENU_PLAYER");
const EMUN_MENU_LOGIN_1 = require("./Enum/EMUN_MENU_LOGIN");
const EMUN_MENU_CLUB_1 = require("./Enum/EMUN_MENU_CLUB");
const menu_1 = require("./Menu/menu");
const menuLogin_1 = require("./Menu/menuLogin");
const menuPlayer_1 = require("./Menu/menuPlayer");
const menuClub_1 = require("./Menu/menuClub");
const regEmail_1 = require("./Regex/regEmail");
const regPassword_1 = require("./Regex/regPassword");
const Input_Player_1 = require("./Check_Input/Input_Player");
const Input_Coach_1 = require("./Check_Input/Input_Coach");
const Input_NameClub_1 = require("./Check_Input/Input_NameClub");
let UserManager = new ManagerUser_1.userManager();
let ManagersClub = new Manager_1.ManagerClub();
let PlayerFootball1 = new PlayerFootball_1.PlayerFootball('CR7', 'Việt Nam', 37, '27/01/2015', 2014, 'TIỀN DẠO ', '10', 20, 200000);
let PlayerFootball2 = new PlayerFootball_1.PlayerFootball('Messi', 'Việt Nam', 17, '2/01/2016', 2014, 'THỦ MÔN', '9', 0, 300000);
let PlayerFootball3 = new PlayerFootball_1.PlayerFootball('Kelvin', 'Việt Nam', 23, '7/08/2018', 2014, 'HẬU VỀ', '19', 9, 100000);
let PlayerFootball4 = new PlayerFootball_1.PlayerFootball('NGỌC', 'Việt Nam', 37, '27/01/1993', 2020, 'TIỀN DẠO ', '189', 21, 90000000);
let PlayerFootball5 = new PlayerFootball_1.PlayerFootball('KIỆT', 'Việt Nam', 17, '2/01/1998', 2020, 'THỦ MÔN', '19', 0, 80000000);
let PlayerFootball6 = new PlayerFootball_1.PlayerFootball('THAO', 'Việt Nam', 23, '7/08/1995', 2021, 'DỰ BỊ', '19', 99, 40000000);
let PlayerFootball7 = new PlayerFootball_1.PlayerFootball('NGUYỄN MINH ĐỨC', 'Việt Nam', 37, '27/01/1987', 2020, 'TIỀN DẠO ', '97', 12, 10);
let PlayerFootball8 = new PlayerFootball_1.PlayerFootball('KIÊN BÙI', 'Việt Nam', 17, '2/01/1995', 2020, 'THỦ MÔN', '19', 0, 800);
let PlayerFootball9 = new PlayerFootball_1.PlayerFootball('THAO PHẠM', 'Việt Nam', 23, '7/08/1994', 2021, 'DỰ BỊ', '19', 99, 4000);
let Coah1 = new Coach_1.Coach('CAO VĂN TUYEN', 'LÀO', 19, '09/10/2008', 2010, 3, 100, 90);
let Coah2 = new Coach_1.Coach('CAO VĂN A', 'THÁI', 19, '09/10/2010', 2011, 1, 99, 100);
let Coah3 = new Coach_1.Coach('CAO VĂN B', 'USA', 19, '09/10/2002', 2012, 5, 10, 50);
let club1 = new Club_1.Club('MU', Coah1);
club1.setPlayers(PlayerFootball1);
club1.setPlayers(PlayerFootball2);
club1.setPlayers(PlayerFootball3);
ManagersClub.addNewClub(club1);
let club2 = new Club_1.Club('MC', Coah2);
club2.setPlayers(PlayerFootball4);
club2.setPlayers(PlayerFootball5);
club2.setPlayers(PlayerFootball6);
ManagersClub.addNewClub(club2);
let club3 = new Club_1.Club('VIỆT NAM', Coah3);
club3.setPlayers(PlayerFootball7);
club3.setPlayers(PlayerFootball8);
club3.setPlayers(PlayerFootball9);
ManagersClub.addNewClub(club3);
function inputEmail() {
    let regexpNumber = new regEmail_1.regexEmail();
    let email = rl.question('Nhập địa chỉ email: ');
    while (!regexpNumber.Validate_Email(email)) {
        console.log('Email phải đúng kiểu @gmail.com mời nhập lại ');
        email = rl.question('Nhập địa chỉ email: ');
    }
    return email;
}
function inputPassword() {
    let passw = new regPassword_1.regexPassword();
    let password = rl.question('Nhập password: ');
    while (!passw.Validate_Pasword(password)) {
        console.log('Password phải từ 6 đến 10 ký tự trong đó có ít nhất một chữ số , một chữ hoa và một chữ thường.Mời nhập lại Password ');
        password = rl.question('Nhập password: ');
    }
    return password;
}
function userPlayer() {
    let email = rl.question('Nhập email: ');
    let password = rl.question('Nhập password: ');
    if (UserManager.checkUser(email, password)) {
        console.log('----------------------');
        console.log('Đăng nhập thành công !');
        menuPlayers();
    }
    else {
        console.log('Bạn đã nhập sai, mời bạn nhập lại !');
        userPlayer();
    }
}
function clubManager() {
    console.log('Nhập tài khoản admin ');
    checkEmailAdmin();
}
function checkEmailAdmin() {
    let regexpNumber = new regEmail_1.regexEmail();
    let email = rl.question('Nhập địa chỉ email admin: ');
    if (regexpNumber.Validate_Email(email)) {
        if (email === 'admin@gmail.com') {
            checkPasswordAdmin();
        }
        else {
            console.log('Email không đúng mời nhập lại ');
            checkEmailAdmin();
        }
    }
    else {
        console.log('Email phải đúng kiểu @gmail.com mời nhập lại ');
        checkEmailAdmin();
    }
}
function checkPasswordAdmin() {
    let passw = new regPassword_1.regexPassword();
    let password = rl.question('Nhập password: ');
    if (passw.Validate_Pasword(password)) {
        if (password === '1Aa123') {
            CallMenuClub();
        }
        else {
            console.log('Password không đúng.Mời nhập lại Password ');
            checkPasswordAdmin();
        }
    }
    else {
        console.log('Password phải từ 6 đến 10 ký tự trong đó có ít nhất một chữ số , một chữ hoa và một chữ thường.Mời nhập lại Password ');
        checkPasswordAdmin();
    }
}
function Register() {
    let email = inputEmail();
    let password = inputPassword();
    let newUser = new User_1.User(email, password);
    UserManager.addNewUser(newUser);
    console.log('Đăng nhập thành công !');
    console.table(UserManager.getAllUsers());
}
function inputPlayerFootball() {
    console.log('------------------');
    console.log('Nhập thông tin PlayerFootball');
    let name = (0, Input_Player_1.inputNamePlayer)();
    let nationality = (0, Input_Player_1.inputNationality)();
    let age = +(0, Input_Player_1.inputAge)();
    let birthDay = (0, Input_Player_1.inputBrithDay)();
    let yearOfJon = +(0, Input_Player_1.inputYear)();
    let location = (0, Input_Player_1.inputLocation)();
    let turnCompetition = (0, Input_Player_1.inputTurnCompetition)();
    let numberGoals = +(0, Input_Player_1.inputNumberGoals)();
    let wages = +(0, Input_Player_1.inputWages)();
    return new PlayerFootball_1.PlayerFootball(name, nationality, age, birthDay, yearOfJon, location, turnCompetition, numberGoals, wages);
}
function inputCoach() {
    console.log('------------------');
    console.log('Nhập thông tin Coach');
    let name = (0, Input_Coach_1.inputNameCoach)();
    let nationality = (0, Input_Player_1.inputNationality)();
    let age = +(0, Input_Player_1.inputAge)();
    let birthDay = (0, Input_Player_1.inputBrithDay)();
    let yearOfJon = +(0, Input_Player_1.inputYear)();
    let yearExperience = +(0, Input_Coach_1.inputYearExperience)();
    let factorWage = +(0, Input_Coach_1.inputFactorWage)();
    let allowanceCoach = +(0, Input_Coach_1.inputAllowanceCoach)();
    return new Coach_1.Coach(name, nationality, age, birthDay, yearOfJon, yearExperience, factorWage, allowanceCoach);
}
function addNewClub() {
    let player;
    let nameClub = (0, Input_NameClub_1.inputNameClub)();
    if (!ManagersClub.findClub(nameClub)) {
        let coach = inputCoach();
        let newClub = new Club_1.Club(nameClub, coach);
        let numberPlayers = rl.question('Nhập số lượng cầu thủ cần nhập: ');
        for (let i = 0; i < +numberPlayers; i++) {
            player = inputPlayerFootball();
            newClub.setPlayers(player);
        }
        ManagersClub.addNewClub(newClub);
    }
    else {
        console.log('CLB đã tồn tại !');
    }
}
function ShowClub() {
    console.log('------------------');
    console.log('Hiển thị toàn bộ các câu lạc bộ ');
    if (ManagersClub.getAllClub().length == 0) {
        console.log('Không có câu lạc bộ nào ! ');
    }
    else {
        ManagersClub.getAllClub().forEach((club, index) => {
            console.log(`Tên CLB: ${club.club} - Coach: ${club.coach.name}`);
            club.players.forEach((player, index) => {
                console.log(`Tên: ${player.name}\tTuổi: ${player.age}\tNgày sinh: ${player.birth}\tNăm gia nhập:${player.yearOfJon}\tVị trí thi đấu:${player.location}\t Số lần thi đấu:${player.turnCompetition}\t Số bàn thắng:${player.numberGoal}\tLương:${player.wagePlayer()}VND`);
            });
        });
    }
}
function SortPlayerByName() {
    ManagersClub.SortNamePlayers();
}
function deleteClub() {
    let nameClub = rl.question('Nhập tên câu lạc bộ muốn xóa: ');
    ManagersClub.deleteClub(nameClub);
}
function addNewPlayerInClub() {
    let nameClub = rl.question('Nhập tên câu lạc bộ muốn thêm cầu thủ: ');
    if (!ManagersClub.findClub(nameClub)) {
        console.log(`Không tồn tại câu lạc bộ ${nameClub}`);
        addNewPlayerInClub();
    }
    else {
        let inputPlayer = inputPlayerFootball();
        ManagersClub.addNewPlayer(nameClub, inputPlayer);
    }
}
function deletePlayerInClub() {
    let nameClub = rl.question('Nhập tên câu lạc bộ muốn xóa cầu thủ: ');
    if (!ManagersClub.findClub(nameClub)) {
        console.log(`Câu lạc bộ ${nameClub} không tồn tại ! Mời nhập lại !`);
        deletePlayerInClub();
    }
    else {
        let namePlayer = rl.question('Nhập tên cầu thủ cần xóa: ');
        ManagersClub.deletePlayer(nameClub, namePlayer);
    }
}
function editPllayer() {
    let nameClub = rl.question('Nhập tên câu lạc bộ muốn chỉnh sửa cầu thủ: ');
    let namePlayer = rl.question('Nhập tên cầu thủ cần chỉnh sửa: ');
    let player = inputPlayerFootball();
    ManagersClub.editPlayer(nameClub, namePlayer, player);
}
function findPlayersInClub() {
    let namePlayer = rl.question('Nhập tên cầu thủ cần tìn: ');
    ManagersClub.findPlayersinClub(namePlayer);
}
function CallMenuClub() {
    let chon;
    do {
        (0, menuClub_1.menuClub)();
        chon = +rl.question('Nhập lựa chọn: ');
        switch (chon) {
            case EMUN_MENU_CLUB_1.EMUN_MENU_CLUB.CASE_ONE:
                ShowClub();
                break;
            case EMUN_MENU_CLUB_1.EMUN_MENU_CLUB.CASE_TWO:
                addNewClub();
                break;
            case EMUN_MENU_CLUB_1.EMUN_MENU_CLUB.CASE_THREE:
                deleteClub();
                break;
            case EMUN_MENU_CLUB_1.EMUN_MENU_CLUB.CASE_FOUR:
                addNewPlayerInClub();
                break;
            case EMUN_MENU_CLUB_1.EMUN_MENU_CLUB.CASE_FIVE:
                deletePlayerInClub();
                break;
            case EMUN_MENU_CLUB_1.EMUN_MENU_CLUB.CASE_SIX:
                break;
            default:
                console.log('Nhập lại !');
        }
    } while (chon != 6);
}
function login() {
    let choice;
    do {
        (0, menuLogin_1.menuLogin)();
        choice = +rl.question('Nhập lựa chọn: ');
        switch (choice) {
            case EMUN_MENU_LOGIN_1.EMUN_MENU_LOGIN.CASE_ONE:
                clubManager();
                break;
            case EMUN_MENU_LOGIN_1.EMUN_MENU_LOGIN.CASE_TWO:
                userPlayer();
                break;
            case EMUN_MENU_LOGIN_1.EMUN_MENU_LOGIN.CASE_THREE:
                break;
            default:
                console.log('Bạn đã nhập sai, vui lòng nhập lại !');
        }
    } while (choice != 3);
}
function menuPlayers() {
    let choices;
    do {
        (0, menuPlayer_1.menuPlayer)();
        choices = +rl.question('Nhập lựa chọn: ');
        switch (choices) {
            case ENUM_MENU_PLAYER_1.ENUM_MENU_PLAYER.CASE_ONE:
                ShowClub();
                break;
            case ENUM_MENU_PLAYER_1.ENUM_MENU_PLAYER.CASE_TWO:
                addNewClub();
                break;
            case ENUM_MENU_PLAYER_1.ENUM_MENU_PLAYER.CASE_THREE:
                addNewPlayerInClub();
                break;
            case ENUM_MENU_PLAYER_1.ENUM_MENU_PLAYER.CASE_FOUR:
                deletePlayerInClub();
                break;
            case ENUM_MENU_PLAYER_1.ENUM_MENU_PLAYER.CASE_FIVE:
                editPllayer();
                break;
            case ENUM_MENU_PLAYER_1.ENUM_MENU_PLAYER.CASE_SIX:
                findPlayersInClub();
                break;
            case ENUM_MENU_PLAYER_1.ENUM_MENU_PLAYER.CASE_SEVEN:
                SortPlayerByName();
                break;
            case ENUM_MENU_PLAYER_1.ENUM_MENU_PLAYER.CASE_NIGHT:
                break;
            default:
                console.log('Bạn đã nhập sai !');
        }
    } while (choices != 8);
}
let chon;
do {
    (0, menu_1.menu)();
    chon = +rl.question('Nhập lựa chọn: ');
    switch (chon) {
        case EMUN_MENU_1.EMUN_MENU.CASE_ONE:
            login();
            break;
        case EMUN_MENU_1.EMUN_MENU.CASE_TWO:
            Register();
            break;
        case EMUN_MENU_1.EMUN_MENU.CASE_ZERO:
            break;
        default:
            console.log('Mời bạn nhập lại ');
    }
} while (chon != 0);
