import * as rl from 'readline-sync';
import {userManager} from "./user/ManagerUser";
import {User} from "./user/User";
import {PlayerFootball} from "./Club/PlayerFootball";
import {Coach} from "./Club/Coach";
import {Club} from "./Club/Club";
import {ManagerClub} from "./Club/Manager";
import {ENUM} from "./Enum/ENUM";
import {menu} from "./Menu/menu";
import {menuLogin} from "./Menu/menuLogin";
import {menuPlayer} from "./Menu/menuPlayer";
import {menuClub} from "./Menu/menuClub";
import {regexEmail} from "./Regex/regEmail";
import {regexPassword} from "./Regex/regPassword";

let UserManager = new userManager();

let ManagersClub = new ManagerClub()

let choice;

function inputEmail() {
    let regexpNumber = new regexEmail();
    let email = rl.question('Nhập địa chỉ email: ');
    while (!regexpNumber.Validate_Email(email)) {
        console.log('Email phải đúng kiểu @gmail.com mời nhập lại ');
        email = rl.question('Nhập địa chỉ email: ');
    }
    return email;
}

function inputPassword() {
    let passw = new regexPassword();
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
        console.log('Đăng nhập thành công !')
        menuPlayers();
    } else {
        console.log('Bạn đã nhập sai, mời bạn nhập lại !');
        userPlayer();
    }
}

function clubManager() {
    console.log('Nhập tài khoản admin ');
    checkEmailAdmin();
}

function checkEmailAdmin() {
    let regexpNumber = new regexEmail();
    let email = rl.question('Nhập địa chỉ email admin: ');
    if (regexpNumber.Validate_Email(email)) {
        if (email === 'admin@gmail.com') {
            checkPasswordAdmin();
        } else {
            console.log('Email không đúng mời nhập lại ');
            checkEmailAdmin();
        }
    } else {
        console.log('Email phải đúng kiểu @gmail.com mời nhập lại ');
        checkEmailAdmin();
    }
}

function checkPasswordAdmin() {
    let passw = new regexPassword();
    let password = rl.question('Nhập password: ');
    if (passw.Validate_Pasword(password)) {
        if (password === '1Aa123') {
            CallMenuClub();
        } else {
            console.log('Password không đúng.Mời nhập lại Password ');
            checkPasswordAdmin();
        }
    } else {
        console.log('Password phải từ 6 đến 10 ký tự trong đó có ít nhất một chữ số , một chữ hoa và một chữ thường.Mời nhập lại Password ');
        checkPasswordAdmin();
    }
}

function Register() {
    let email = inputEmail();
    let password = inputPassword();
    let newUser = new User(email, password);
    UserManager.addNewUser(newUser);
    console.log('Đăng nhập thành công !');
    console.table(UserManager.getAllUsers());
}

function inputPlayerFootball() {
    console.log('------------------');
    console.log('Nhập thông tin PlayerFootball');
    let name = rl.question('Nhập tên cầu thủ: ');
    let nationality = rl.question('Nhập quốc tịch: ');
    let age = rl.question('Nhập tuổi: ');
    let birthDay = rl.question('Nhập ngày tháng năm sinh: ');
    let yearOfJon = +rl.question('Nhập năm tham gia: ');
    let location = rl.question('Nhập vị trí thi đấu: ');
    let turnCompetition = rl.question('Nhập số lần thi đấu: ');
    let numberGoals = +rl.question('Nhập số bàn thắng ghi được: ');
    let wages = +rl.question('Nhập tiền lương(năm): ');
    return new PlayerFootball(name, nationality, age, birthDay, yearOfJon, location, turnCompetition, numberGoals, wages);
}

function inputCoach() {
    console.log('------------------')
    console.log('Nhập thông tin Coach');
    let name = rl.question('Nhập tên Coach: ');
    let nationality = rl.question('Nhập quốc tịch: ');
    let age = rl.question('Nhập tuổi: ');
    let birthDay = rl.question('Nhập ngày tháng năm sinh: ');
    let yearOfJon = +rl.question('Nhập năm tham gia: ');
    let yearExperience = +rl.question('Nhập số năm kinh nghiệm: ');
    let factorWage = +rl.question('Nhập hệ số lương: ');
    let allowanceCoach = +rl.question('Nhập phụ cấp: ');
    return new Coach(name, nationality, age, birthDay, yearOfJon, yearExperience, factorWage, allowanceCoach)
}

function addNewClub() {
    let player;
    let nameClub = rl.question('Nhập tên Câu lạc bộ: ');
    if(!ManagersClub.findClub(nameClub)){
        let coach = inputCoach();
        let newClub = new Club(nameClub, coach);
        let numberPlayers = rl.question('Nhập số lượng cầu thủ cần nhập: ');
        for (let i = 0; i < +numberPlayers; i++) {
            player = inputPlayerFootball()
            newClub.setPlayers(player)
        }
        ManagersClub.addNewClub(newClub)
    }else {
        console.log('CLB đã tồn tại !');
    }
}

