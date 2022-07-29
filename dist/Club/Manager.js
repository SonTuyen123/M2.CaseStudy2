"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagerClub = void 0;
class ManagerClub {
    getAllClub() {
        return ManagerClub.clubs;
    }
    addNewClub(club) {
        ManagerClub.clubs.push(club);
    }
    updateClub(index, club) {
        ManagerClub.clubs[index] = club;
    }
    findClub(name) {
        let flag = false;
        ManagerClub.clubs.forEach((club, index) => {
            if (club.club === name)
                return flag = true;
        });
        return flag;
    }
    deleteClub(name) {
        for (let i = 0; i < ManagerClub.clubs.length; i++) {
            if (ManagerClub.clubs[i].club === name) {
                ManagerClub.clubs.splice(i, 1);
            }
        }
    }
    deletePlayer(nameclub, name) {
        for (let i = 0; i < ManagerClub.clubs.length; i++) {
            ManagerClub.clubs.forEach((club, index) => {
                if (club.club === nameclub) {
                    club.players.forEach((player, index) => {
                        if (player.name === name) {
                            club.players.splice(index, 1);
                        }
                    });
                }
            });
        }
    }
    addNewPlayer(nameClub, player) {
        ManagerClub.clubs.forEach((club, index) => {
            if (club.club === nameClub) {
                club.players.push(player);
            }
            else {
                console.log('Không tồn tại CLB này');
            }
        });
    }
    editPlayer(nameclub, name, players) {
        ManagerClub.clubs.forEach((club, index) => {
            if (club.club === nameclub) {
                club.players.forEach((player, index) => {
                    if (player.name[index] === name) {
                        club.players[index] = players;
                    }
                });
            }
        });
    }
    findPlayersinClub(name) {
        ManagerClub.clubs.forEach((club, index) => {
            club.players.forEach((player, index) => {
                if (player.name.toLowerCase().includes(name.toLowerCase())) {
                    console.log(`
                    - Tên CLB:${club.club}
                    - Huấn luyện viên:${club.coach.name}
                    - Tên cầu thủ:${club.players[index].name}
                    - Quốc tịch:${club.players[index].nationality}
                    - Ngày sinh:${club.players[index].age}
                    - Số bàn thắng đạt được:${club.players[index].numberGoal}
                    - Mức lương:${club.players[index].wagePlayer()}`);
                }
            });
        });
    }
    SortNamePlayers() {
        ManagerClub.clubs.forEach((club, index) => {
            club.players.sort(function (a, b) {
                if (a.name.toLowerCase() < b.name.toLowerCase())
                    return -1;
                if (a.name.toLowerCase() > b.name.toLowerCase())
                    return 1;
                return 0;
            });
        });
        ManagerClub.clubs.forEach((club, index) => {
            console.log(`\n Tên CLB:${club.club}- Coach: ${club.coach.name}`);
            club.players.forEach((player, index) => {
                console.log(`
                - Tên:${player.name}
                - Tuổi:${player.age}
                - Ngày sinh:${player.birth}
                - Năm gia nhập:${player.yearOfJon}
                - Vị trí thi đấu:${player.location}
                - Số lần thi đấu:${player.turnCompetition}
                - Số bàn thắng:${player.numberGoal}
                - Lương:${player.wagePlayer()}`);
            });
        });
    }
}
exports.ManagerClub = ManagerClub;
ManagerClub.clubs = [];
