import {Club} from "./Club";
import {PlayerFootball} from "./PlayerFootball";

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
                    if (player.name === name) {
                        club.players[index] = players
                        console.log(`
                         - Tên: ${club.players[index].name}
                         - Quốc tịch: ${club.players[index].nationality}
                         - Tuổi:${club.players[index].age}
                         - Ngày sinh:${club.players[index].birth}
                         - Số bàn thắng:${club.players[index].numberGoal}
                         - Mức lương :${club.players[index].wage}
                    `)
                    }
                })
            }
        })
    }

    IDNamePlayerForClub(id: string) {
        ManagerClub.clubs.forEach((club, index) => {
            club.players.forEach((player, index) => {
                if (player.randomId === id) {
                    console.log(`
                    - Tên: ${club.players[index].name}
                    - Quốc tịch: ${club.players[index].nationality}
                    - Tuổi:${club.players[index].age}
                    - Ngày sinh:${club.players[index].birth}
                    - Số bàn thắng:${club.players[index].numberGoal}
                    - Mức lương :${club.players[index].wage}
                    `)
                }
            })
        })
    }

    editNamePlayerForClub(id: string, newName: string) {
        ManagerClub.clubs.forEach((club, index) => {
            club.players.forEach((player, index) => {
                if (player.randomId === id) {
                    player.name = newName;
                    console.log(`
                    - Tên: ${club.players[index].name}
                    - Quốc tịch: ${club.players[index].nationality}
                    - Tuổi:${club.players[index].age}
                    - Ngày sinh:${club.players[index].birth}
                    - Số bàn thắng:${club.players[index].numberGoal}
                    - Mức lương :${club.players[index].wage}
                    `)
                }
            })
        })
    }
    editAgePlayerForClub(id: string, age: number) {
        ManagerClub.clubs.forEach((club, index) => {
            club.players.forEach((player, index) => {
                if (player.randomId === id) {
                    player.age = age;
                    console.log(`
                    - Tên: ${club.players[index].name}
                    - Quốc tịch: ${club.players[index].nationality}
                    - Tuổi:${club.players[index].age}
                    - Ngày sinh:${club.players[index].birth}
                    - Số bàn thắng:${club.players[index].numberGoal}
                    - Mức lương :${club.players[index].wage}
                    `)
                }
            })
        })
    }
    editNationalityPlayerForClub(id: string, nationality: string) {
        ManagerClub.clubs.forEach((club, index) => {
            club.players.forEach((player, index) => {
                if (player.randomId === id) {
                    player.nationality = nationality;
                    console.log(`
                    - Tên: ${club.players[index].name}
                    - Quốc tịch: ${club.players[index].nationality}
                    - Tuổi:${club.players[index].age}
                    - Ngày sinh:${club.players[index].birth}
                    - Số bàn thắng:${club.players[index].numberGoal}
                    - Mức lương :${club.players[index].wage}
                    `)
                }
            })
        })
    }

    editWagePlayerForClub(id: string, wage: number) {
        ManagerClub.clubs.forEach((club, index) => {
            club.players.forEach((player, index) => {
                if (player.randomId === id) {
                    player.wage = wage;
                    console.log(`
                    - Tên: ${club.players[index].name}
                    - Quốc tịch: ${club.players[index].nationality}
                    - Tuổi:${club.players[index].age}
                    - Ngày sinh:${club.players[index].birth}
                    - Số bàn thắng:${club.players[index].numberGoal}
                    - Mức lương :${club.players[index].wage}
                    `)
                }
            })
        })
    }
    editNumberGoalsPlayerForClub(id: string, numberGoals: number) {
        ManagerClub.clubs.forEach((club, index) => {
            club.players.forEach((player, index) => {
                if (player.randomId === id) {
                    player.numberGoal = numberGoals;
                    console.log(`
                    - Tên: ${club.players[index].name}
                    - Quốc tịch: ${club.players[index].nationality}
                    - Tuổi:${club.players[index].age}
                    - Ngày sinh:${club.players[index].birth}
                    - Số bàn thắng:${club.players[index].numberGoal}
                    - Mức lương :${club.players[index].wage}
                    `)
                }
            })
        })
    }


    findIdInPlayers(id: string): boolean {
        let flag = false;
        ManagerClub.clubs.forEach((club, index) => {
            club.players.forEach((player, index) => {
                if (player.randomId === id) {
                    return flag = true;
                }
                return flag
            })
        });
        return flag
    }

    findNameInPlayer(name: string): boolean {
        let flag = false;
        ManagerClub.clubs.forEach((club, index) => {
            club.players.forEach((player, index) => {
                if (player.name.toLowerCase().includes(name.toLowerCase())) {
                    return flag = true;
                }
                return flag
            })
        });
        return flag
    }
    findNameInPlayer2(name: string): boolean {
        let flag = false;
        ManagerClub.clubs.forEach((club, index) => {
            club.players.forEach((player, index) => {
                if (player.name === name) {
                    return flag = true;
                }
                return flag
            })
        });
        return flag
    }


    findPlayersinClub(name: string) {
        ManagerClub.clubs.forEach((club, index) => {
            club.players.forEach((player, index) => {
                if (player.name.toLowerCase().includes(name.toLowerCase())) {
                    console.log(`
                    - Tên CLB:${club.club}
                    - Huấn luyện viên:${club.coach.name}
                    - Tên cầu thủ:${club.players[index].name}
                    - Quốc tịch:${club.players[index].nationality}
                    - Tuổi:${club.players[index].age}
                    - Ngày sinh:${club.players[index].birth}
                    - Số bàn thắng đạt được:${club.players[index].numberGoal}
                    - Mức lương:${club.players[index].wage}
                    -ID:${club.players[index].randomId}`)
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
                console.log(`
                - Tên:${player.name}
                - Tuổi:${player.age}
                - Ngày sinh:${player.birth}
                - Năm gia nhập:${player.yearOfJon}
                - Vị trí thi đấu:${player.location}
                - Số lần thi đấu:${player.turnCompetition}
                - Số bàn thắng:${player.numberGoal}
                - Lương:${player.wagePlayer()}`);
            })
        })
    }
}