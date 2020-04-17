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

  quizzTemporel: Array<{id: number, motFrancais: string, motAnglais: string, motTrouve: string}>;
  quizzAnimaux: Array<{id: number, motFrancais: string, motAnglais: string, motTrouve: string}>;
  quizzCorpsHumain: Array<{id: number, motFrancais: string, motAnglais: string, motTrouve: string}>;
  quizzAAfficher: Array<{id: number, motFrancais: string, motAnglais: string, motTrouve: string}>;

  indiceChoix = 0;
  displayOK: boolean;

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
    this.displayOK = true;
    this.donneNomDuQuizz(this.indiceChoix);
  }

  donneNomDuQuizz(indiceChoix) {
    this.listeMotsService.getNumeroDuQuizz(indiceChoix);
  }
}
