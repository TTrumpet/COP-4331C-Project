import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, RouterModule, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, RouterModule],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css'
})
export class LoadingComponent {
  text = "loading...";
  finalCount = 0;
  codeText: string[] = [];

  constructor(private route : ActivatedRoute, private router : Router) {
    
  }

  ngOnInit() {
    // else the game hasn't started yet, so load code snippets and navigate to game page
      this.codeText = ["hi", "bye", "code cruiser is fun", "i love coding"];
      this.router.navigate(['/loading/game']);
    }

  gameOver() {
    // if the game is over, wait till the game is saved into database and show stats
      console.log("back in loading!")
      console.log(this.finalCount);
  }
}



