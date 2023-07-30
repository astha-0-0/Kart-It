import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginError:string|null=null;
  isErrorMessageVisible: boolean = false;

  constructor(private authservice: AuthService, private router: Router,private http: HttpClient) {}

  login(): void {
    this.http.get<any[]>('assets/users.json').subscribe(users => {
      const foundUser = users.find(user => user.username === this.username && user.password === this.password);
  
      if (foundUser) {
        this.authservice.login(this.username, this.password).subscribe(isLoggedIn => {
          if (isLoggedIn) {
            if (this.username === 'astha') {
              this.router.navigate(['/mainpage']);
            }
          }
        });
      } else {
        this.loginError = 'Invalid username or password. Please try again!';
        this.isErrorMessageVisible = true;
  
        setTimeout(() => {
          this.isErrorMessageVisible = false;
        }, 2000);
      }
    });
  }
}
