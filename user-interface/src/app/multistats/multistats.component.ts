import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MultiService } from './multi.service';

@Component({
  selector: 'app-multistats',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './multistats.component.html',
  styleUrl: './multistats.component.css'
})

export class MultistatsComponent {
  winner = 1;
  time = 0;
  p1 = {
    wrong: 0,
    right: 0,
    total: 0,
    score: 0,
    cpm: 0,
    accuracy: 0
  };
  p2 = {
    wrong: 0,
    right: 0,
    total: 0,
    score: 0,
    cpm: 0,
    accuracy: 0
  };
  constructor(private router : Router, private multi : MultiService){}
  ngOnInit(){
    this.time = this.multi.time;
    this.p1.wrong = this.multi.p1CharsWrong;
    this.p1.right = this.multi.p1CharsCorrect;
    this.p1.score = this.multi.p1Score;
    this.p1.total = this.p1.right + this.p1.wrong;
    this.p1.cpm = Math.floor((this.p1.right / this.time)*60) ;
    this.p1.accuracy = Math.floor((this.p1.right/this.p1.total) * 100);

    this.p2.wrong = this.multi.p2CharsWrong;
    this.p2.right = this.multi.p2CharsCorrect;
    this.p2.score = this.multi.p2Score;
    this.p2.total = this.p2.right + this.p2.wrong;
    this.p2.cpm = Math.floor((this.p2.right / this.time)*60) ;
    this.p2.accuracy = Math.floor((this.p2.right/this.p2.total) * 100);

    if(this.p2.right > this.p1.right)
      this.winner = 2;

  }



  routeLogin() {
    this.router.navigate(['/profile']);
  }

  logout() {
    this.router.navigate(['/']);
  }
}

