import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private baseUrl = 'http://localhost:5000';
  message: string = '';
  cartype: string = '';
  cartrail: string = '';
  carcolor: string = '';
  language: string = '';
  time = 0;
  textcolor: string = '';
  textsize = 0;
  username :string = '';
  chartyped = 0;
  totaltime = 0;
  charsincorrect = 0;
  totalscore = 0;

  private colorWatch = new BehaviorSubject<any>(this.carcolor);
  colorWatch$ = this.colorWatch.asObservable();
  updateCol(newCol: String){
    this.colorWatch.next(newCol);
  }
  

  constructor(private userService : UserService,private http: HttpClient){}
  
  initProfile() {
    this.username = this.userService.getUsername();
    this.userService.populateProfile(this.username)
    .subscribe({
      next: response => {
        this.carcolor = response.carcolor;
        this.message = response.message;
        this.cartype = response.cartype;
        this.cartrail = response.cartrail;
        this.language = response.language;
        this.time = response.time;
        this.textcolor = response.textcolor;
        this.textsize = response.textsize;
        this.chartyped = response.chartyped;
        this.totaltime = response.totaltime;
        this.charsincorrect = response.charsincorrect;
        this.totalscore = response.totalscore;
      }
    }) 
  }
  updateProfile(){
    // console.log(this.carcolor);
    // console.log(this.cartrail);
    return this.http.post<any>(`${this.baseUrl}/update_profile`, 
      {name : this.username,
      language:this.language,
      cartype :this.cartype,
      cartrail :this.cartrail,
      carcolor: this.carcolor,
      time: this.time,
      textcolor: this.textcolor,
      chartyped: this.chartyped,
      totaltime: this.totaltime,
      charsincorrect: this.charsincorrect,
      totalscore: this.totalscore});
  }
}
