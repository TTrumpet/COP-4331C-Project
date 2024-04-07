import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, RouterModule, ActivatedRoute, Router } from '@angular/router';
import { LeaderboardComponent } from '../leaderboard/leaderboard.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { LanguageComponent } from '../language/language.component';
import { UserService } from '../user.service';
import { ProfileService } from '../profile.service';
import { Subscription } from 'rxjs';
import { __values } from 'tslib';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, RouterModule, MatDialogModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
  host: {ngSkipHydration: 'true'}
})
export class ProfileComponent {
  username : string = '';
  color:string = '';
  link:string = '../../assets/images/SimpleGreenCarTopView.svg';

  private subscription: Subscription = new Subscription();
  constructor(public dialog : MatDialog, private route : ActivatedRoute, private router : Router, private userService : UserService, private profileService : ProfileService) {
  
  }

  ngOnInit(){
    if(this.userService.getLog() == false)
      this.router.navigate([''], {});
    this.profileService.initProfile();
    this.username = this.profileService.username;
    setTimeout(() => {
      this.setLink();
    },500);
    this.subscription.add(
      this.profileService.colorWatch$.subscribe((value) => {
        this.setLink();
      })
    );
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  
  }

  setLink(){
      this.link = "../../assets/images/SimpleGreenCarTopView.svg";
        if(this.profileService.carcolor == "00FF00") //green
          this.link = "../../assets/images/SimpleGreenCarTopView.svg";
        else if(this.profileService.carcolor == "FF0000")//Turquoise
          this.link ="../../assets/images/SimpleTurquoiseCarTopView.svg";
        else if(this.profileService.carcolor == "FFA500")//Orange
          this.link ="../../assets/images/SimpleOrangeCarTopView.svg";
        else if(this.profileService.carcolor == "FFFF00")//Yellow
          this.link ="../../assets/images/SimpleYellowCarTopView.svg";
        else if(this.profileService.carcolor == "0000FF")//Blue
          this.link ="../../assets/images/SimpleBlueCarTopView.svg";
        else if(this.profileService.carcolor == "800080")//Purple
          this.link ="../../assets/images/SimplePurpleCarTopView.svg";
        else if(this.profileService.carcolor == "FFC0CB")//Pink
          this.link ="../../assets/images/SimplePinkCarTopView.svg";

  }
  openProfile(){
    let profile = document.getElementById("profile");
    let custom = document.getElementById("customization");
    let stats = document.getElementById("stats");
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
    stats?.classList.remove("disabled");
    stats?.classList.add("clickable");
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
    let stats = document.getElementById("stats");
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
    stats?.classList.remove("disabled");
    stats?.classList.add("clickable");
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
  
  openStats() {
    let profile = document.getElementById("profile");
    let custom = document.getElementById("customization");
    let stats = document.getElementById("stats");
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
    stats?.classList.remove("clickable");
    stats?.classList.add("disabled");
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
    let stats = document.getElementById("stats");
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
    stats?.classList.remove("disabled");
    stats?.classList.add("clickable");
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
    let stats = document.getElementById("stats");
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
    stats?.classList.remove("disabled");
    stats?.classList.add("clickable");
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
    let stats = document.getElementById("stats");
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
    stats?.classList.remove("disabled");
    stats?.classList.add("clickable");
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
    let stats = document.getElementById("stats");
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
    stats?.classList.remove("disabled");
    stats?.classList.add("clickable");
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
    let stats = document.getElementById("stats");
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
    stats?.classList.remove("disabled");
    stats?.classList.add("clickable");
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
    console.log("updating!"); 
    this.profileService.updateProfile().subscribe({});
    this.router.navigate(['/profile']);
    setTimeout(() => {
      this.router.navigate(['/loading']); // Timer to wait for closeAll before routing to profile
    }, 100);
  }
}
