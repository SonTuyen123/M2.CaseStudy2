"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IDplayer = void 0;
function IDplayer() {
    let length = 3;
    let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let randomId = '';
    for (let i = 0; i < length; i++) {
        randomId += chars[Math.floor(Math.random() * chars.length)];
    }
    return randomId;
}
exports.IDplayer = IDplayer;
