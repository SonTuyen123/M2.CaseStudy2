import {Club} from "./Club";
import {PlayerFootball} from "./PlayerFootball";

export class ManagerClub  {
    private static clubs: Club[] = [];

    getAllClub(): Club[] {
        return ManagerClub.clubs
    }

    addNewClub(club: Club) {
        ManagerClub.clubs.push(club);
    }

    updateClub(index: number, club: Club): void {
        ManagerClub.clubs[index] = club;
    }

    findClub(name: string): boolean {
        let flag: boolean = false;
        ManagerClub.clubs.forEach((club, index) => {
            if (club.club === name) return flag = true;
        });
        return flag;
    }

    deleteClub(name: string): void {
        for (let i = 0; i < ManagerClub.clubs.length; i++) {
            if (ManagerClub.clubs[i].club === name) {
                ManagerClub.clubs.splice(i, 1);
            }
        }
    }

    deletePlayer(nameclub: string, name: string): void {
        for (let i = 0; i < ManagerClub.clubs.length; i++) {
            ManagerClub.clubs.forEach((club, index) => {
                if (club.club === nameclub) {
                    club.players.forEach((player, index) => {
                        if (player.name === name) {
                            club.players.splice(index, 1);
                        }
                    })
                }
            })
        }
    }

    addNewPlayer(nameClub: string, player: PlayerFootball) {
        ManagerClub.clubs.forEach((club, index) => {
            if (club.club === nameClub) {
                club.players.push(player)
            } else {
                console.log('Không tồn tại CLB này');
            }
        })
    }

    editPlayer(nameclub: string, name: string, players: PlayerFootball): void {
        ManagerClub.clubs.forEach((club, index) => {
            if (club.club === nameclub) {
                club.players.forEach((player, index) => {
                    if (player.name[index] === name) {
                        club.players[index] = players
                    }
                })
            }
        })
    }

    findPlayersinClub(name: string) {
        ManagerClub.clubs.forEach((club, index) => {
            club.players.forEach((player, index) => {
                if (player.name.toLowerCase().includes(name.toLowerCase())) {
                    console.log(`Tên CLB: ${club.club}\tHuấn luyện viên:${club.coach.name}\t Tên cầu thủ:${club.players[index].name}\tQuốc tịch:${club.players[index].nationality}\t Ngày sinh:${club.players[index].age}\t Số bàn thắng đạt được:${club.players[index].numberGoal}\t Mức lương:${club.players[index].wagePlayer()}`)
                }
            })
        })
    }

    SortNamePlayers() {
        ManagerClub.clubs.forEach((club, index) => {
            club.players.sort(function (a, b) {
                if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
                if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
                return 0;
            })
        })
        ManagerClub.clubs.forEach((club, index) => {
            console.log(`\n Tên CLB:${club.club}- Coach: ${club.coach.name}`)
            club.players.forEach((player, index) => {
                console.log(`Tên: ${player.name}\tTuổi: ${player.age}\tNgày sinh: ${player.birth}\tNăm gia nhập:${player.yearOfJon}\tVị trí thi đấu:${player.location}\tSố lần thi đấu:${player.turnCompetition}\tSố bàn thắng:${player.numberGoal}\tLương:${player.wagePlayer()}`);
            })
        })
    }
}