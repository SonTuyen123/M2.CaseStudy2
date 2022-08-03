
export class regexYear {
    private YEAR_REGEX: RegExp = /^(\d{2}|195\d|200\d|20[1-2]\d)\b$/;

    public Validate_Year(regex: any) {
        return this.YEAR_REGEX.test(regex);
    }

}