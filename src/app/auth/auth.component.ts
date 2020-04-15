import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  loginCree = false;
  isAuth: boolean;
  loginForm: FormGroup;
  pseudoUser: string;
  motDePasseUser: string;
  pseudoUserCree: string;
  motDePasseUserCree: string;
  messageAuth: string;
  deblocageBouton = false;
  deblocageConnexion = false;
  deblocageEnregistrement = false;


  constructor(private authService: AuthService,
              private fb: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group(
      {
        pseudo: [],
        motDePasse: [],
        pseudoCreation: [],
        motDePasseCreation: []
      }
    );
    this.isAuth = this.authService.isAuthSrv;
  }

  onConnexionUser() {
    this.pseudoUser = this.loginForm.value.pseudo;
    this.motDePasseUser = this.loginForm.value.motDePasse;
    this.messageAuth = ' ';
    console.log('pseudoUser : ');
    console.log(this.pseudoUser);
    console.log('mdpUser : ');
    console.log(this.motDePasseUser);
    for (let i = 0; i < this.authService.users.length; i++) {
      if ((this.pseudoUser === this.authService.users[i].pseudo) && (this.motDePasseUser === this.authService.users[i].motDePasse)) {
        console.log('User identifié');
        this.authService.signIn();
        console.log('isAuth : ');
        console.log(this.authService.isAuthSrv);
        this.router.navigate(['liste-mots']);
      } else if ((this.pseudoUser !== this.authService.users[i].pseudo) && (this.motDePasseUser !== this.authService.users[i].motDePasse)) {
        console.log('User non reconnu');
      }
    }
    if (this.authService.isAuthSrv === true) {
      this.messageAuth = 'Connexion réussie!';
    } else {
      this.messageAuth = 'Erreur de connexion!';
    }
  }

  onDeconnexionUser() {
    this.authService.signOut();
    this.isAuth = this.authService.isAuthSrv;
  }

  onSaveUser() {
    this.pseudoUserCree = this.loginForm.value.pseudoCreation;
    this.motDePasseUserCree = this.loginForm.value.motDePasseCreation;
    this.loginCree = true;
    console.log('loginCree vaut : ');
    console.log(this.loginCree);
    this.router.navigate(['liste-mots']);
    return this.authService.saveLoginToServer(this.pseudoUserCree, this.motDePasseUserCree);
  }

  onDebloqueConnexion() {
    this.deblocageConnexion = true;
    this.deblocageBouton = true;
  }
  onDebloqueEnregistrement() {
    this.deblocageEnregistrement = true;
    this.deblocageBouton = true;
  }

}
