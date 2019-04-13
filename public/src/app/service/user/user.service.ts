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
        return this.http.post("/api/user", data)
    }
    
    getLoginEmail(id){
        return this.http.get("/api/login/email/" + id)
    }
    checkIsEmailVerified(id, code){
        return this.http.get("/api/login/activate/email/"+id+"/"+code)
    }

    resendActivationCode(id){
        return this.http.get("/api/login/requestActivationCode/email/"+id)
    }

    /**
     * 
     * @param data is email and password
     */
    login(data){
        return this.http.post("/api/login", data)
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

    /**
     * 
     * @param id user id
     * @param data contains user's email, oldPassword and newPassword
     */
    changePassword(id, data){
        return this.http.post("/api/user/changePassword/"+id, data)
    }

}
