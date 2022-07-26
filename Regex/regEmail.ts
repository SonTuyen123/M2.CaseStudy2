export class regexEmail {
    private EMAIL_REGEX: RegExp = /^\w+@gmail.com$/i;

      public Validate_Email(regex: any) {
        return this.EMAIL_REGEX.test(regex);
    }

}
