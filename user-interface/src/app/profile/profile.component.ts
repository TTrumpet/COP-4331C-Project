import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, RouterModule, ActivatedRoute, Router } from '@angular/router';
import { LeaderboardComponent } from '../leaderboard/leaderboard.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, RouterModule, MatDialogModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
  host: {ngSkipHydration: 'true'}
})
export class ProfileComponent {

  constructor(public dialog : MatDialog, private route : ActivatedRoute, private router : Router) {
    
  }

  openLeaderboard(){
    const dialogRef = this.dialog.open(LeaderboardComponent, {
      width: '1010px',
      height: '1080px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.router.navigate(['.'], { relativeTo: this.route });
    })
  }
}
