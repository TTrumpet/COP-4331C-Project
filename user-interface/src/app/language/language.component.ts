import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { ProfileService } from '../profile.service';
import { promises } from 'dns';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-language',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, RouterModule, MatDialogModule,FormsModule],
  templateUrl: './language.component.html',
  styleUrl: './language.component.css',
  host: {ngSkipHydration: 'true'}
})
export class LanguageComponent {
  language : string = '';
  constructor(private route : ActivatedRoute, private router : Router,private profileService: ProfileService) {}
  ngOnInit(){
    this.getLang();
  }
  getLang()
  {
    this.language = this.profileService.language;
  }
  onLangChange(newLang: string)
  {
    this.profileService.language = newLang;
  }
}
