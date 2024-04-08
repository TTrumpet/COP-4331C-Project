import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { StatsComponent } from './stats/stats.component';
import { CustomizationComponent } from './customization/customization.component';
import { LanguageComponent } from './language/language.component';
import { TimerComponent } from './timer/timer.component';
import { TextComponent } from './text/text.component';
import { SoundComponent } from './sound/sound.component';
import { AboutComponent } from './about/about.component';
import { GameComponent } from './game/game.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoadingComponent } from './loading/loading.component';
import { EndgamestatsComponent } from './endgamestats/endgamestats.component';

export const routes: Routes = [

    {path: '', component: AppComponent},
    {path: 'landing', component: AppComponent},
    {path: 'profile', component: ProfileComponent, children: [
      {path: 'stats', component: StatsComponent},
      {path: 'language', component: LanguageComponent},
      {path: 'customization', component: CustomizationComponent},
      {path: 'timer', component: TimerComponent},
      {path: 'text', component: TextComponent},
      {path: 'sound', component: SoundComponent},
      {path: 'about', component: AboutComponent},
    ]},
    {path: 'loading', component: LoadingComponent, children: [
      {path: 'game', component: GameComponent},
      {path: 'results', component:EndgamestatsComponent}
    ]},

    // Wild Card Route for 404 request
    {path: '**', pathMatch: "full", component: PagenotfoundComponent},
];

@NgModule({
    imports: [BrowserModule, FormsModule, MatDialogModule, RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  
export class AppRoutingModule { }
