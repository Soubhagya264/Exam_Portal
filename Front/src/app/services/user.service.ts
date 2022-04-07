import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }
 

  public adduser(user:any){
    return this.http.post(`${baseUrl}user/`,user);
  }
// get all users
  public getAllUsers(){
    return this.http.get(`${baseUrl}user/all-users`);
  }

}
