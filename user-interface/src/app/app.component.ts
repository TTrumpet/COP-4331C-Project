import { ApplicationModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog'
import { LeaderboardComponent } from './leaderboard/leaderboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,MatDialogModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Code Cruiser';

 constructor(private dialog : MatDialog){
  }

  openDialog(){
    console.log("whaaa");
    this.dialog.open(LeaderboardComponent);
  }
}
