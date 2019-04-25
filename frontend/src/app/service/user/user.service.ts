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
     */
    constructor(private http: HttpClient) { }

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

            var loginInfo = this.localStore.saveLoginInfo(data['data'])
            next(null, loginInfo)
        })
    }
}