import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';

/**
 * @class LoginInfo
 * Information about the logged in user
 * If login_id is empty, there is no one logged in
 */
export class LoginInfo {
  public email: string
  public login_id: string
  public isEmailVerified: boolean
  public state: string 
}

// Save the logged in user in local storage so that we can remember it
const LOCAL_STORAGE_LOGIN_INFO = 'currentLogin'
function loadLocalStorage() {
  try {
    var info = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LOGIN_INFO))
    if (info['login_id']) {
      // We loaded good LoginInfo from a logged in user
      return info
    }
  } catch {
  }
  // We could not load a logged in user
  return new LoginInfo()
}

function saveLocalStorage(loginInfo) {
  localStorage.setItem(LOCAL_STORAGE_LOGIN_INFO, JSON.stringify(loginInfo))
}

/**
 * @class LoginService
 */
@Injectable({
    providedIn: 'root'
})
export class LoginService {

    // https://stackoverflow.com/questions/40393703/rxjs-observable-angular-2-on-localstorage-change

  private loginInfo = new LoginInfo()
  // any page should be able to check to see if we are logged in by asking login.service here.
  private loggedInSub = new Subject<boolean>() // tell me when log in changes
  private loginInfoSub = new Subject<LoginInfo>() // tell me when log in information changes

  constructor(private http: HttpClient) { 
    // It has to have everything about the login info, otherwise we leave it with the empty login info.
    this.loginInfo = loadLocalStorage()
  }


  /**
   * Components can listen for this Observable to see when logged in or out state changes.
   * This is the simplest way but only tells you logged in or not
   */
  isLoggedIn(): Observable<boolean> {
    return this.loggedInSub.asObservable();
  }

  /**
   * Components can listen for this to see when info about being logged in changes.
   * This has more detailed info than just logged in or not
   */
  loginInformation(): Observable<LoginInfo> {
    return this.loginInfoSub.asObservable();
  }

  /**
   * Is there a logged in user? Does not talk to the backend. 
   * Subscribe to isLoggedIn() if you want to get called when this state changes.
   * @returns Whether there is currently a logged in user as far as the frontend knows. D
   */
  isLoggedInNow() : boolean {
    return this.loginInfo['login_id']? true: false
  }

  /**
   * Information about the logged in user. 
   * Subscribe to loginInformation() if you want to get called when this info changes.
   * @returns LoginInfo (email, login_id, isEmailVerfiied)
   */
  getLoginInfo() : LoginInfo {
    return this.loginInfo
  }

  /**
   *
   *  @param emailPass is email and password
   *  @callback next callback with (err, loginInfo)
  */
  login(emailPass, next){  
    this.http.post("/api/login", emailPass).subscribe((data) => {
      if (data['message'] == 'Error') {
        next(data['error'], null)
        return
      }
      
      this.changeLoginInfo(data['data'])
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
   * Save changes to login info, and report it to other components
   * @param newLoginInfo The new login info. If null it means logged out.
   */
  changeLoginInfo(newLoginInfo : LoginInfo) {
    // Are we logged in?
    if (newLoginInfo && newLoginInfo['login_id']) {
      this.loginInfo = newLoginInfo
    } else {
      // If anything is missing, we put in empty LoginInfo
      // This is like logging out
      this.loginInfo = new LoginInfo()
    }

    // Save it. We always write a JSON string to local storage
    saveLocalStorage(this.loginInfo)

    // We tell other components about it
    this.loginInfoSub.next(this.loginInfo);
    this.loggedInSub.next(this.loginInfo['login_id']? true: false);
  }

 refreshLoginInfo (id){
    return this.http.get("/api/login/email/" + id)
  }

  checkIsEmailVerified(id, code){
    return this.http.post("/api/login/activate/email/" + id, { code: code })
  }

  resendActivationCode(id){
    return this.http.post("/api/login/requestActivationCode/email", { id: id })
  }

  /**
  * 
  * @param data contains user's email
  */
  requestForgotPassword(data){
    return this.http.post("/api/login/requestForgotPassword", data)
  }

  /**
  * 
  * @param data contains user's email, tempPassword and newPassword
  */
  changePasswordAfterForgetting(data){
    return this.http.post("/api/login/changePasswordForgot", data)
  }
}

