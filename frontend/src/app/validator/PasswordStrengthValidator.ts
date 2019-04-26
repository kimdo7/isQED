export class PasswordStrengthValidator {
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

}