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

    /**
     * If you use this contructor, all the properties will be populated properly
     * @param data The loginInfo from the server or localstorage (can be null)
     */
    constructor(data?) {
        if (data && data['login_id']) {
            this.login_id = data['login_id']
            this.email = data['email']
            this.isEmailVerified = data['isEmailVerified']? true: false
            this.isSignedIn = data['isSignedIn']? true: false
            this.state = data['state']
        } else {
            this.login_id = null
            this.email = null
            this.isEmailVerified = false
            this.isSignedIn = false
            this.state = "LoggedOut"
        }
    }
}