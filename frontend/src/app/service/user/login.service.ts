// https://stackoverflow.com/questions/40393703/rxjs-observable-angular-2-on-localstorage-change

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorage } from 'src/app/localStorage/localStorage';

/**
 * @class LoginService
 * The login service handles everything dealing with security, 
 * such as user passwords, login, and log out
 */
@Injectable({
    providedIn: 'root'
})
export class LoginService {
    /**
     * Every time we get login info from the server, we save it
     */
    private localStore = new LocalStorage()

    /**
     * Constructor
     * @param http request to connect to backend
     */
    constructor(private http: HttpClient) {
    }

    /**
     *
     *  @param emailPass is email and password
     *  @callback next callback with (err, loginInfo)
    */
    login(emailPass, next) {
        this.http.post("/api/login", emailPass).subscribe((data) => {
            if (data['message'] == 'Error') {
                next(data['error'], null)
                return
            }

            var loginInfo = this.localStore.saveLoginInfo(data['data'])
            next(null, loginInfo)
        })
    }


    /**
     * Logs out the user. OK to call even if they aren't logged in yet.
     * @callback next? Callback (loginInfo) with the result of logout
     */
    logout(next?) {
        // We post instead of get because it changes login state 
        this.http.post("/api/logout", {}).subscribe((data) => {
            if (!data || data['message'] == 'Error') {
                // not going to do anything right now
                // Note that we may still have the session cookie,
                // but the frontend thinks it is logged out
            }

            // We are logged out. Let other components know
            var loginInfo = this.localStore.saveLoginInfo(null)
            if (next) {
                next(loginInfo)
            }
        })
    }


    /**
     * Call this when you want to get the latest login info from the server. The 
     * server will check the session to ensure whether you are actually signed in or 
     * not. 
     * @param id The id you think may be logged in
     * @callback next Callback (loginInfo) with what the server returned (null if there was an error)
     */
    refreshLoginInfoForId(id, next?) {
        var url = "/api/logininfo"
        if (id) {
            url = url + "/" + id
        }
        this.http.get(url).subscribe(data => {
            var serverInfo = null
            if (data['message'] !== 'Success') {
                if(next) { next(null) }
                // We shouldn't saveLoginInfo here because that will erase the user's localStorage information. The server will tell us Success if they want us to log out.
                return
            }

            // Success
            var loginInfo = this.localStore.saveLoginInfo(data['data'])
            if(next) {next(loginInfo)}
        })
    }

    /**
     * Call this if you think you might be logged in but don't know your id.
     * If you didn't have an id, which can happen when your local 
     * storage is deleted, but you still have a cookie.
     * The cookie will let the server tell you what your id is.
     * @param next Callback (loginInfo) with what the server returned
     * 
     */
    refreshLoginInfo(next) {
        this.refreshLoginInfoForId(null, next)
    }

    /**
     * Send activationcode to the server
     * @param login_id the current logged in user
     * @param code email activation code
     * @param next a callback (err, data) that returns the login info or an error
     */
    verifyEmailActivationCode(login_id, code, next) {
        this.http.post("/api/login/activate/email/" + login_id, { code: code }).subscribe(data => {
            if (data['loginNeeded']) {
                // User needs to sign in before activating
                next("loginNeeded", null)
                return
            }
            if (data['message'] != "Success") {
                // Other kinds of error
                next(data['error'], null)
                return
            }

            // Success
            var loginInfo = this.localStore.saveLoginInfo(data['data'])
            next(null, loginInfo)
        })
    }

    /**
     * Ask server to send a new activation code in email.
     * @param id the current logged in user
     * @param next a callback (err, loginInfo) that returns an error or the login info
     */
    resendActivationCode(id, next) {
        this.http.post("/api/login/requestActivationCode/email", { id: id }).subscribe(data => {
            if (data['message'] != "Success") {
                next(data['error'], null)
                return
            }
            // Success: callback "loginInfo" returns the cleaned data from the local storage
            var loginInfo = this.localStore.saveLoginInfo(data['data'])
            next(null, loginInfo)
        })
    }

    /**
    * Ask server to send a forgotten password to the users email
    * @param data contains user's email
    * @callback next Callback (err, data) with server response
    */
    requestForgotPassword(data, next) {
        console.log("requestForgotPassword " + data);
        this.http.post("/api/login/requestForgotPassword", data).subscribe(data => {
            if (data["message"] !== "Success") {
                next(data['error'], null)
            }

            //Success
            //Not logged in when changing the password, so we do
            //not save to local storage. TODO: What are we returning? 
            next(null, data['data'])
        })
    }

    /**
    * Ask the server to change the password
    * @param data contains user's email, tempPassword and newPassword
    */
    changePasswordAfterForgetting(data, next) {
        this.http.post("/api/login/changePasswordForgot", data).subscribe(data => {
            if (data["message"] !== "Success") {
                next(data['error'], null)
                return
            }
            
            //Success
            // TODO: At change password page, are you logged in or not? Will you have your login info in it
            next(null, data['data'])
        })
    }

    /**
     * Call this when use
     * @param id user id
     * @param data contains user's email, oldPassword and newPassword
     */
    changePassword(id, data, next ){
        this.http.post("/api/changePassword/" + id, data).subscribe(data => {
            if (data["message"] !== "Success") {
                next(data['error'], null)
                return
            }
            
            //Success
            var loginInfo = this.localStore.saveLoginInfo(data['data'])
            next(null, loginInfo)
        })
    }

    // kirk start: reset-password
    // See verifyEmailActivationCode above
    /**
     * Ask server the tempActivationCode for verification.
     * @param id the current logged in user
     */
    tempActivationCodeVerification(id) {
        console.log("login.service.ts-reset-password-success",id)
        return this.http.post("/api/login/requestTempActivationCodeVerification", id)
    }
    
    // kirk end:
    
}