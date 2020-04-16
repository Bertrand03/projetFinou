import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-contenu-quizz',
  templateUrl: './contenu-quizz.component.html',
  styleUrls: ['./contenu-quizz.component.scss']
})
export class ContenuQuizzComponent implements OnInit {

  @Input() indexQuizz: number;

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

  constructor() { }

  ngOnInit(): void {
    // if (this.indexQuizz === 1) {
    //   this.quizzAAfficher = this.quizzTemporel;
    // }
    //
    // if (this.indexQuizz === 2) {
    //   this.quizzAAfficher = this.quizzAnimaux;
    // }
    //
    // if (this.indexQuizz === 3) {
    //   this.quizzAAfficher = this.quizzCorpsHumain;
    // }
    // console.log('indexQuizz contenu-quizz: ' + this.indexQuizz);
  }

}
