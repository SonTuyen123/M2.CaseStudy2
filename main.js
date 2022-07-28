"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rl = require("readline-sync");
var ManagerUser_1 = require("./user/ManagerUser");
var User_1 = require("./user/User");
var PlayerFootball_1 = require("./Club/PlayerFootball");
var Coach_1 = require("./Club/Coach");
var Club_1 = require("./Club/Club");
var Manager_1 = require("./Club/Manager");
var ENUM_1 = require("./Enum/ENUM");
var menu_1 = require("./Menu/menu");
var menuLogin_1 = require("./Menu/menuLogin");
var menuPlayer_1 = require("./Menu/menuPlayer");
var menuClub_1 = require("./Menu/menuClub");
var regEmail_1 = require("./Regex/regEmail");
var regPassword_1 = require("./Regex/regPassword");
var UserManager = new ManagerUser_1.userManager();
var ManagersClub = new Manager_1.ManagerClub();
var choice;
function inputEmail() {
    var regexpNumber = new regEmail_1.regexEmail();
    var email = rl.question('Nhập địa chỉ email: ');
    while (!regexpNumber.Validate_Email(email)) {
        console.log('Email phải đúng kiểu @gmail.com mời nhập lại ');
        email = rl.question('Nhập địa chỉ email: ');
    }
    return email;
}
function inputPassword() {
    var passw = new regPassword_1.regexPassword();
    var password = rl.question('Nhập password: ');
    while (!passw.Validate_Pasword(password)) {
        console.log('Password phải từ 6 đến 10 ký tự trong đó có ít nhất một chữ số , một chữ hoa và một chữ thường.Mời nhập lại Password ');
        password = rl.question('Nhập password: ');
    }
    return password;
}
function userPlayer() {
    var email = rl.question('Nhập email: ');
    var password = rl.question('Nhập password: ');
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
    var regexpNumber = new regEmail_1.regexEmail();
    var email = rl.question('Nhập địa chỉ email admin: ');
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
    var passw = new regPassword_1.regexPassword();
    var password = rl.question('Nhập password: ');
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
    var email = inputEmail();
    var password = inputPassword();
    var newUser = new User_1.User(email, password);
    UserManager.addNewUser(newUser);
    console.log('Đăng nhập thành công !');
    console.table(UserManager.getAllUsers());
}
function inputPlayerFootball() {
    console.log('------------------');
    console.log('Nhập thông tin PlayerFootball');
    var name = rl.question('Nhập tên cầu thủ: ');
    var nationality = rl.question('Nhập quốc tịch: ');
    var age = rl.question('Nhập tuổi: ');
    var birthDay = rl.question('Nhập ngày tháng năm sinh: ');
    var yearOfJon = +rl.question('Nhập năm tham gia: ');
    var location = rl.question('Nhập vị trí thi đấu: ');
    var turnCompetition = rl.question('Nhập số lần thi đấu: ');
    var numberGoals = +rl.question('Nhập số bàn thắng ghi được: ');
    var wages = +rl.question('Nhập tiền lương(năm): ');
    return new PlayerFootball_1.PlayerFootball(name, nationality, age, birthDay, yearOfJon, location, turnCompetition, numberGoals, wages);
}
function inputCoach() {
    console.log('------------------');
    console.log('Nhập thông tin Coach');
    var name = rl.question('Nhập tên Coach: ');
    var nationality = rl.question('Nhập quốc tịch: ');
    var age = rl.question('Nhập tuổi: ');
    var birthDay = rl.question('Nhập ngày tháng năm sinh: ');
    var yearOfJon = +rl.question('Nhập năm tham gia: ');
    var yearExperience = +rl.question('Nhập số năm kinh nghiệm: ');
    var factorWage = +rl.question('Nhập hệ số lương: ');
    var allowanceCoach = +rl.question('Nhập phụ cấp: ');
    return new Coach_1.Coach(name, nationality, age, birthDay, yearOfJon, yearExperience, factorWage, allowanceCoach);
}
function addNewClub() {
    var player;
    var nameClub = rl.question('Nhập tên Câu lạc bộ: ');
    if (!ManagersClub.findClub(nameClub)) {
        var coach = inputCoach();
        var newClub = new Club_1.Club(nameClub, coach);
        var numberPlayers = rl.question('Nhập số lượng cầu thủ cần nhập: ');
        for (var i = 0; i < +numberPlayers; i++) {
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
        ManagersClub.getAllClub().forEach(function (club, index) {
            console.log("T\u00EAn CLB: ".concat(club.club, " - Coach: ").concat(club.coach.name));
            club.players.forEach(function (player, index) {
                console.log("T\u00EAn: ".concat(player.name, "\tTu\u1ED5i: ").concat(player.age, "\tNg\u00E0y sinh: ").concat(player.birth, "\tN\u0103m gia nh\u1EADp:").concat(player.yearOfJon, "\tV\u1ECB tr\u00ED thi \u0111\u1EA5u:").concat(player.location, "\t S\u1ED1 l\u1EA7n thi \u0111\u1EA5u:").concat(player.turnCompetition, "\t S\u1ED1 b\u00E0n th\u1EAFng:").concat(player.numberGoal, "\tL\u01B0\u01A1ng:").concat(player.wagePlayer(), "VND"));
            });
        });
    }
}
function SortPlayerByName() {
    ManagersClub.SortNamePlayers();
}
function deleteClub() {
    var nameClub = rl.question('Nhập tên câu lạc bộ muốn xóa: ');
    ManagersClub.deleteClub(nameClub);
}
function addNewPlayerInClub() {
    var nameClub = rl.question('Nhập tên câu lạc bộ muốn thêm cầu thủ: ');
    if (!ManagersClub.findClub(nameClub)) {
        console.log("Kh\u00F4ng t\u1ED3n t\u1EA1i c\u00E2u l\u1EA1c b\u1ED9 ".concat(nameClub));
        addNewPlayerInClub();
    }
    else {
        var inputPlayer = inputPlayerFootball();
        ManagersClub.addNewPlayer(nameClub, inputPlayer);
    }
}
function deletePlayerInClub() {
    var nameClub = rl.question('Nhập tên câu lạc bộ muốn xóa cầu thủ: ');
    if (!ManagersClub.findClub(nameClub)) {
        console.log("C\u00E2u l\u1EA1c b\u1ED9 ".concat(nameClub, " kh\u00F4ng t\u1ED3n t\u1EA1i ! M\u1EDDi nh\u1EADp l\u1EA1i !"));
        deletePlayerInClub();
    }
    else {
        var namePlayer = rl.question('Nhập tên cầu thủ cần xóa: ');
        ManagersClub.deletePlayer(nameClub, namePlayer);
    }
}
function editPllayer() {
    var nameClub = rl.question('Nhập tên câu lạc bộ muốn chỉnh sửa cầu thủ: ');
    var namePlayer = rl.question('Nhập tên cầu thủ cần chỉnh sửa: ');
    var player = inputPlayerFootball();
    ManagersClub.editPlayer(nameClub, namePlayer, player);
}
function findPlayersInClub() {
    var namePlayer = rl.question('Nhập tên cầu thủ cần tìn: ');
    ManagersClub.findPlayersinClub(namePlayer);
}
function CallMenuClub() {
    var chon;
    do {
        (0, menuClub_1.menuClub)();
        chon = +rl.question('Nhập lựa chọn: ');
        switch (chon) {
            case ENUM_1.ENUM.CASE_ONE:
                ShowClub();
                break;
            case ENUM_1.ENUM.CASE_TWO:
                addNewClub();
                break;
            case ENUM_1.ENUM.CASE_THREE:
                deleteClub();
                break;
            case ENUM_1.ENUM.CASE_FOUR:
                addNewPlayerInClub();
                break;
            case ENUM_1.ENUM.CASE_FIVE:
                deletePlayerInClub();
                break;
            case ENUM_1.ENUM.CASE_SIX:
                break;
            default:
                console.log('Nhập lại !');
        }
    } while (chon != 6);
}
function login() {
    do {
        (0, menuLogin_1.menuLogin)();
        choice = +rl.question('Nhập lựa chọn: ');
        switch (choice) {
            case ENUM_1.ENUM.CASE_ONE:
                clubManager();
                break;
            case ENUM_1.ENUM.CASE_TWO:
                userPlayer();
                break;
            case ENUM_1.ENUM.CASE_THREE:
                break;
            default:
                console.log('Bạn đã nhập sai, vui lòng nhập lại !');
        }
    } while (choice != 3);
}
function menuPlayers() {
    do {
        (0, menuPlayer_1.menuPlayer)();
        choices = +rl.question('Nhập lựa chọn: ');
        switch (choices) {
            case ENUM_1.ENUM.CASE_ONE:
                ShowClub();
                break;
            case ENUM_1.ENUM.CASE_TWO:
                addNewClub();
                break;
            case ENUM_1.ENUM.CASE_THREE:
                addNewPlayerInClub();
                break;
            case ENUM_1.ENUM.CASE_FOUR:
                deletePlayerInClub();
                break;
            case ENUM_1.ENUM.CASE_FIVE:
                editPllayer();
                break;
            case ENUM_1.ENUM.CASE_SIX:
                findPlayersInClub();
                break;
            case ENUM_1.ENUM.CASE_SEVEN:
                SortPlayerByName();
                break;
            case ENUM_1.ENUM.CASE_NIGHT:
                break;
            default:
                console.log('Bạn đã nhập sai !');
        }
    } while (choices != 8);
}
do {
    (0, menu_1.menu)();
    choice = +rl.question('Nhập lựa chọn: ');
    switch (choice) {
        case ENUM_1.ENUM.CASE_ONE:
            login();
            break;
        case ENUM_1.ENUM.CASE_TWO:
            Register();
            break;
        case ENUM_1.ENUM.CASE_THREE:
            console.table(Array);
            break;
        case ENUM_1.ENUM.CASE_ZERO:
            break;
        default:
            console.log('Mời bạn nhập lại ');
    }
} while (choice != 0);
var choices;
