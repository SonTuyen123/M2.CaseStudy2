"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Club = void 0;
var Club = /** @class */ (function () {
    function Club(club, coach) {
        this._players = [];
        this._club = club;
        this._coach = coach;
    }
    Object.defineProperty(Club.prototype, "club", {
        get: function () {
            return this._club;
        },
        set: function (value) {
            this._club = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Club.prototype, "coach", {
        get: function () {
            return this._coach;
        },
        set: function (value) {
            this._coach = value;
        },
        enumerable: false,
        configurable: true
    });
    Club.prototype.setPlayers = function (player) {
        this._players.push(player);
    };
    Club.prototype.deletePlayers = function (player) {
        this._players.splice(this._players.indexOf(player), 1);
    };
    Object.defineProperty(Club.prototype, "players", {
        get: function () {
            return this._players;
        },
        set: function (value) {
            this._players = value;
        },
        enumerable: false,
        configurable: true
    });
    return Club;
}());
exports.Club = Club;
