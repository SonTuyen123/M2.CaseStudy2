import {regString} from "../Regex/regString";
import * as rl from "readline-sync";

export function inputNameClub(){
    let RegString =new regString();
    let nameClub = rl.question('Nhập tên Câu lạc bộ: ');
    if(RegString.Validate_String(nameClub)){
        return nameClub;
    }else {
        console.log('Tên Club không được có số và ký tự đặc biệt');
        console.log('Nhập lại ');
        inputNameClub();
    }return nameClub;
}
