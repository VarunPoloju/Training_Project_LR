import { HttpClient } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private hc:HttpClient) { }

  // create user
  createUser(userObj):Observable<any>{
    return this.hc.post("/user/register",userObj)
  }

  
// login user
  loginUser(usercredobj):Observable<any>{

    console.log("in service",usercredobj)
    return this.hc.post("/user/login",usercredobj)
  }


  // logout
  

}
