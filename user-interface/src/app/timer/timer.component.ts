import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { ProfileService } from '../profile.service';
import internal from 'stream';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css'
})
export class TimerComponent {
  time = 15;

  constructor(private profileService : ProfileService){

  }

  ngOnInit() {
    this.getTime();
  }

  getTime() {
    this.time = this.profileService.time;
  }

  onTimeChange(newTime: number) {
    this.profileService.time = newTime;
  }
}
