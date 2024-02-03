import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-leaderboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.css'
})
export class LeaderboardComponent{

  constructor(public dialogRef: MatDialogRef<LeaderboardComponent>) {
    
  }
 
}
