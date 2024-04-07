import { CommonModule } from '@angular/common';
import { Component, Output } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, RouterModule, ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { HostListener } from '@angular/core';
import { LoadingComponent } from '../loading/loading.component';
import { UserService } from '../user.service';
import { ProfileService } from '../profile.service';

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
  codeText: string[] = this._parent.codeText;

  num = 0; // index of code text
  previousLine = ""; // previous line
  currentLine = this.codeText[this.num]; // what is being edited in the background
  displayWhiteLine = this.currentLine;
  displayGreyLine = this.currentLine;
  nextLine = this.codeText[this.num + 1]; // next line

  key = ''; // char from KeyboardEvent
  countCorrect = 0;  // count of correct amount of characters
  finalcountCorrect = 0; // use to record count after game is completed (since hostlistener cannot be disabled)
  countWrong = 0;
  finalcountWrong = 0;
  newLines = ""; // for wrapped strings
  spacecount = 1; // display spaces
  isGameStart = false;
  isGameEnd = false;

  constructor(private _parent: LoadingComponent, public dialog : MatDialog, private route : ActivatedRoute, private router : Router,  private userService : UserService, private profileService : ProfileService) {
    
  }

  // ngOnInit() {
  //   if (this.userService.getLog() == false)
  //     this.router.navigate([''], {}); 
  // }

  ngAfterContentInit() {
    if (this.userService.getLog() == false)
      this.router.navigate([''], {}); 
    else {
      // have car moving onto the track
      setTimeout( () => {
        this._parent.text = "3";
        console.log("3");
      }, 1000)
      setTimeout( () => {
        this._parent.text = "2";
        console.log("2");
      }, 2000)
      setTimeout( () => {
        this._parent.text = "1";
        console.log("1");
      }, 3000)
      setTimeout( () => {
        this._parent.text = "START!";
        console.log("START!");
      }, 4000)
      setTimeout( () => {
        this._parent.text = "";
      }, 5000)
      setTimeout( () => {
        this.playGame();
        this.isGameStart = true;
      }, 5000)
    }
  }

  playGame() {
    // change the time to what the player selects
    this.timer(0.5);

    // add generating new code snippets after some time
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
        // also include car speeding off and slowing down dotted line -> transition to loading screen
        this._parent.text = "FINISH!"
        this.isGameEnd = true;
        this.finalcountCorrect = this.countCorrect;
        this.finalcountWrong = this.countWrong;
        this._parent.finalCountCorrect = this.finalcountCorrect;
        this._parent.finalCountWrong = this.finalcountWrong;
        console.log(this._parent.finalCountCorrect);
        setTimeout( () => {
          clearInterval(timer);
          this._parent.text = "loading...";
          //this.router.navigate(['/loading']);
          //this._parent.gameOver();
        }, 3000)
      }
    }, 1000);
  }

    // check if key pressed is equal to the current line's char at index 0
    // put moving the car inside this function?
  checkKeypress() {
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
      this.currentLine = this.currentLine.substring(1);

      this.displayWhiteLine = "";

      // adding new line characters for wrapped strings
      if (this.spacecount % 52 == 0) {
          this.newLines += '\r\n';
          this.spacecount = 0;
      }
      this.displayWhiteLine += this.newLines;

       // adding leading spaces
      for (let i = 0; i < this.spacecount; i++)
        this.displayWhiteLine += " ";
        
      // adding the substring
      this.displayWhiteLine += this.currentLine;
    
      this.spacecount = this.spacecount + 1;
      this.countCorrect++;
    }
    else {
      this.countWrong++;
    }
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event:KeyboardEvent) {
    if (this.isGameEnd) { // stops reading keyboard events when game ends
      return;
    }
    if (this.isGameStart) { // starts reading keyboard events when game starts
      this.key = event.key;
      this.checkKeypress();
    }
  }

}

