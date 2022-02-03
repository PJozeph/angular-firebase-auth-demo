import { Component, OnInit } from '@angular/core';
import { UserCredential } from '@angular/fire/auth';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  public email: string;
  public password: string;
  public user: UserCredential;
  public errorMessage: string;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {}

  login() {
    this.authService.emailLogin(this.email, this.password).subscribe({
      next: (user) => this.user = user,
      error: (error) => this.errorMessage = error,
    });
  }

  createAccount() {
    this.authService.createUserWithEmail(this.email, this.password).subscribe({
      next: (user) => this.user = user,
      error: (error) => this.errorMessage = error,
    });
  }

}
