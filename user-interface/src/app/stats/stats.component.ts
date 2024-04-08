import { Component } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css'
})

export class StatsComponent {

  charsTotal: number = 1;
  charsIncorrect: number = 0;
  totaltime: number = 1;


  totalScore: number = 1;
  avgCPM : number = 0;
  accuracy: number = 0;


  constructor(private profileService: ProfileService) {

  }
  
  ngOnInit(){
    this.setStats();
  }

  setStats() {
    this.charsTotal = this.profileService.chartyped;
    this.charsIncorrect = this.profileService.charsincorrect;
    this.totaltime = this.profileService.totaltime;
    this.totalScore = this.profileService.totalscore;

    if(this.charsTotal != 0)
      this.avgCPM = Math.floor((this.charsTotal/this.totaltime)*60);
    if(this.charsTotal != 0)
      this.accuracy = Math.floor( (1- (this.charsIncorrect/this.charsTotal)) *100 );
  }
}
