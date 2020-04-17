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
  @Input() quizzTemporel: Array<object>;
  @Input() motTrouve: string;
  @Input() data: Array<object>;
  @Output() monOutput = new EventEmitter<number>();
  @Output() exportStringToParent = new EventEmitter<string>();
  @Input() indexOfArray: number;
  @Input() indexOfArrayBis: number;
  @Input() titreDuQuizz: string;
  @Input() displayOK: boolean;


  monTitreQuizz = this.titreDuQuizz;
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
  premierCoup = 0;
  reponseUser: string;
  reponseQuizzZero: string;
  choixDuQuizz = this.listeMotsService.choixDuQuizz;

  constructor(private fb: FormBuilder, private listeMotsService: ListeMotsService) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: [],
      reponseQuizzZeroForm: []
    });

    this.maListeDeMots = this.listeMotsService.maListeDeMotsATrouver;

    this.audio = new Audio();
    this.audio.src = '../../assets/audio1/applause.mp3';
    this.audio.load();

  }

  onValideUneReponse(indexOfArray: number) {
    console.log('choix du quizz : ' + this.listeMotsService.choixDuQuizz);
    if (this.listeMotsService.choixDuQuizz <= 2) {
      this.reponseQuizzZero = this.loginForm.value.reponseQuizzZeroForm;
      console.log('reponseQuizzZero vaut : ' + this.reponseQuizzZero);
    }
    this.reponseUser = this.loginForm.value.username;
    // console.log('Quizz 1')
    console.log('reponseUser vaut : ');
    console.log(this.reponseUser);
    console.log('motAnglais vaut : ');
    console.log(this.motAnglais);
    // console.log('indexOfArray vaut : ');
    // console.log(this.indexOfArray);
    if ((this.reponseUser === this.motAnglais) || (this.reponseQuizzZero === this.motAnglais)) {
      if (this.tentatives < 1) {
        console.log('tentatives vaut : ' + this.tentatives);
        this.premierCoup++;
        this.listeMotsService.getPremierCoup();
      } else {
          this.listeMotsService.ajouteMotsNonTrouves(this.motAnglais);
      }
      // this.cptNbOui++
      // console.log('cptNbOui si juste vaut : ');
      // console.log(this.cptNbOui);
      this.listeMotsService.switchOnOne(indexOfArray);
      console.log('motTrouve vaut : ');
      console.log(this.motTrouve);
      this.maFonction();
      this.combienDeOui2();
      return null;
    }
    // console.log('on lance maFonction()');
    this.maFonction();
    // console.log('cptNbOui vaut : ');
    // console.log(this.cptNbOui);
  }

  // combienDeOui() {
  //   console.log('lance combienDeOui()');
  //   this.cptNbOui = 0;
  //   for (let i = 0; i < 5; i++) {
  //     // console.log(this.listeMotsService.maListeDeMotsATrouver[i].motAnglais + ' vaut : ' +
  //     //   this.listeMotsService.maListeDeMotsATrouver[i].motTrouve);
  //     if (this.maListeDeMots[i].motTrouve === 'oui') {
  //       this.cptNbOui++;
  //       console.log('cptNbOui vaut : ' + this.cptNbOui);
  //       console.log('Taille du tableau : ' + this.listeMotsService.maListeDeMotsATrouver.length);
  //     }
  //   }
  //   if (this.cptNbOui === this.listeMotsService.maListeDeMotsATrouver.length) {
  //     console.log('Quizz terminé, lance audio');
  //     this.playAudio();
  //   }
  // }

  // VERSION 2 combienDeOui2()

  combienDeOui2() {
    console.log('lance combienDeOui2()');
    this.cptNbOui = 0;
    for (let i = 0; i < this.listeMotsService.quizzAAfficherService.length; i++) {
      // console.log(this.listeMotsService.maListeDeMotsATrouver[i].motAnglais + ' vaut : ' +
      //   this.listeMotsService.maListeDeMotsATrouver[i].motTrouve);
      if (this.listeMotsService.quizzAAfficherService[i].motTrouve === 'oui') {
        this.cptNbOui++;
        console.log('cptNbOui vaut : ' + this.cptNbOui);
        console.log('Taille du tableau quizzAAfficherService : ' + this.listeMotsService.quizzAAfficherService.length);
      }
    }
    if (this.cptNbOui === this.listeMotsService.quizzAAfficherService.length) {
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
