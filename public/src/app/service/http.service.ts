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
}
