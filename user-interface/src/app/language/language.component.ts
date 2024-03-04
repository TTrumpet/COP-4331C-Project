import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-language',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, RouterModule, MatDialogModule],
  templateUrl: './language.component.html',
  styleUrl: './language.component.css',
  host: {ngSkipHydration: 'true'}
})
export class LanguageComponent {

  constructor(private route : ActivatedRoute, private router : Router) {

  }
}
