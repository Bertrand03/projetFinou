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
  tentatives = 0;
  tentativesBis = 0;
  monScore = 0;

  @Input() id: number;
  @Input() motFrancais: string;
  @Input() motAnglais: string;
  @Input() maListeDeMotsATrouver: Array<object>;
  @Input() motTrouve: string;
  @Input() data: Array<object>;
  @Output() monOutput = new EventEmitter<number>();
  @Output() exportStringToParent = new EventEmitter<string>();
  @Input() indexOfArray: number;
  @Input() indexOfArrayBis: number;

  loginForm: FormGroup;
  maListeDeMots = [];
  maListeDeMotsBis = [];

  constructor(private fb: FormBuilder, private listeMotsService: ListeMotsService) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: []
    });

    this.maListeDeMots = this.listeMotsService.maListeDeMotsATrouver;
  }

  onValideUneReponse(indexOfArray: number) {
    this.reponseUser = this.loginForm.value.username;
    if (this.reponseUser === this.motAnglais) {
      console.log('monScore vaut : ');
      console.log(this.monScore);
      this.monScore++;
      this.maFonction();
      return this.listeMotsService.switchOnOne(indexOfArray);
    }
    console.log('Quizz 1')
    console.log('reponseUser vaut : ');
    console.log(this.reponseUser);
    console.log('motAnglais vaut : ');
    console.log(this.motAnglais);
    console.log('indexOfArray vaut : ');
    console.log(this.indexOfArray);
    console.log('on lance maFonction()');
    this.maFonction();
  }

  maFonction() {
      this.tentatives++;
      this.monOutput.emit(this.tentatives);
      this.monOutput.emit(this.monScore);
  }

  login() {
    this.reponseUser = this.loginForm.value.username;
    console.log('reponseUser vaut : ');
    console.log(this.reponseUser);
    if (this.loginForm.value.username === this.motAnglais) {
      // this.motTrouve = 'oui';
    }
  }
}
