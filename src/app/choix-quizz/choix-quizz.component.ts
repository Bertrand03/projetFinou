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
    {id: 2, nomQuizz: 'Corps Humain'}
    ];

  quizzTemporel = [
    {id: 0, motFrancais: 'Lundi', motAnglais: 'Monday'},
    {id: 1, motFrancais: 'Janvier', motAnglais: 'Jannuary'},
    {id: 2, motFrancais: 'Minuit', motAnglais: 'Midnight'}
  ];

  quizzAnimaux = [
    {id: 0, motFrancais: 'Chat', motAnglais: 'Cat'},
    {id: 1, motFrancais: 'Chien', motAnglais: 'Dog'},
    {id: 2, motFrancais: 'Cheval', motAnglais: 'Horse'}
  ];

  quizzCorpsHumain = [
    {id: 0, motFrancais: 'Main', motAnglais: 'Hand'},
    {id: 1, motFrancais: 'Doigt', motAnglais: 'Finger'},
    {id: 2, motFrancais: 'Tete', motAnglais: 'Head'}
  ];

  quizzAAfficher = [{}];

  indiceChoix = 0;
  displayOK: boolean;

  constructor(private activatedRoute: ActivatedRoute, private listeMotsService: ListeMotsService) {
  }

  ngOnInit() {
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
    console.log(this.quizzAAfficher);
    this.displayOK = true;
  }

}
