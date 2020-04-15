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
  cptNbOui = 0;

  msbapTitle = 'Audio Title';
  msbapAudioUrl = 'C:/Users/bertrand.cerot/Downloads/applause.mp3';
  msbapDisplayTitle = false;
  msbapDisplayVolumeControls = false;
  displayPlayer = false;

  audio: any;

  constructor(private fb: FormBuilder, private listeMotsService: ListeMotsService) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: []
    });

    this.maListeDeMots = this.listeMotsService.maListeDeMotsATrouver;
    // this.scoreJoueur = this.listeMotsService.scoreGlobal;

    this.audio = new Audio();
    this.audio.src = '../../assets/audio1/applause.mp3';
    this.audio.load();

  }

  onValideUneReponse(indexOfArray: number) {
    this.reponseUser = this.loginForm.value.username;
    // console.log('Quizz 1')
    // console.log('reponseUser vaut : ');
    // console.log(this.reponseUser);
    // console.log('motAnglais vaut : ');
    // console.log(this.motAnglais);
    // console.log('indexOfArray vaut : ');
    // console.log(this.indexOfArray);
    if (this.reponseUser === this.motAnglais) {
      // this.cptNbOui++
      // console.log('cptNbOui si juste vaut : ');
      // console.log(this.cptNbOui);
      this.listeMotsService.switchOnOne(indexOfArray);
      this.maFonction();
      this.combienDeOui();
      return null;
    }
    // console.log('on lance maFonction()');
    this.maFonction();
    // console.log('cptNbOui vaut : ');
    // console.log(this.cptNbOui);
  }

  combienDeOui() {
    console.log('lance combienDeOui()');
    this.cptNbOui = 0;
    for (let i = 0; i < 5; i++) {
      // console.log(this.listeMotsService.maListeDeMotsATrouver[i].motAnglais + ' vaut : ' +
      //   this.listeMotsService.maListeDeMotsATrouver[i].motTrouve);
      if (this.maListeDeMots[i].motTrouve === 'oui') {
        this.cptNbOui++;
        console.log('cptNbOui vaut : ' + this.cptNbOui);
        console.log('Taille du tableau : ' + this.listeMotsService.maListeDeMotsATrouver.length);
      }
    }
    if (this.cptNbOui === this.listeMotsService.maListeDeMotsATrouver.length) {
      console.log('Quizz terminé, lance audio');
      this.playAudio();
    }
  }

  playAudio() {
    // let audio = new Audio('assets/audio1/applause.mp3');
    // audio.src = 'C:/Users/bertrand.cerot/Downloads/applause.mp3';
    // audio.load();
    this.audio.play();
  }

  maFonction() {
      this.tentatives++;
      this.monOutput.emit(this.tentatives);
      this.monOutput.emit(this.scoreJoueur);
      // console.log('dans maFonction(), scoreJoueur vaut : ');
      // console.log(this.scoreJoueur);
  }

  onSave() {
    this.reponseUser = this.loginForm.value.username;
    this.listeMotsService.saveWordsToServer();
  }

  onCount() {
    this.scoreJoueur = this.listeMotsService.getScoreGlobal();
    // console.log('passe dans onCount(login-form). scoreJoueur vaut : ');
    // console.log(this.scoreJoueur);
    this.monOutput.emit(this.scoreJoueur);
  }

}
