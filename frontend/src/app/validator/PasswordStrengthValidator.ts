export class PasswordStrengthValidator {
    /**
     * @return boolean
     * @PasswordStrength 
        * *At least 8 characters in length*
        * *Lowercase letters*
        * *Uppercase letters*
        * *Numbers*
        * *Special characters*
     */
    static getStrength(password) {
        var match = 0;
        /**
         * Match lower case
         */
        match += this.passLowerCase(password) ? 25 : 0
        
        /**
         * Match upper case
         */
        match += this.passUpperCase(password) ? 25 : 0
        
        /**
         * Match digit
         */
        match += this.passDigitCase(password) ? 25 : 0

        /**
         * Match speicail character
         */
        // match += this.passSpecialCase(password) ? 25 : 0

        /**
         * Length
         */
        match += this.passMinLength(password) ? 25 : 0

        return match;
    }

    /**
     * 
     * @return boolean
     * @param password 
     * Match the *lower case*
     */
    static passLowerCase(password) {
        return password.match(/[a-z]/g)
    }

    /**
     * 
     * @return boolean
     * @param password 
     * Match the *upper case*
     */
    static passUpperCase(password) {
        return password.match(/[A-Z]/g)
    }

    /**
     * 
     * @return boolean
     * @param password 
     * Match the *digit case*
     */
    static passDigitCase(password) {
        return password.match(/[0-9]/g)
    }

    /**
     * 
     * @return boolean
     * @param password 
     * Match the *special case*
     */
    static passSpecialCase(password) {
        return password.match(/[$@$!%*?&]/g)
    }

    /**
     * 
     * @return boolean
     * @param password 
     * Match the *min length case*
     */
    static passMinLength(password) {
        return password.length >= 8
    }

     /**
     * 
     * @return int *range* 0-100 *percent*
     * 
     */
    static getColor(password) {
        return (this.getStrength(password) == 100) ? "priamry" : "warn"
    }
}