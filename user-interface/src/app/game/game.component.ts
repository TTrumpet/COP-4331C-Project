import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, RouterModule, ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { UserService } from '../user.service';
import { ProfileService } from '../profile.service'

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, RouterModule, MatDialogModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css',
  host: {ngSkipHydration: 'true'}
})
export class GameComponent {
  display: any;

  constructor(public dialog : MatDialog, private route : ActivatedRoute, private router : Router, private userService : UserService, private profileServices : ProfileService) {
    if(this.userService.getLog() == false)
      this.router.navigate([''], {});
    this.playGame();

    // change the time to what the player selects
    this.timer(this.profileServices.time);
  }

  playGame() {
  }

  timer(seconds: number) {
    // let minute = 1
    let textSec: any = '0';
    let statSec: number = seconds;

    const timer = setInterval(() => {
      seconds--;
      if (statSec != 0) statSec--;
      else statSec = 59;

      if (statSec < 10) {
        textSec = '0' + statSec;
      } else textSec = statSec;

      this.display = `${textSec} Seconds`;

      if (seconds == 0) {
        console.log('finished');
        clearInterval(timer);
      }
    }, 1000);
  }
}
