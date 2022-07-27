"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagerClub = void 0;
var ManagerClub = /** @class */ (function () {
    function ManagerClub() {
    }
    ManagerClub.prototype.getAllClub = function () {
        return ManagerClub.clubs;
    };
    ManagerClub.prototype.addNewClub = function (club) {
        ManagerClub.clubs.push(club);
    };
    ManagerClub.prototype.updateClub = function (index, club) {
        ManagerClub.clubs[index] = club;
    };
    ManagerClub.prototype.findClub = function (name) {
        var flag = false;
        ManagerClub.clubs.forEach(function (club, index) {
            if (club.club === name)
                return flag = true;
        });
        return flag;
    };
    ManagerClub.prototype.deleteClub = function (name) {
        for (var i = 0; i < ManagerClub.clubs.length; i++) {
            if (ManagerClub.clubs[i].club === name) {
                ManagerClub.clubs.splice(i, 1);
            }
        }
    };
    ManagerClub.prototype.deletePlayer = function (nameclub, name) {
        ManagerClub.clubs.forEach(function (club, index) {
            if (club.club === nameclub) {
                club.players.forEach(function (player, index) {
                    if (player.name === name) {
                        club.players.splice(index, 1);
                    }
                });
            }
            else {
                console.log('không có câu lạc bộ ');
            }
        });
    };
    ManagerClub.prototype.addNewPlayer = function (nameClub, player) {
        ManagerClub.clubs.forEach(function (club, index) {
            if (club.club === nameClub) {
                club.setPlayers(player);
            }
            else {
                console.log('Không tồn tại CLB này');
            }
        });
    };
    ManagerClub.prototype.editPlayer = function (nameclub, name, players) {
        ManagerClub.clubs.forEach(function (club, index) {
            if (club.club === nameclub) {
                club.players.forEach(function (player, index) {
                    if (player.name === name) {
                        club.players[index] = players;
                    }
                });
            }
        });
    };
    ManagerClub.prototype.findPlayersinClub = function (name) {
        ManagerClub.clubs.forEach(function (club, index) {
            club.players.forEach(function (player, index) {
                if (player.name === name) {
                    return ("T\u00EAn CLB: ".concat(club.club, "\tHu\u1EA5n luy\u1EC7n vi\u00EAn:").concat(club.coach.name, "\t T\u00EAn c\u1EA7u th\u1EE7:").concat(club.players[index].name, "\tQu\u1ED1c t\u1ECBch:").concat(club.players[index].nationality, "\t Ng\u00E0y sinh:").concat(club.players[index].age, "\t S\u1ED1 b\u00E0n th\u1EAFng \u0111\u1EA1t \u0111\u01B0\u1EE3c:").concat(club.players[index].numberGoal, "\t M\u1EE9c l\u01B0\u01A1ng:").concat(club.players[index].wagePlayer()));
                }
            });
        });
    };
    ManagerClub.prototype.SortNamePlayers = function () {
        ManagerClub.clubs.forEach(function (club, index) {
            club.players.sort(function (a, b) {
                if (a.name.toLowerCase() < b.name.toLowerCase())
                    return -1;
                if (a.name.toLowerCase() > b.name.toLowerCase())
                    return 1;
                return 0;
            });
        });
        ManagerClub.clubs.forEach(function (club, index) {
            console.log("\n T\u00EAn CLB:".concat(club.club, "- Coach: ").concat(club.coach.name));
            club.players.forEach(function (player, index) {
                console.log("T\u00EAn: ".concat(player.name, "\tTu\u1ED5i: ").concat(player.age, "\tNg\u00E0y sinh: ").concat(player.birth, "\tN\u0103m gia nh\u1EADp:").concat(player.yearOfJon, "\tV\u1ECB tr\u00ED thi \u0111\u1EA5u:").concat(player.location, "\tS\u1ED1 l\u1EA7n thi \u0111\u1EA5u:").concat(player.turnCompetition, "\tS\u1ED1 b\u00E0n th\u1EAFng:").concat(player.numberGoal, "\tL\u01B0\u01A1ng:").concat(player.wagePlayer()));
            });
        });
    };
    ManagerClub.clubs = [];
    return ManagerClub;
}());
exports.ManagerClub = ManagerClub;
