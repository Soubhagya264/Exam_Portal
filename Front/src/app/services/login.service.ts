import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  

  constructor(private http:HttpClient) { }


public getCurrntUser(){
  let user=this.http.get(`${baseUrl}current-user`);
  return user;
}


public loginStatusSub=new Subject<boolean>();
 
public generateToken(loginData:any){
  return this.http.post(`${baseUrl}generate-token`,loginData);
}
public loginUser(token:any){
  localStorage.setItem("token",token);
  
  return true;
}
public isLoggedIn(){
  let tokrnstr=localStorage.getItem("token")
  if(tokrnstr==null || tokrnstr==undefined || tokrnstr==""){
    return false;
  }
  else{
    return true;
  }
   
}


public logout(){
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  return true;
}

//
public getToken(){
  return localStorage.getItem("token");
}

public setUser(user:any){
 localStorage.setItem("user",JSON.stringify(user));
}

//get user
public getUser(){
  let user=localStorage.getItem("user");
  if (user!=null){
       return JSON.parse(user);
      }
    else{
      this.logout();
      return null;
    }  
}

//get user role
public getUserRole(){
  let user=this.getUser();
  
  return user.authorities[0].authority;
}

}


