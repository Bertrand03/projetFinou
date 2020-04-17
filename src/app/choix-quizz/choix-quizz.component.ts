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
    {id: 3, nomQuizz: 'Divers'},
    {id: 4, nomQuizz: 'Trouve le mot en Anglais'}
  ];

  quizzTemporel: Array<{id: number, motFrancais: string, motAnglais: string, motTrouve: string}>;
  quizzAnimaux: Array<{id: number, motFrancais: string, motAnglais: string, motTrouve: string}>;
  quizzCorpsHumain: Array<{id: number, motFrancais: string, motAnglais: string, motTrouve: string}>;
  quizzDivers: Array<{id: number, motFrancais: string, motAnglais: string, motTrouve: string}>;
  maListeATrouver: Array<{id: number, motFrancais: string, motAnglais: string, motTrouve: string}>;
  quizzAAfficher: Array<{id: number, motFrancais: string, motAnglais: string, motTrouve: string}>;

  indiceChoix = 0;
  displayOK: boolean;

  constructor(private activatedRoute: ActivatedRoute, private listeMotsService: ListeMotsService) {
  }

  ngOnInit() {
    this.quizzTemporel = this.listeMotsService.quizzTemporelService;
    this.quizzAnimaux = this.listeMotsService.quizzAnimauxService;
    this.quizzCorpsHumain = this.listeMotsService.quizzCorpsHumainService;
    this.quizzDivers = this.listeMotsService.quizzDiversService;
    this.maListeATrouver = this.listeMotsService.maListeDeMotsATrouver;
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

    if (this.indiceChoix === 3) {
      this.quizzAAfficher = this.quizzDivers;
    }

    if (this.indiceChoix === 4) {
      this.quizzAAfficher = this.maListeATrouver;
    }
    this.displayOK = true;
    this.donneNomDuQuizz(this.indiceChoix);
  }

  donneNomDuQuizz(indiceChoix) {
    this.listeMotsService.getNumeroDuQuizz(indiceChoix);
  }
}
