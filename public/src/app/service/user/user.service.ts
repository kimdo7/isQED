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
        return this.http.get("/api/user/email/"+id)
    }

}
