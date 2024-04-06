import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, RouterModule, ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { UserService } from '../user.service';
import { ProfileService } from '../profile.service'import { HostListener } from '@angular/core';

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

  // change into code snippets
  codeText: string[]= ["can you type this sentence", "this is a sentence", "more sentence", "yay", "hi"] ;

  num = 0; // index of code text
  previousLine = ""; // previous line
  currentLine = this.codeText[this.num]; // what is being edited in the background
  displayWhiteLine = this.currentLine;
  displayGreyLine = this.currentLine;
  nextLine = this.codeText[this.num + 1]; // next line

  key = ''; // char from KeyboardEvent
  count = 0;  // count of correct amount of characters
  isGameOver = false; // so more code snippets are not generated
  finalcount = 0; // use to record count after game is completed (since hostlistener cannot be disabled)
  spacecount = 1;

  constructor(public dialog : MatDialog, private route : ActivatedRoute, private router : Router, private userService : UserService, private profileServices : ProfileService) {
    if(this.userService.getLog() == false)
      this.router.navigate([''], {});
    this.playGame();
  }

  playGame() {
    // change the time to what the player selects
    this.timer(1);
  }

    // add calls to get more code text
  }

  timer(minute: number) {
    let seconds: number = minute * 60;
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
        this.isGameOver = true;
        this.finalcount = this.count;
        console.log(this.finalcount);
        clearInterval(timer);
      }
    }, 1000);
  }

  // check if key pressed is equal to the current line's char at index 0
checkKeypress() {
  // add check to see if codeText is empty and if so, change it so that it gets the newly generated code text
  // don't forget to reset everything back to zero (num)
  if (this.currentLine.length == 0) {
    this.previousLine = this.codeText[this.num];
    this.num = this.num + 1;
    this.currentLine = this.codeText[this.num];
    this.displayGreyLine = this.currentLine;
    this.displayWhiteLine = this.currentLine;
    this.nextLine = this.codeText[this.num + 1];
    this.spacecount = 1;
  }
  if (this.key == this.currentLine.charAt(0)) {
    console.log("correct!");
    this.currentLine = this.currentLine.substring(1);

    // adding leading spaces
    this.displayWhiteLine = "";
    for (let i = 0; i < this.spacecount; i++) {
      this.displayWhiteLine += " ";
    }
    // adding the substring
    this.displayWhiteLine += this.currentLine;
    console.log(this.displayWhiteLine);

    this.spacecount = this.spacecount + 1;
    this.count++;
  }
}

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event:KeyboardEvent) {
    if(this.isGameOver)
      return;
    this.key = event.key;
    console.log(this.key);
    this.checkKeypress();
  }
}

