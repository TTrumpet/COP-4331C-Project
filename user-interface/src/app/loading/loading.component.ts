import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
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
  codeString: string = "";
  codeText: string[] = [];
  private httpClient: HttpClient;

  constructor(http: HttpClient, private route : ActivatedRoute, private router : Router) {
    this.httpClient = http;
  }

  ngOnInit() {
    // the game hasn't started yet, so load code snippets and navigate to game page
    console.log("in loading component");
    this.httpClient.get('../assets/codesnippets.txt', {responseType: 'text'}).subscribe(data => {
        this.codeString = data;
        console.log(this.codeString);
        this.codeText = this.codeString.split("\r\n");
        console.log(this.codeText);
        this.router.navigate(['/loading/game']);
    });
}

  gameOver() {
    // if the game is over, wait till the game is saved into database and show stats
      console.log("back in loading!")
      console.log(this.finalCount);
  }
}



