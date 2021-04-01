import { HttpClient } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable ,Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private subject = new Subject<any>();

  constructor(private hc:HttpClient,private router:Router) { }

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
  logoutUser(){
    localStorage.clear();
   this.router.navigateByUrl("/home")

  }

  LoginStatusMethod(loginstate){
  this.subject.next(loginstate)
  }

  receiveLoginState():Observable<any>{
    return this.subject.asObservable();
  }
  
  getProfileDetails(username):Observable<any>{
    return this.hc.get(`/user/getsingleuserprofiledetail/${username}`)
  }

// -----------------------------CATEGORIES--------------------------
// getdals(category):Observable<any>{
//   return this.hc.get(`/product/dals-pulses/${category}`)

// }







}