import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class UserService {
  private baseUrl = 'http://localhost:5000'; //Flask backend URL. Change for hosting
  username : string = '';
  isLog : boolean = false;
  //setup HTTP endpoints
  constructor(private http: HttpClient) { }
  
  //POSTs specified data to BACKEND route which handles login
  login(name: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, { name, password });
  }
  //POSTs specified data to BACKEND route which handles creating user
  createUser(name: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/create_user`, { name, password, "python":String});
  }

  setUsername(username: string) {
    this.username = username;
  }

  getUsername(): string {
    return this.username;
  }

  getLog(): boolean{
    return this.isLog;
  }

  setLog() {
    this.isLog = true;
  }

  //Populates user profile
  populateProfile(name: string) {
    return this.http.post<any>(`${this.baseUrl}/populate_profile`, {name});
  }

}