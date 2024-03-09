import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, RouterModule, ActivatedRoute, Router } from '@angular/router';
import { LeaderboardComponent } from '../leaderboard/leaderboard.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { LanguageComponent } from '../language/language.component';

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

  
  openProfile() {
    let profile = document.getElementById("profile");
    let custom = document.getElementById("customization");
    let language = document.getElementById("language");
    let timer = document.getElementById('timer');
    let text = document.getElementById('text');
    let sound = document.getElementById('sound');
    let about = document.getElementById('about');
    let profiletext = document.getElementById("profiletext");

    profile?.classList.remove("clickable");
    profile?.classList.add("disabled");
    custom?.classList.remove("disabled");
    custom?.classList.add("clickable");
    language?.classList.remove("disabled");
    language?.classList.add("clickable");
    timer?.classList.remove("disabled");
    timer?.classList.add("clickable");
    text?.classList.remove("disabled");
    text?.classList.add("clickable");
    sound?.classList.remove("disabled");
    sound?.classList.add("clickable");
    about?.classList.remove("disabled");
    about?.classList.add("clickable");
    profiletext?.classList.remove("hidden");

    this.router.navigate(['.'], { relativeTo: this.route });
  }

  openCustomization() {
    let profile = document.getElementById("profile");
    let custom = document.getElementById("customization");
    let language = document.getElementById("language");
    let timer = document.getElementById('timer');
    let text = document.getElementById('text');
    let sound = document.getElementById('sound');
    let about = document.getElementById('about');
    let profiletext = document.getElementById("profiletext");

    profile?.classList.remove("disabled");
    profile?.classList.add("clickable");
    custom?.classList.remove("clickable");
    custom?.classList.add("disabled");
    language?.classList.remove("disabled");
    language?.classList.add("clickable");
    timer?.classList.remove("disabled");
    timer?.classList.add("clickable");
    text?.classList.remove("disabled");
    text?.classList.add("clickable");
    sound?.classList.remove("disabled");
    sound?.classList.add("clickable");
    about?.classList.remove("disabled");
    about?.classList.add("clickable");
    profiletext?.classList.add("hidden");
  }

  openLanguage() {
    let profile = document.getElementById("profile");
    let custom = document.getElementById("customization");
    let language = document.getElementById("language");
    let timer = document.getElementById('timer');
    let text = document.getElementById('text');
    let sound = document.getElementById('sound');
    let about = document.getElementById('about');
    let profiletext = document.getElementById("profiletext");
    
    profile?.classList.remove("disabled");
    profile?.classList.add("clickable");
    custom?.classList.remove("disabled");
    custom?.classList.add("clickable");
    language?.classList.remove("clickable");
    language?.classList.add("disabled");
    timer?.classList.remove("disabled");
    timer?.classList.add("clickable");
    text?.classList.remove("disabled");
    text?.classList.add("clickable");
    sound?.classList.remove("disabled");
    sound?.classList.add("clickable");
    about?.classList.remove("disabled");
    about?.classList.add("clickable");
    profiletext?.classList.add("hidden");
  }

  openTimer() {
    let profile = document.getElementById("profile");
    let custom = document.getElementById("customization");
    let language = document.getElementById("language");
    let timer = document.getElementById('timer');
    let text = document.getElementById('text');
    let sound = document.getElementById('sound');
    let about = document.getElementById('about');
    let profiletext = document.getElementById("profiletext");

    profile?.classList.remove("disabled");
    profile?.classList.add("clickable");
    custom?.classList.remove("disabled");
    custom?.classList.add("clickable");
    language?.classList.remove("disabled");
    language?.classList.add("clickable");
    timer?.classList.remove("clickable");
    timer?.classList.add("disabled");
    text?.classList.remove("disabled");
    text?.classList.add("clickable");
    sound?.classList.remove("disabled");
    sound?.classList.add("clickable");
    about?.classList.remove("disabled");
    about?.classList.add("clickable");
    profiletext?.classList.add("hidden");
  }

  openText() {
    let profile = document.getElementById("profile");
    let custom = document.getElementById("customization");
    let language = document.getElementById("language");
    let timer = document.getElementById('timer');
    let text = document.getElementById('text');
    let sound = document.getElementById('sound');
    let about = document.getElementById('about');
    let profiletext = document.getElementById("profiletext");

    profile?.classList.remove("disabled");
    profile?.classList.add("clickable");
    custom?.classList.remove("disabled");
    custom?.classList.add("clickable");
    language?.classList.remove("disabled");
    language?.classList.add("clickable");
    timer?.classList.remove("disabled");
    timer?.classList.add("clickable");
    text?.classList.remove("clickable");
    text?.classList.add("disabled");
    sound?.classList.remove("disabled");
    sound?.classList.add("clickable");
    about?.classList.remove("disabled");
    about?.classList.add("clickable");
    profiletext?.classList.add("hidden");
  }

  openSound() {
    let profile = document.getElementById("profile");
    let custom = document.getElementById("customization");
    let language = document.getElementById("language");
    let timer = document.getElementById('timer');
    let text = document.getElementById('text');
    let sound = document.getElementById('sound');
    let about = document.getElementById('about');
    let profiletext = document.getElementById("profiletext");

    profile?.classList.remove("disabled");
    profile?.classList.add("clickable");
    custom?.classList.remove("disabled");
    custom?.classList.add("clickable");
    language?.classList.remove("disabled");
    language?.classList.add("clickable");
    timer?.classList.remove("disabled");
    timer?.classList.add("clickable");
    text?.classList.remove("disabled");
    text?.classList.add("clickable");
    sound?.classList.remove("clickable");
    sound?.classList.add("disabled");
    about?.classList.remove("disabled");
    about?.classList.add("clickable");
    profiletext?.classList.add("hidden");
  }

  openAbout() {
    let profile = document.getElementById("profile");
    let custom = document.getElementById("customization");
    let language = document.getElementById("language");
    let timer = document.getElementById('timer');
    let text = document.getElementById('text');
    let sound = document.getElementById('sound');
    let about = document.getElementById('about');
    let profiletext = document.getElementById("profiletext");

    profile?.classList.remove("disabled");
    profile?.classList.add("clickable");
    custom?.classList.remove("disabled");
    custom?.classList.add("clickable");
    language?.classList.remove("disabled");
    language?.classList.add("clickable");
    timer?.classList.remove("disabled");
    timer?.classList.add("clickable");
    text?.classList.remove("disabled");
    text?.classList.add("clickable");
    sound?.classList.remove("disabled");
    sound?.classList.add("clickable");
    about?.classList.remove("clickable");
    about?.classList.add("disabled");
    profiletext?.classList.add("hidden");
  }

  openLeaderboard(){
    const dialogRef = this.dialog.open(LeaderboardComponent, {
      width: '1010px',
      height: '1080px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    })
  }

  openGame() {
    
  }
}
