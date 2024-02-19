import { ApplicationModule, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { LoginComponent } from './login/login.component';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MatDialogModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host: { ngSkipHydration: 'true' }
})
export class AppComponent {
  title = 'Code Cruiser';

  constructor(public dialog: MatDialog, private route: ActivatedRoute, private router: Router) {

  }

  openLeaderboard() {
    const dialogRef = this.dialog.open(LeaderboardComponent, {
      width: '1010px',
      height: '1080px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.router.navigate(['.'], { relativeTo: this.route });
    })
  }

  openLogin() {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '310px',
      height: '350px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.router.navigate(['.'], { relativeTo: this.route });
    });
  }
}