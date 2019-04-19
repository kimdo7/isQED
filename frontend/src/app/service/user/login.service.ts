import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }

  /* @param data is email and password
  */
 login(data){
      console.log(data);
     return this.http.post("/api/login", data)
 }












}
