import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, RouterModule, ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from '../profile.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, RouterModule],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css'
})
export class LoadingComponent {
  text = "loading...";
  private baseUrl = 'http://localhost:5000';
  private httpClient: HttpClient;
  language: string = "";
  username: string = "";

  finalCountCorrect = 0;
  finalCountWrong = 0;
  codeString: string = "";
  codeText: string[] = []; 

  constructor(http: HttpClient, private route : ActivatedRoute, private router : Router,  private userService : UserService, private profileService : ProfileService) {
    this.httpClient = http;
  }

  ngOnInit() {
    // the game hasn't started yet, so load code snippets and navigate to game page
    console.log("in loading component");
    if(this.userService.getLog() == false)
      this.router.navigate([''], {});
    else {
      this.language = this.profileService.language;
      console.log(this.language);

      // createUser(name: string, password: string): Observable<any> {
      //   return this.http.post<any>(`${this.baseUrl}/create_user`, { name, password, "python":String});
      // }
      this.httpClient.post(`${this.baseUrl}/get_code`, {language : this.language});
      setTimeout( () => {
        console.log("Done");
        this.httpClient.get('../assets/codesnippets.txt', {responseType: 'text'}).subscribe(data => {
            this.codeString = data;
            console.log(this.codeString);
            this.codeText = this.codeString.split("\r\n");
            console.log(this.codeText);
            this.router.navigate(['/loading/game']);
        });    
      }, 3000)
    }
}



  gameOver() {
    // if the game is over, wait till the game is saved into database and show stats
      console.log("back in loading!");
      console.log(this.finalCountCorrect);
      console.log(this.finalCountWrong);
  }
}



