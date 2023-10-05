import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 private user = null;
 //create a new BehaviorSubject class providing it an initial value 
 public userState = new BehaviorSubject(this.user);
  constructor() { 
    this.checkUserState();
  }

  //Check user is logged in or not
 public isLoggedIn(): boolean{
 if(this.user != null){
 return true;
 }
  return false; 
}
//get authData from localstorage
checkUserState(){
  let authData = localStorage.getItem('authData');
  if(authData){
    this.user = JSON.parse(authData);
    console.log(this.user);
  }
  else
  {
    this.user = null;
  }
  this.userState.next(this.user); //observer will emit user info
}
}
