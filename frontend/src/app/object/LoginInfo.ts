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
    public first_name: string
    public last_name: string

    /**
     * If you use this contructor, all the properties will be populated properly
     * @param data The loginInfo from the server or localstorage
     */
    constructor(data) {
        if (data && data['login_id']) {
            this.login_id = data['login_id']
            this.email = data['email']
            this.isEmailVerified = data['isEmailVerified']? true: false
            this.isSignedIn = data['isSignedIn']? true: false
            this.state = data['state']
            this.first_name = data['first_name']
            this.last_name = data['last_name']
        } else {
            this.login_id = null
            this.email = null
            this.isEmailVerified = false
            this.isSignedIn = false
            this.state = "LoggedOut"
            this.first_name = null
            this.last_name = null
        }
    }
}