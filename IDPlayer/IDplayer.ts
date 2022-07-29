export function IDplayer(){
    let length = 3;
    let chars ='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let randomId = '';
    for (let i = 0; i <length; i++) {
        randomId += chars[Math.floor(Math.random() * chars.length)];
    }
    return randomId;
}