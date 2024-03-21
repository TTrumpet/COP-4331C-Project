import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialogRef , MatDialogModule, MatDialog } from '@angular/material/dialog';
import { NewUserComponent } from '../new-user/new-user.component';
import { UserService } from '../user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,MatDialogModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = '';
  password =  '';
  message =  '';
  isSuccessMessage: boolean = false;

  //must inject userService APIs
  constructor(public dialogRef: MatDialogRef<LoginComponent>,public dialog: MatDialog,private userService: UserService) {
  }

  openNewUser()
  {
    this.dialog.open(NewUserComponent, {
      width: '310px',
      height: '350px'
    });
  }
  
  //LOGIN API CALLER
  login(): void {
    this.userService.login(this.username,this.password)
      .subscribe({
        next: response => {
          console.log(response); // Handle successful login response
          this.message = response.message;
          this.isSuccessMessage = true;
        },
        error: error => {
          console.error(error); // Handle login error
          this.message = error.error.message;
          this.isSuccessMessage = false;
        }
      });
  }
}
