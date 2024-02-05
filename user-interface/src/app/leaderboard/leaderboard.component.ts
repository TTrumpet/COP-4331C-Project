import { CommonModule } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { LeaderboardService } from './leaderboard.service';


interface Player {
  name: string;
  score: number;
}

@Component({
  selector: 'app-leaderboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.css'
})
export class LeaderboardComponent implements OnInit{
  topPlayers: Player[] = [];
  constructor(
    public dialogRef: MatDialogRef<LeaderboardComponent>,
    private leaderboardService: LeaderboardService
  ) {}
  ngOnInit(): void {
    this.loadTopTen();
  }
  loadTopTen() {
    this.leaderboardService.getTopTen().subscribe((players) => {
      this.topPlayers = players;
    });
  }
}
