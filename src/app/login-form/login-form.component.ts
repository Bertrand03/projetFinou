import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ListeMotsService} from '../services/liste-mots.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  reponseUser: string;
  score = 0;
  scoreGlobal = 0;
  tentatives = 0;
  valideOuPas: boolean;

  @Input() id: number;
  @Input() motFrancais: string;
  @Input() motAnglais: string;
  @Input() maListeDeMotsATrouver: Array<object>;
  @Input() motTrouve: string;
  @Input() data: Array<object>;
  @Output() monOutput = new EventEmitter<number>();
  @Input() indexOfArray: number;

  loginForm: FormGroup;
  maListeDeMots = [];

  constructor(private fb: FormBuilder, private listeMotsService: ListeMotsService) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: []
    });

    this.maListeDeMots = this.listeMotsService.maListeDeMotsATrouver;
  }

  onValideUneReponse(indexOfArray: number) {
    if (this.reponseUser === this.motAnglais) {
      return this.listeMotsService.switchOnOne(indexOfArray);
    }
    this.maFonction();
    console.log('lance maFonction()');
  }

  maFonction() {
      this.tentatives++;
      this.monOutput.emit(this.tentatives);
  }

  login() {
    this.reponseUser = this.loginForm.value.username;
    console.log('reponseUser vaut : ');
    console.log(this.reponseUser);
    if (this.loginForm.value.username === this.motAnglais) {
      this.motTrouve = 'oui';
      this.valideOuPas = true;
      // this.getScore();
      // console.log('Score après if vaut : ');
      // console.log(this.score);
      // console.log('Mot trouve vaut : ');
      // console.log(this.motTrouve);
    }
  }

}
