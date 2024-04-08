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

  // multiplayer variables
  numOfPlayers = 0;
  onPlayer = 0;
  player1correct = 0;
  player1wrong = 0;
  player2correct = 0;
  player2wrong = 0;
  player3correct = 0;
  player3wrong = 0;
  player4correct = 0;
  player4wrong = 0;

  constructor(http: HttpClient, private route : ActivatedRoute, private router : Router,  private userService : UserService, private profileService : ProfileService) {
    this.httpClient = http;
  }

  ngOnInit() {
    // the game hasn't started yet, so load code snippets and navigate to game page
    console.log("in loading component");
    if(this.userService.getLog() == false)
      this.router.navigate([''], {});
    // get number of players
    this.httpClient.get('../assets/numofplayers.txt', {responseType: 'text'}).subscribe(data => {
      this.numOfPlayers = parseInt(data);
      this.gameStart(this.numOfPlayers);
    });
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
    }
    else { // multiplayer
      if (this.onPlayer == this.numOfPlayers) {
        // multi game over
      }
      // record results and continue
      else {
        this.recordMultiplayerResults();
        this.gameStart(this.numOfPlayers);
      }
    } 
  }

  recordMultiplayerResults() {
    if (this.onPlayer == 1) {
      this.player1correct = this.finalCountCorrect;
      this.player1wrong = this.finalCountWrong;
    }
    if (this.onPlayer == 2) {
      this.player2correct = this.finalCountCorrect;
      this.player2wrong = this.finalCountWrong;
    }
    if (this.onPlayer == 3) {
      this.player3correct = this.finalCountCorrect;
      this.player3wrong = this.finalCountWrong;
    }
    if (this.onPlayer == 4) {
      this.player4correct = this.finalCountCorrect;
      this.player4wrong = this.finalCountWrong;
    }
  }
}



