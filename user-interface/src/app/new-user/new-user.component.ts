import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-user',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.css'
})
export class NewUserComponent {
  username = '';
  password =  '';
  message =  '';
  isSuccessMessage: boolean = false;

  constructor (private userService: UserService) {

  }

  createUser(): void {
    this.userService.createUser(this.username,this.password)
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
