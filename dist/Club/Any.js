"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Club = void 0;
class Club {
    constructor(club, coach) {
        this._players = [];
        this._club = club;
        this._coach = coach;
    }
    get club() {
        return this._club;
    }
    set club(value) {
        this._club = value;
    }
    get coach() {
        return this._coach;
    }
    set coach(value) {
        this._coach = value;
    }
    setPlayers(player) {
        this._players.push(player);
    }
    deletePlayers(player) {
        this._players.splice(this._players.indexOf(player), 1);
    }
    get players() {
        return this._players;
    }
    set players(value) {
        this._players = value;
    }
}
exports.Club = Club;
