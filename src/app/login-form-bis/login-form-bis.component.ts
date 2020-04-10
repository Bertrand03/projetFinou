import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ListeMotsService} from '../services/liste-mots.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login-form-bis',
  templateUrl: './login-form-bis.component.html',
  styleUrls: ['./login-form-bis.component.scss']
})
export class LoginFormBisComponent implements OnInit {

  @Input () indexOfArrayBis: number;
  @Input () motFrancais: string;
  @Input () motAnglais: string;
  @Input () motTrouve: string;
  @Input () id: number;
  @Output () monOutputBis = new EventEmitter();

  listeMotsBis = [];
  loginForm: FormGroup;
  tentativesBis = 0;
  reponseUser: string;

  constructor(private listeMotsService: ListeMotsService, private fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group(
      {
        userMotBis: []
      });
    this.listeMotsBis = this.listeMotsService.maListeDeMotsATrouverBis;
  }

  onValideUneReponseBis(indexOfArrayBis: number) {
    // console.log('Quizz 2');
    // console.log('indexOfArrayBis vaut : ');
    // console.log(this.indexOfArrayBis);
    // console.log('userMotBis vaut : ');
    // console.log(this.loginForm.value.userMotBis);
    // console.log('motFrancais vaut : ');
    // console.log(this.motFrancais);
    // console.log('motTrouve vaut : ');
    // console.log(this.motTrouve);
    this.reponseUser = this.loginForm.value.userMotBis;
    if (this.reponseUser === this.motFrancais) {
      this.mesCompteurs();
      return this.listeMotsService.switchOnOneBis(indexOfArrayBis);
    }
    this.mesCompteurs();
  }
  mesCompteurs() {
    this.tentativesBis++;
    this.monOutputBis.emit(this.motTrouve);
  }

  testerLaPosition() {
    this.listeMotsService.testerLaPositionsrv();
  }


  // onValideUneReponseBis(indexOfArrayBis: number) {
  //   this.reponseUser = this.loginForm.value.userMotBis;
  //   if (this.reponseUser === this.motFrancais) {
  //     return this.listeMotsService.switchOnOne(indexOfArrayBis);
  //   }
  //   console.log('Quizz 2')
  //   console.log('reponseUser vaut : ');
  //   console.log(this.reponseUser);
  //   console.log('motAnglais vaut : ');
  //   console.log(this.motAnglais);
  //   console.log('indexOfArray vaut : ');
  //   console.log(this.indexOfArrayBis);
  //   console.log('on lance maFonction()');
  // }



}
