import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ListeMotsService} from '../services/liste-mots.service';

@Component({
  selector: 'app-choix-quizz',
  templateUrl: './choix-quizz.component.html',
  styleUrls: ['./choix-quizz.component.scss']
})
export class ChoixQuizzComponent implements OnInit {

  tabChoixQuizz = [
    {id: 0, nomQuizz: 'Temporel'},
    {id: 1, nomQuizz: 'Animaux'},
    {id: 2, nomQuizz: 'Corps Humain'},
    {id: 3, nomQuizz: 'Trouve le mot en Anglais'}
  ];

  quizzTemporel = [
    {id: 0, motFrancais: 'Lundi', motAnglais: 'Monday', motTrouve: 'non'},
    {id: 1, motFrancais: 'Janvier', motAnglais: 'Jannuary', motTrouve: 'non'},
    {id: 2, motFrancais: 'Minuit', motAnglais: 'Midnight', motTrouve: 'non'}
  ];

  quizzAnimaux = [
    {id: 0, motFrancais: 'Chat', motAnglais: 'Cat', motTrouve: 'non'},
    {id: 1, motFrancais: 'Chien', motAnglais: 'Dog', motTrouve: 'non'},
    {id: 2, motFrancais: 'Cheval', motAnglais: 'Horse', motTrouve: 'non'}
  ];

  quizzCorpsHumain = [
    {id: 0, motFrancais: 'Main', motAnglais: 'Hand', motTrouve: 'non'},
    {id: 1, motFrancais: 'Doigt', motAnglais: 'Finger', motTrouve: 'non'},
    {id: 2, motFrancais: 'Tete', motAnglais: 'Head', motTrouve: 'non'}
  ];

  // quizzAAfficher = [{}];

  indiceChoix = 0;
  displayOK: boolean;
  quizzAAfficher = this.listeMotsService.quizzAAfficherService;


  constructor(private activatedRoute: ActivatedRoute, private listeMotsService: ListeMotsService) {
  }

  ngOnInit() {
    this.quizzTemporel = this.listeMotsService.quizzTemporelService;
    this.quizzAnimaux = this.listeMotsService.quizzAnimauxService;
    this.quizzCorpsHumain = this.listeMotsService.quizzCorpsHumainService;
  }

  onValiderChoix(id) {
    this.indiceChoix = id;
    console.log(id);
    if (this.indiceChoix === 0) {
      this.quizzAAfficher = this.quizzTemporel;
    }

    if (this.indiceChoix === 1) {
      this.quizzAAfficher = this.quizzAnimaux;
    }

    if (this.indiceChoix === 2) {
      this.quizzAAfficher = this.quizzCorpsHumain;
    }
    // console.log('quizzAAfficher');
    // console.log(this.quizzAAfficher);
    this.displayOK = true;
    this.donneNomDuQuizz(this.indiceChoix);
  }

  donneNomDuQuizz(indiceChoix) {
    this.listeMotsService.getNumeroDuQuizz(indiceChoix);
  }
}
