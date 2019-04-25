import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(private http: HttpClient) { }

    getName(login_id) {
        return this.http.get("http://localhost:8000/api/user/"+login_id)
    }

    /**
     * 
     * @param data is first, last name, email, pass and confirmpass
     */
    register(data) {
        return this.http.post("/api/user/register", data)
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