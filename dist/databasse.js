"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Databasse = void 0;
const fs = __importStar(require("fs"));
const Club_1 = require("./Club/Club");
class Databasse {
    constructor() {
        this.data = JSON.parse(fs.readFileSync("./data/Club.json", {
            encoding: "utf8",
            flag: "r"
        }));
        this.cclub = [];
        for (const club of this.data) {
            let club = this.data._club;
            let coach = this.data._coach;
            let players = this.data._players;
            const Clubs = new Club_1.Club(club, coach);
            this.cclub.push(Clubs);
        }
    }
    get club() {
        return this.cclub;
    }
}
exports.Databasse = Databasse;
