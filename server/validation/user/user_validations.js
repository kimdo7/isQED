module.exports = {
    /**
    * @Validation of password
    * @PasswordStrength 
        * *At least 8 characters in length*
        * *Lowercase letters*
        * *Uppercase letters*
        * *Numbers*
    */
    isInvalidRegister(data) {
        var regex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9].{7,}/;

        if (!data.password.match(regex))
            return "Password must be 8 or more characters. Must have least one A-Z, one a-z, one 0-9'"

        if (!data.email || data.email.length < 5) 
            return "Email is not long enough" 

        if (!data.first_name) 
            return "First name is missing" 
            
        if (!data.last_name) 
            return "Last name is missing" 

        return undefined
    }
}