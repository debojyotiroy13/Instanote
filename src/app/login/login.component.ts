import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','../app.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  ngOnInit() {
  }

  constructor(public authService: AuthService, private router:Router) {}

  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
  }

  login() {
    this.authService.login(this.email, this.password).then(() => {
      this.router.navigate(['/']);
    })
    .catch(err => {
      console.log('Something went wrong:',err.message);
    });;
    
    this.email = this.password = '';
  }

  logout() {
    this.authService.logout();
  }
  

}
