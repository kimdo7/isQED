import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private http: HttpClient) { }

    /**
     *
     *  @param data is email and password
    */
    login(data){
      return this.http.post("/api/login", data)
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

