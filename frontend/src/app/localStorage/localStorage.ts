import { LoginInfo } from '../object/LoginInfo';

export class LocalStorage {
    // Save the logged in user in local storage so that we can remember it
    static LOCAL_STORAGE_LOGIN_INFO = 'currentLogin'
    constructor() { }
    
    static load() {
        try {
            var info = JSON.parse(localStorage.getItem(this.LOCAL_STORAGE_LOGIN_INFO))
            if (info['login_id']) {
                // We loaded good LoginInfo from a logged in user
                return info
            }
        } catch {
        }

        // We could not load a logged in user
        return new LoginInfo()
    }

   static save(loginInfo) {
        localStorage.setItem(this.LOCAL_STORAGE_LOGIN_INFO, JSON.stringify(loginInfo))
    }

    /**
     * *NEED TO REMOVE*
     * Is there a logged in user? Does not talk to the backend. 
     * Subscribe to isLoggedIn() if you want to get called when this state changes.
     * @returns Whether there is currently a logged in user as far as the frontend knows. D
     */
    static isLoggedInNow(): boolean {
        return this.load()['login_id'] ? true : false
    }

    /**
     * *NEED TO REMOVE*
     * Information about the logged in user. 
     * Subscribe to loginInformation() if you want to get called when this info changes.
     * @returns LoginInfo (email, login_id, isEmailVerfiied, isSignedIn, state)
     */
    static getLoginInfo(): LoginInfo {
        return this.load()
    }

    static getLoginId() {
        return this.getLoginInfo()["login_id"]
    }


}


/**
     * *NEED TO TAKE A LOOK*
     * Components can listen for this Observable to see when logged in or out state changes.
     * This is the simplest way but only tells you logged in or not
     */
    // isLoggedIn(): Observable<boolean> {
    //     return this.loggedInSub.asObservable();
    // }

/**
 * * *NEED TO TAKE A LOOK*
 * Components can listen for this to see when info about being logged in changes.
 * This has more detailed info than just logged in or not
 */
    // loginInformation(): Observable<LoginInfo> {
    //     return this.loginInfoSub.asObservable();
    // }
    
// this.loginService.isLoggedIn().subscribe(isLoggedIn => {
//     this.loggedIn = isLoggedIn
//     console.log("LandingNonTransparentNavbar: changed logged in = " + this.loggedIn)
// })

// this.loginService.loginInformation().subscribe(loginInfo => {
//     this.loginState = loginInfo.state
//     console.log("LandingNonTransparentNavbar: changed login state = " + this.loginState)
// })