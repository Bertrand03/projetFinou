import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  isAuth: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onConnexionUser() {
    this.authService.signIn();
    this.isAuth = this.authService.isAuthSrv;
  }

  onDeconnexionUser() {
    this.authService.signOut();
    this.isAuth = this.authService.isAuthSrv;
  }

}
