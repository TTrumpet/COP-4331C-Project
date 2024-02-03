import { ApplicationModule, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogConfig, MatDialogModule } from '@angular/material/dialog';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';

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

  openDialog(){
    this.dialog.open(LeaderboardComponent, {
      width: '1000px',
      height: '1080px'
    });
  }

}