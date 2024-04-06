import { CommonModule } from '@angular/common';
import { Component, Output } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, RouterModule, ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { HostListener } from '@angular/core';
import { LoadingComponent } from '../loading/loading.component';

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
  codeText: string[] = this._parent.codeText;;

  num = 0; // index of code text
  previousLine = ""; // previous line
  currentLine = this.codeText[this.num]; // what is being edited in the background
  displayWhiteLine = this.currentLine;
  displayGreyLine = this.currentLine;
  nextLine = this.codeText[this.num + 1]; // next line

  key = ''; // char from KeyboardEvent
  count = 0;  // count of correct amount of characters
  finalcount = 0; // use to record count after game is completed (since hostlistener cannot be disabled)
  spacecount = 1;
  isGameStart = false;

  // car variables
  numChars = this.currentLine.length; // for seeing how fast the car moves

  constructor(private _parent: LoadingComponent, public dialog : MatDialog, private route : ActivatedRoute, private router : Router) {
    
  }

  /*ngOnInit() {
    if (this.userService.getLog() == false)
      this.router.navigate([''], {}); 
  }*/

  ngAfterContentInit() {
    this.placeCar();
    setTimeout( () => {
      this._parent.text = "3";
      console.log("3");
    }, 3000)
    setTimeout( () => {
      this._parent.text = "2";
      console.log("2");
    }, 6000)
    setTimeout( () => {
      this._parent.text = "1";
      console.log("1");
    }, 9000)
    setTimeout( () => {
      this._parent.text = "START!";
      console.log("START!");
    }, 12000)
    setTimeout( () => {
      this._parent.text = "";
    }, 15000)
    setTimeout( () => {
      this.playGame();
      this.isGameStart = true;
    }, 15000)
  }

  // put the car on the track
  placeCar() {

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
        this._parent.text = "FINISH!"
        this.finalcount = this.count;
        console.log(this.finalcount);
        this._parent.finalCount = this.finalcount;
        console.log(this._parent.finalCount);
        setTimeout( () => {
          clearInterval(timer);
          this._parent.text = "loading...";
          this.router.navigate(['/loading']);
          this._parent.gameOver();
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

      // adding leading spaces
      this.displayWhiteLine = "";
      for (let i = 0; i < this.spacecount; i++) {
        this.displayWhiteLine += " ";
      }
      // adding the substring
      this.displayWhiteLine += this.currentLine;

      this.spacecount = this.spacecount + 1;
      this.count++;
    }
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event:KeyboardEvent) {
    if (this.isGameStart) {
      this.key = event.key;
      this.checkKeypress();
    }
  }

}

