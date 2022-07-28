import {User} from "./User";

export class userManager{
    private static users: User[] = [];

    getAllUsers(): User[] {
        return userManager.users;
    }
    addNewUser(user: User): void  {
        userManager.users.push(user);
    }
    checkUser(email: string, password: string){
        let flag = false;
        for (let i = 0; i < userManager.users.length; i++) {
            if (userManager.users[i].email === email && userManager.users[i].password === password){
                return flag = true;
            }
        }
        return flag
    }
}