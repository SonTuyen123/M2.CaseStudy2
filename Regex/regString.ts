
export class RegString{
    private String_REGEX: RegExp = /^[a-zA-Z]+$/;

    public Validate_String(regex: any) {
        return this.String_REGEX.test(regex);
    }
}