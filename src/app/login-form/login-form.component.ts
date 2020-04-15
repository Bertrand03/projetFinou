import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ListeMotsService} from '../services/liste-mots.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
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

  reponseUser: string;
  tentatives = 0;
  loginForm: FormGroup;
  maListeDeMots = [];
  scoreJoueur = 0;
  nbReponses = this.listeMotsService.maListeDeMotsATrouver.length;

  constructor(private fb: FormBuilder, private listeMotsService: ListeMotsService) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: []
    });

    this.maListeDeMots = this.listeMotsService.maListeDeMotsATrouver;
    // this.scoreJoueur = this.listeMotsService.scoreGlobal;
  }

  onValideUneReponse(indexOfArray: number) {
    this.reponseUser = this.loginForm.value.username;
    console.log('Quizz 1')
    console.log('reponseUser vaut : ');
    console.log(this.reponseUser);
    console.log('motAnglais vaut : ');
    console.log(this.motAnglais);
    console.log('indexOfArray vaut : ');
    console.log(this.indexOfArray);
    if (this.reponseUser === this.motAnglais) {
      this.maFonction();
      return this.listeMotsService.switchOnOne(indexOfArray);
    }
    console.log('on lance maFonction()');
    this.maFonction();
  }

  maFonction() {
      this.tentatives++;
      this.monOutput.emit(this.tentatives);
      this.monOutput.emit(this.scoreJoueur);
      console.log('dans maFonction(), scoreJoueur vaut : ');
      console.log(this.scoreJoueur);
  }

  onSave() {
    this.reponseUser = this.loginForm.value.username;
    this.listeMotsService.saveWordsToServer();
  }

  onCount() {
    this.scoreJoueur = this.listeMotsService.getScoreGlobal();
    console.log('passe dans onCount(login-form). scoreJoueur vaut : ');
    console.log(this.scoreJoueur);
    this.monOutput.emit(this.scoreJoueur);
  }

}
