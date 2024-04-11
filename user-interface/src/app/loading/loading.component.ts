import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, RouterModule, ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from '../profile.service';
import { UserService } from '../user.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EndgamestatsComponent } from '../endgamestats/endgamestats.component';
import { EndgameService } from '../endgamestats/endgame.service';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, RouterModule, MatDialogModule],
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

  numOfPlayers = 0;
  onPlayer = 0;

  constructor(http: HttpClient, private route : ActivatedRoute, private router : Router,  private userService : UserService, private profileService : ProfileService,public dialog: MatDialog,private endGame : EndgameService) {
    this.httpClient = http;
  }

  ngOnInit() {
    // the game hasn't started yet, so load code snippets and navigate to game page
    console.log("in loading component");
    if(this.userService.getLog() == false)
      this.router.navigate([''], {});
    else {
      // get number of players
      this.gameStart(1);
    }
  }

  gameStart(numOfPlayers : number) {
    this.numOfPlayers = numOfPlayers;
    this.language = this.profileService.language;
    console.log(this.language);

    // get the code gen
    this.httpClient.post(`${this.baseUrl}/get_code`, {language : this.language}).subscribe(data => {
      
    });

    setTimeout( () => {
      this.httpClient.get('../assets/codesnippets.txt', {responseType: 'text'}).subscribe(data => {
        this.codeString = data;
        this.codeText = this.codeString.split("\r\n");
        console.log(this.codeText);
        this.router.navigate(['/loading/game']);
      });    
    }, 10000)
  }

  gameOver() {
    // if the game is over, wait till the game is saved into database and show stats
    if (this.numOfPlayers == 1) { // single player stats
      console.log("back in loading!");
      console.log(this.finalCountCorrect);
      console.log(this.finalCountWrong);
      this.endGame.setResults(this.finalCountWrong,this.finalCountCorrect, this.profileService.time);
      this.router.navigate(['/loading/results']);
    }
    else { // multiplayer
      if (this.onPlayer - 1 == this.numOfPlayers) {
        // multi game over
      }
      // record results and continue
       
      else {
        if(this.onPlayer == 1) {
          
        } else if (this.onPlayer == 2) {
          
        }
        this.recordMultiplayerResults();
        this.gameStart(this.numOfPlayers);
      }
    } 
  }

  recordMultiplayerResults() {
    if (this.onPlayer == 1) {
      
    }
    if (this.onPlayer == 2) {
      
    }
  }
}



