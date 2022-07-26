import {PlayerFootball} from "./PlayerFootball";
import {Coach} from "./Coach";

export class Club {
    private _club: string;
    private _coach: Coach;
    private _players: PlayerFootball[] = []

    constructor(club: string, coach: Coach) {
        this._club = club;
        this._coach = coach;
    }

    get club(): string {
        return this._club;
    }

    set club(value: string) {
        this._club = value;
    }

    get coach(): Coach {
        return this._coach;
    }

    setcoach(value: Coach) {
        this._coach = value;
    }

    setPlayers(player: PlayerFootball) {
        this._players.push(player);
    }
    deletePlayers(player: PlayerFootball){
        this._players.splice(this._players.indexOf(player), 1);
    }

    get players(): PlayerFootball[] {
        return this._players;
    }

    set players(value: PlayerFootball[]) {
        this._players = value;
    }
}