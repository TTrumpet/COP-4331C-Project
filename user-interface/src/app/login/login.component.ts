import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialogRef , MatDialogModule, MatDialog } from '@angular/material/dialog';
import { RouterOutlet, RouterLink, RouterLinkActive, RouterModule, ActivatedRoute, Router } from '@angular/router';
import { NewUserComponent } from '../new-user/new-user.component';
import { UserService } from '../user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,MatDialogModule,RouterOutlet, RouterLink, RouterLinkActive, RouterModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = '';
  password =  '';
  message =  '';

  isSuccessMessage: boolean = false;

  //must inject userService APIs
  constructor(public dialogRef: MatDialogRef<LoginComponent>,public dialog: MatDialog,private userService: UserService, private router : Router) {
  
  }

  openNewUser() {
    this.dialog.open(NewUserComponent, {
      width: '310px',
      height: '350px',
    });
  }
  
  //LOGIN API CALLER
  login(): void {
    this.userService.login(this.username,this.password)
      .subscribe({
        next: response => {
          this.userService.setUsername(this.username);
          this.userService.setLog();

          this.message = response.message;
          this.isSuccessMessage = true;


          this.dialog.closeAll();
          setTimeout(() => {
            this.router.navigate(['/profile']); // Timer to wait for closeAll before routing to profile
          }, 100);
        },
        error: error => {
          console.error(error); // Handle login error
          this.message = error.error.message;
          this.isSuccessMessage = false;
        }
      });
  }
}
