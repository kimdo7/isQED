import { LoginInfo } from '../object/LoginInfo';
import { UserInfo } from '../object/UserInfo';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

/**
 * @class LocalStorage
 *  Anytime you want to store something in the front end, it will
 *  remember.  LocalStorage is like a browser filesystem stored 
 *  for our site. This way, you don't have to pass information 
 *  between components. You just call class model "LocalStorage"
 *  You can see these in Chrome debugger under Application, Local Storage, your site.
 * 
 *  Our Keys: (this is like a filename for loading and saving)
 *    currentLogin:  this is the last LoginInfo we got from the server
 *    currentUser: this is the last UserInfo we got from the server
 * 
 *  Why don't we use cookies? Our backend reads and writes encrypted cookies. We don't want the frontend to
 *  modify them and pretend to be logged in as someone else. So we need someplace else (LocalStorage) to 
 *  save what the frontend is allowed to modify.
 */
@Injectable({
    providedIn: 'root'
})
 export class LocalStorage {
    // Save the logged in user in local storage so that we can remember it (it's like a 'filename')
    CURRENT_LOGIN_KEY = 'currentLogin'
    CURRENT_USER_KEY = 'currentUser'

    /**
     * This variable is used in this class
     * Call loginInfoSub.next() when LoginInfo changes
     */
    private loginInfoSub = new Subject<LoginInfo>() 

    /**
     * This variable is used in this class
     * Call userInfoSub.next() when UserInfo changes
     */
    private userInfoSub = new Subject<UserInfo>() 

    /**
     * Constructor
     */
    constructor() { }

    /**
     * You can subscribe to this to get every change to LoginInfo
     */
    loginInformation(): Observable<LoginInfo> {
        return this.loginInfoSub.asObservable()
    }

    /**
     * You can subscribe to this to get every change to UserinInfo
     */
    userInformation(): Observable<UserInfo> {
        return this.userInfoSub.asObservable()
    }

    /**
     * Call this when you want loginInfo from localStorage
     * @returns LoginInfo
     */
    loadLoginInfo(): LoginInfo {
        var data = null
        try { // try to read the last LoginInfo
            data = JSON.parse(localStorage.getItem(this.CURRENT_LOGIN_KEY))
        } catch {
        }

        // Use the constructor to make it's properly filled out
        var loginInfo = new LoginInfo(data)

        // Let subscribers know
        this.loginInfoSub.next(loginInfo);
        return loginInfo
    }

    /**
     * Call this when you want userInfo from localStorage
     * @returns UserInfo
     */
    loadUserInfo(): UserInfo {
        var data = null
        try { // try to read the last LoginInfo
            data = JSON.parse(localStorage.getItem(this.CURRENT_USER_KEY))
        } catch {
        }

        // Use the constructor to make it's properly filled out
        var userInfo = new UserInfo(data)

        // Let subscribers know
        this.userInfoSub.next(userInfo);
        return userInfo
    }

    /**
     * Call this when you get new loginInfo from the server
     * @param loginInfo From the server
     */
    saveLoginInfo(loginInfo) {
        // Make sure what we save is populated properly by using the constructor
        var savedInfo = new LoginInfo(loginInfo)

        // Now save it and let subscribers know
        localStorage.setItem(this.CURRENT_LOGIN_KEY, JSON.stringify(savedInfo))
        this.loginInfoSub.next(savedInfo);
        return savedInfo
    }

    /**
     * Call this when you get new userInfo from the server
     * @param userInfo From the server
     */
    saveUserInfo(userInfo) {
        // Make sure what we save is populated properly by using the constructor
        var savedInfo = new UserInfo(userInfo)

        // Now save it and let subscribers know
        localStorage.setItem(this.CURRENT_USER_KEY, JSON.stringify(savedInfo))
        this.userInfoSub.next(savedInfo);
        return savedInfo
    }

}