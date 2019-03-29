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

    getUser(id){
        return this.http.get("/api/user/" + id)
    }

    checkActivate(id, code){
        return this.http.get("/api/user/activate/"+id+"/"+code)
    }

    resendActivationCode(id){
        return this.http.get("/api/user/activateCode/email/"+id)
    }

    /**
     * 
     * @param data is email and password
     */
    login(data){
        return this.http.post("/api/user/login", data)
    }

    /**
     * 
     * @param data is user's email
     */
    requestForgotPassword(data){
        return this.http.post("/api/user/requestForgotPassword", data)
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
