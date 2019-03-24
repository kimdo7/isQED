import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(private _http: HttpClient) { }

    gimmeJoke(){
        return this._http.get("https://api.chucknorris.io/jokes/random")
    }

    /********************************
    * Client side crud for User
     ********************************/
    // Get a single user
    getUser(id: string){
        // returns a single observable
        return this._http.get(`/api/users/${id}`);
    }
    
    // get all users
    getUsers(){
        // returns all the observables
        return this._http.get(`/api/users`);
    }

    // add a user
    newUser(addUser){
        console.log("add new User", addUser);
        return this._http.post('/api/users/add', addUser);
    }
    
    // update user by user id
    updateUser(id, editUser){
        console.log(`update user with edit user passed in ${id} ${id.name} `, editUser);
        return this._http.put(`/api/users/${id}`, editUser);
    }

    // delete user by user id
    deleteUser(id) {
        console.log('deleting user by id', id);
        return this._http.delete(`/api/users/` + id);
    }

}
