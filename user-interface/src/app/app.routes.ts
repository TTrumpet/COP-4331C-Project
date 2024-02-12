import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

export const routes: Routes = [

    //{path: "", component: AppComponent, pathMatch: 'full'}, // landing page
    {path: 'profile', component: ProfileComponent}
    // make loading page / overlay
    // add path to 404 page (page not found)
];

@NgModule({
    imports: [BrowserModule, FormsModule, MatDialogModule, RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  
export class AppRoutingModule { }
