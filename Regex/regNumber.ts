export class regNumber {
    private NUMBER_REGEX: RegExp = /^\d+$/;

    public Validate_Number(regex: any) {
        return this.NUMBER_REGEX.test(regex);
    }

}