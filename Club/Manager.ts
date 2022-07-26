import {Club} from "./Club";
import {PlayerFootball} from "./PlayerFootball";
import {Coach} from "./Coach";

export class ManagerClub {
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

    deleteClub(name: string): void {
        for (let i = 0; i < ManagerClub.clubs.length; i++) {
            if (ManagerClub.clubs[i].club === name) {
                ManagerClub.clubs.splice(i, 1);
            }
        }
    }

    deletePlayer(nameclub: string, name: string): void {
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

    addNewPlayer(nameClub: string,player: PlayerFootball) {
        ManagerClub.clubs.forEach((club, index) => {
            if (club.club === nameClub) {
                club.setPlayers(player)
            }else {
                console.log('Không tồn tại CLB này');
            }
        })
    }

    editPlayer(nameclub: string, name: string, players: PlayerFootball): void {
        ManagerClub.clubs.forEach((club, index) => {
            if (club.club === nameclub) {
                club.players.forEach((player, index) => {
                    if (player.name === name) {
                        club.players[index] = players
                    }
                })
            }
        })
    }
    findPlayersinClub(name: string){
        ManagerClub.clubs.forEach((club, index) => {
            club.players.forEach((player, index) => {
                if (player.name === name) {
                    return (`Tên CLB: ${club.club}\tHuấn luyện viên:${club.coach.name}\t Tên cầu thủ:${club.players[index].name}\tQuốc tịch:${club.players[index].nationality}\t Ngày sinh:${club.players[index].age}\t Số bàn thắng đạt được:${club.players[index].numberGoal}\t Mức lương:${club.players[index].wagePlayer()}`)
                }
            })
        })
    }
    SortNamePlayers(){
    }
}