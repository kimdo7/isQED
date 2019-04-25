import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorage } from 'src/app/localStorage/localStorage';

/**
 * @class UserService
* The user service handles everything dealing with friendly user 
* information. But not security, which is handled by LoginService
*/
@Injectable({
    providedIn: 'root'
})
export class UserService {
    /**
     * Every time we get login info from the server, we save it
     */
    private localStore = new LocalStorage()

    /**
     * Constructor
     * @param http request to connect to backend
     */
    constructor(private http: HttpClient) { }

    /**
     * Get the user name from the server
     * @param login_id The login ID for the user
     * @callback next Callback (err, name) from the server
     */
    getName(login_id, next) {
        this.http.get("http://localhost:8000/api/user/"+login_id).subscribe(data => {
            if (data['message'] !== 'Success') {
                next(data['error'], null)
                return
            }

            // Success
            var userInfo = this.localStore.saveUserInfo(data['data'])
            var name = userInfo.first_name + " " + userInfo.last_name
            next(null, name)
        })
    }

    /**
     * Get the user name from the server
     * @param login_id The login ID for the user
     * @callback next Callback (err, userInfo) from the server
     */
    refreshUserInfo(login_id, next) {
        this.http.get("http://localhost:8000/api/user/"+login_id).subscribe(data => {
            if (data['message'] !== 'Success') {
                next(data['error'], null)
                return
            }

            // Success
            var userInfo = this.localStore.saveUserInfo(data['data'])
            next(null, userInfo)
        })
    }

    /**
     * Call this when user registers
     * @param data is first_name, last_name, email, password
     * @callback next Callback (err, data) with server response
     */
    register(data, next) {
        this.http.post("/api/user/register", data).subscribe(
        (data) => {
            if (data['message'] !== 'Success') {
                next(data['error'], null)
                return
            }
            // returns the cleaned version of data from local storage
            var loginInfo = this.localStore.saveLoginInfo(data['data'])
            next(null, loginInfo)
        })
    }
}