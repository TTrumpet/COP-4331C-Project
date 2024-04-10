import { Component } from '@angular/core';
import { EndgameService } from './endgame.service';
import { Router, RouterOutlet } from '@angular/router';

import { LoadingComponent } from '../loading/loading.component';
import { ProfileService } from '../profile.service';


@Component({
  selector: 'app-endgamestats',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './endgamestats.component.html',
  styleUrl: './endgamestats.component.css'
})
export class EndgamestatsComponent {
  wrong : number = 0;
  right : number = 0;
  total : number = 0;
  time : number = 0;
  score : number = 0;
  cpm : number = 0;
  accuracy : number = 0;
  constructor(private endGameService : EndgameService, private router : Router, private profileService: ProfileService){

  }

  ngOnInit(){
    this.wrong = this.endGameService.charsWrong;
    this.right = this.endGameService.charsCorrect;
    this.time = this.endGameService.time;
    this.score = this.endGameService.score;
    this.total = this.right + this.wrong;
    this.cpm = Math.floor((this.right / this.time)*60) ;
    this.accuracy = Math.floor((this.right/this.total) * 100);
    this.updateProfile();
  }
  updateProfile(){
    this.profileService.chartyped += this.total;
    if (typeof this.time === 'number') {
      this.profileService.totaltime += this.time;
  } else {
      this.profileService.totaltime += parseInt(this.time, 10);
  }
    this.profileService.charsincorrect += this.wrong;
    this.profileService.totalscore += this.score;
    this.profileService.updateProfile().subscribe({});;
  }
  routeLogin()
  {
      this.router.navigate(['/profile']); 
  }
  logout()
  {
    this.router.navigate(['/']); 
  }
}
