import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, RouterModule, ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from '../profile.service';
import { UserService } from '../user.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EndgamestatsComponent } from '../endgamestats/endgamestats.component';
import { EndgameService } from '../endgamestats/endgame.service';
import { MultiService } from '../multistats/multi.service';

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


  constructor(private multi : MultiService,http: HttpClient, private route : ActivatedRoute, private router : Router,  private userService : UserService, private profileService : ProfileService,public dialog: MatDialog,private endGame : EndgameService) {
    this.httpClient = http;
  }

  ngOnInit() {
    if(this.multi.turn == 2){
      this.text = "Player 1 get ready!"
    }else if(this.multi.turn == 1){
      this.text = "Player 2 get ready!"
    }
    // the game hasn't started yet, so load code snippets and navigate to game page
    console.log("in loading component");
    if (this.userService.getLog() == false)
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
      if(this.multi.isMulti == true){
        
        if(this.multi.turn ==  1){
          this.multi.setResultsP1(this.finalCountWrong,this.finalCountCorrect, this.profileService.time);
          this.router.navigate(['/profile']);
          setTimeout(() => {
            this.router.navigate(['/loading']); // Timer to wait for closeAll before routing to profile
          }, 300);
        }else{
          this.multi.setResultsP2(this.finalCountWrong,this.finalCountCorrect);
          this.router.navigate(['/loading/multi-results']);
        }

      }else{
        this.endGame.setResults(this.finalCountWrong,this.finalCountCorrect, this.profileService.time);
        this.router.navigate(['/loading/results']);
      }
  }
}



