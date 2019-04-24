// https://stackoverflow.com/questions/40393703/rxjs-observable-angular-2-on-localstorage-change

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { LoginInfo } from 'src/app/object/LoginInfo';
import { LocalStorage } from 'src/app/localStorage/localStorage';

/**
 * @class LoginService
 */
@Injectable({
    providedIn: 'root'
})
export class LoginService {
    /**
     * @param loginInfo
     */

    private loginInfo = new LoginInfo()
    private localHost = new LocalStorage()
    // any page should be able to check to see if we are logged in by asking login.service here.
    private loggedInSub = new Subject<boolean>() // tell me when log in changes
    private loginInfoSub = new Subject<LoginInfo>() // tell me when log in information changes

    /**
     * 
     * @param http request to conenct to backend
     * @param loginInfo current login ifo
     * 
     * *NOTE* empty login info if empty *local storage*
     */
    constructor(private http: HttpClient) {
        this.loginInfo = this.localHost.load()
    }

    /**
     * *NEED TO REMOVE*
     * Information about the logged in user. 
     * Subscribe to loginInformation() if you want to get called when this info changes.
     * @returns LoginInfo (email, login_id, isEmailVerfiied, isSignedIn, state)
     */
    getLoginInfo(): LoginInfo {
        return this.loginInfo
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

            this.changeLoginInfo(data['data'])
            next(null, this.loginInfo)
        })
    }

    /**
     * Logs out the user. OK to call even if they aren't logged in yet.
     */
    logout() {
        // We post instead of get because it changes login state 
        this.http.post("/api/logout", {}).subscribe((data) => {
            if (!data || data['message'] == 'Error') {
                // not going to do anything right now
                return
            }

            // We are logged out. Let other components know
            this.changeLoginInfo(null)
        })
    }

    /**
     * *NEED TO CHANGE TO PRIVATE*
     * Save changes to login info, and report it to other components
     * @param newLoginInfo The new login info. If null it means logged out.
     */
    changeLoginInfo(newLoginInfo: LoginInfo) {
        // Are we logged in?
        if (newLoginInfo && newLoginInfo['login_id']) {
            this.loginInfo = newLoginInfo
        } else {
            // If anything is missing, we put in empty LoginInfo
            // This is like logging out
            this.loginInfo = new LoginInfo()
        }

        // Save it. We always write a JSON string to local storage
        this.localHost.save(this.loginInfo)

        // We tell other components about it
        this.loginInfoSub.next(this.loginInfo);
        this.loggedInSub.next(this.loginInfo['login_id'] ? true : false);
    }

    refreshLoginInfoForId(id) {
        if (id) {
            this.http.get("/api/login/email/" + id).subscribe(data => {
                if (data['message'] == 'Success') {
                    this.changeLoginInfo(data['data'])
                    return
                }
                // error. We aren't logged in as far as we can tell
                this.changeLoginInfo(null)
            })
        } else {
            console.log("refreshLoginInfoForId: no id provided (may be logged out)")
        }
    }

    refreshLoginInfo() {
        this.refreshLoginInfoForId(this.loginInfo.login_id)

    }

    /**
     * Send activationcode to the server
     * @param login_id the current logged in user
     * @param code email activation code
     * @param next a callback (err, data) that returns the login info or an error
     */
    verifyEmailActivationCode(login_id, code, next) {
        //console.log("verifyEmailActivationCode")
        this.http.post("/api/login/activate/email/" + login_id, { code: code }).subscribe(data => {
            if (data['message'] == "Success") {
                this.changeLoginInfo(data['data'])
                next(null, this.loginInfo)
                return
            }
            // Special error saying that the user needs to sign in before trying to activate
            if (data['loginNeeded']) {
                next("loginNeeded", null)
                return
            }
            // Other kinds of error
            next(data['error'], null)
        })
    }

    /**
     * Ask server to send a new activation code in email.
     * @param id the current logged in user
     * @param next a callback (err, loginInfo) that returns an error or the login info
     */
    resendActivationCode(id, next) {
        //console.log("resendActivationCode")
        this.http.post("/api/login/requestActivationCode/email", { id: id }).subscribe(data => {
            if (data['message'] == "Success") {
                this.changeLoginInfo(data['data'])
                next(null, this.loginInfo)
                return
            }
            // error
            next(data['error'], null)
        })
    }

    /**
    * 
    * @param data contains user's email
    */
    requestForgotPassword(data) {
        console.log("login.service.ts" + data + "===success");
        return this.http.post("/api/login/requestForgotPassword", data);
    }

    /**
    * 
    * @param data contains user's email, tempPassword and newPassword
    */
    changePasswordAfterForgetting(data) {
        return this.http.post("/api/login/changePasswordForgot", data)
    }
}