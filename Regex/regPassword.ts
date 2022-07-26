export class regexPassword {
    private PASSWORD_REGEX: RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$/;

    public Validate_Pasword(regex: any) {
        return this.PASSWORD_REGEX.test(regex);
    }

}