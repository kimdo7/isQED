import { LoginInfo } from './LoginInfo'

/**
 * @class UserInfo
 * Information about the user.
 */
export class UserInfo {
    public loginId: string
    public first_name: string
    public last_name: string
    public email: string
    public phone: string

    /**
     * If you use this contructor, all the properties will be populated properly
     * @param data The userInfo from the server or localstorage (can be null)
     */
    constructor(data?) {
        if (data) {
            this.loginId = data['loginId']? data['loginId']: null
            this.first_name = data['first_name']? data['first_name']: null
            this.last_name = data['last_name']? data['last_name']: null
            this.email = data['email']? data['email']: null
            this.phone = data['phone']? data['phone']: null
        } else {
            this.loginId = null
            this.first_name = null
            this.last_name = null
            this.email = null
            this.phone = null
         }
    }

    /**
     * This verifies the user is logged in or logged off
     * @param {LoginInfo} loginInfo 
     */
    isLoggedIn(loginInfo: LoginInfo) {
        if (loginInfo && loginInfo.login_id && loginInfo.isSignedIn && this.loginId === loginInfo.login_id) {
            return true
        } else {
            return false
        }

    }
}