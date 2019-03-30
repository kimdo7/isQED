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
    checkActivate(id, code){
        return this.http.get("/api/login/activate/"+id+"/"+code)
    }

    resendActivationCode(id){
        return this.http.get("/api/login/activateCode/email/"+id)
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
     * @param data is user's email
     */
    requestForgotPassword(data){
        return this.http.post("/api/login/requestForgotPassword", data)
    }

    /**
     * 
     * @param id user id
     * @param data password and confirm_password
     */
    resetPassword(id, data){
        return this.http.post("/api/user/resetPassword/"+id, data)
    }

}
