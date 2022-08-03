import {regString} from "../Regex/regString";
import * as rl from "readline-sync";

export function inputNameClub(){
    let RegString =new regString();
    let nameClub = rl.question('Nhập tên Câu lạc bộ: ');
    while (!RegString.Validate_String(nameClub)){
        console.log('Tên Club không được có số và ký tự đặc biệt');
        nameClub = rl.question('Nhập tên Câu lạc bộ: ');
    }return nameClub;
}
