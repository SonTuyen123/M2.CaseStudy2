export class regexDate {
    private DATE_REGEX: RegExp = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;

    public Validate_Date(regex: any) {
        return this.DATE_REGEX.test(regex);
    }

}


