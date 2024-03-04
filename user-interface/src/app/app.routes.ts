import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { LanguageComponent } from './language/language.component';
import { TimerComponent } from './timer/timer.component';
import { TextComponent } from './text/text.component';
import { SoundComponent } from './sound/sound.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [

    {path: 'landing', component: AppComponent},
    {path: 'profile', component: ProfileComponent, children: [
      {path: 'language', component: LanguageComponent},
      {path: 'timer', component: TimerComponent},
      {path: 'text', component: TextComponent},
      {path: 'sound', component: SoundComponent},
      {path: 'about', component: AboutComponent},
    ]},
    {path: '**', redirectTo:"", pathMatch: "full"}
    // add path to 404 page (page not found)
    // make loading page / overlay
];

@NgModule({
    imports: [BrowserModule, FormsModule, MatDialogModule, RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  
export class AppRoutingModule { }
