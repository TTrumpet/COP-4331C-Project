import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { LoginComponent } from './login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';

export const routes: Routes = [

    {path: 'landing-page', component: AppComponent},
    {path: 'leaderboard-popup', component: LeaderboardComponent},
    {path: 'login-popup', component: LoginComponent},
    {path: 'profile-page', component: ProfileComponent}
    // add path to 404 page (page not found)
];

@NgModule({
    imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  
export class AppRoutingModule { }
