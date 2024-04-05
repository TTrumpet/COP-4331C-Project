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
  constructor(private route : ActivatedRoute, private router : Router) {
    
  }
}