function ShowClub() {
    console.log('------------------');
    console.log('Hiển thị toàn bộ các câu lạc bộ ');
    ManagersClub.getAllClub().forEach((club, index) => {
        console.log(`\nTên CLB: ${club.club} - Coach: ${club.coach.name}`)
        club.players.forEach((player, index) => {
            console.log(`Tên: ${player.name}\tTuổi: ${player.age}\tNgày sinh: ${player.birth}\tNăm gia nhập:${player.yearOfJon}\tVị trí thi đấu:${player.location}\t Số lần thi đấu:${player.turnCompetition}\t Số bàn thắng:${player.numberGoal}\tLương:${player.wagePlayer()}VND`);
        })
    })
}
function SortPlayerByName(){
    ManagersClub.SortNamePlayers();
}

function deleteClub() {
    let nameClub = rl.question('Nhập tên câu lạc bộ muốn xóa: ');
    ManagersClub.deleteClub(nameClub);
}

function addNewPlayerInClub() {
    let nameClub = rl.question('Nhập tên câu lạc bộ muốn them cầu thủ: ');
    let inputPlayer = inputPlayerFootball();
    ManagersClub.addNewPlayer(nameClub, inputPlayer);
}

function deletePlayerInClub() {
    let nameClub = rl.question('Nhập tên câu lạc bộ muốn xóa cầu thủ: ');
    let namePlayer = rl.question('Nhập tên cầu thủ cần xóa: ');
    ManagersClub.deletePlayer(nameClub, namePlayer);
}

function editPllayer() {
    let nameClub = rl.question('Nhập tên câu lạc bộ muốn chỉnh sửa cầu thủ: ');
    let namePlayer = rl.question('Nhập tên cầu thủ cần chỉnh sửa: ');
    let player = inputPlayerFootball()
    ManagersClub.editPlayer(nameClub, namePlayer, player);
}

function findPlayersInClub() {
    let namePlayer = rl.question('Nhập tên cầu thủ cần tìn: ');
    ManagersClub.findPlayersinClub(namePlayer);
}

function CallMenuClub() {
    let chon;
    do {
        menuClub();
        chon = +rl.question('Nhập lựa chọn: ');
        switch (chon) {
            case ENUM.CASE_ONE:
                ShowClub();
                break;
            case ENUM.CASE_TWO:
                addNewClub();
                break;
            case ENUM.CASE_THREE:
                deleteClub();
                break;
            case ENUM.CASE_FOUR:
                addNewPlayerInClub();
                break;
            case ENUM.CASE_FIVE:
                deletePlayerInClub();
                break;
            case ENUM.CASE_ZERO:
                break;
            default:
                console.log('Nhập lại !');
        }

    } while (chon != 0)
}

function login() {
    do {
        menuLogin();
        choice = +rl.question('Nhập lựa chọn: ');
        switch (choice) {
            case ENUM.CASE_ONE:
                clubManager();
                break;
            case ENUM.CASE_TWO:
                userPlayer();
                break;
            case ENUM.CASE_THREE:
                break;
            default:
                console.log('Bạn đã nhập sai, vui lòng nhập lại !');
        }
    } while (choice != 3);
}

function menuPlayers() {
    do {
        menuPlayer()
        choices = +rl.question('Nhập lựa chọn: ');
        switch (choices) {
            case ENUM.CASE_ONE:
                ShowClub();
                break;
            case ENUM.CASE_TWO:
                addNewClub();
                break;
            case ENUM.CASE_THREE:
                addNewPlayerInClub();
                break;
            case ENUM.CASE_FOUR:
                deletePlayerInClub();
                break;
            case ENUM.CASE_FIVE:
                editPllayer();
                break;
            case ENUM.CASE_SIX:
                findPlayersInClub();
                break;
            case ENUM.CASE_SEVEN:
                SortPlayerByName();
                break;
            case ENUM.CASE_NIGHT:
                break;
            default:
                console.log('Bạn đã nhập sai !');
        }
    } while (choices != 8);
}

do {
    menu();
    choice = +rl.question('Nhập lựa chọn: ');
    switch (choice) {
        case ENUM.CASE_ONE:
            login();
            break;
        case ENUM.CASE_TWO:
            Register();
            break;
        case ENUM.CASE_THREE:
            console.table(Array);
            break;
        case ENUM.CASE_ZERO:
            break;
        default:
            console.log('Mời bạn nhập lại ');
    }
} while (choice != 0);

let choices;



