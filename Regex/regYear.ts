
export class regexYear {
    private YEAR_REGEX: RegExp = /^(\d{2}|19\d{2}|20\d{2})\b$/;

    public Validate_Year(regex: any) {
        return this.YEAR_REGEX.test(regex);
    }

}