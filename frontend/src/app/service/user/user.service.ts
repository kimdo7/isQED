import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return;
    }

    /**
     * 
     * @param data is first, last name, email, pass and confirmpass
     */
    register(data) {
        return this.http.post("/api/user/register", data)
    }

    getLoginEmail(id){
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
     * @param id user id
     * @param data contains user's email, oldPassword and newPassword
     */
    changePassword(id, data){
        return this.http.post("/api/user/changePassword/" + id, data)
    }

}