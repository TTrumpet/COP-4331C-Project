import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialogRef , MatDialogModule, MatDialog } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { NewUserComponent } from '../new-user/new-user.component';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,MatDialogModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(public dialogRef: MatDialogRef<LoginComponent>,public dialog: MatDialog) {
  }
  openNewUser()
  {
    this.dialog.open(NewUserComponent, {
      width: '310px',
      height: '350px'
    });
  }
}
