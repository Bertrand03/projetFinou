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
  motStatusBis: any;

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
      this.motStatusBis = this.listeMotsService.switchOnOneBis(indexOfArrayBis);
      this.mesCompteurs();
      return this.listeMotsService.switchOnOneBis(indexOfArrayBis);
    }
    console.log('motStatusBis apres service vaut : ');
    console.log(this.motStatusBis);
    this.mesCompteurs();
  }
  mesCompteurs() {
    this.tentativesBis++;
    this.motTrouve = this.motStatusBis
    this.monOutputBis.emit(this.motTrouve);
  }

  // testerLaPosition() {
  //   this.listeMotsService.testerLaPositionsrv();
  // }
}
