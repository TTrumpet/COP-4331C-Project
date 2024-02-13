import { ApplicationModule, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host: {ngSkipHydration: 'true'}
})
export class AppComponent{
  title = 'Code Cruiser';

 constructor(public dialog : MatDialog){
  
 }

  openLeaderboard(){
    this.dialog.open(LeaderboardComponent, {
      width: '1010px',
      height: '1080px',
    });
  }

  openLogin(){
    this.dialog.open(LoginComponent, {
      width: '310px',
      height: '350px'
    });
  }

}