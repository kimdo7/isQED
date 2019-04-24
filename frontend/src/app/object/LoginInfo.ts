/**
 * @class LoginInfo
 * Information about the logged in user
 * If login_id is empty, there is no one logged in
 */
export class LoginInfo {
    public email: string
    public login_id: string
    public isEmailVerified: boolean
    public isSignedIn: boolean
    public state: string

    constructor() {
        this.login_id = null
        this.email = null
        this.isEmailVerified = false
        this.isSignedIn = false
        this.state = "LoggedOut"
    }
}