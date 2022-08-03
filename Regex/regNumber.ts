export class regNumber {
    private NUMBER_REGEX: RegExp = /^(?:[1-9]|[1-9]\d)$/;

    public Validate_Number(regex: any) {
        return this.NUMBER_REGEX.test(regex);
    }

}
