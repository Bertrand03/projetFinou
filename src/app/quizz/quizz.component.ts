import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.scss']
})
export class QuizzComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {
    // console.log('indexQuizz quizz: ' + this.indexQuizz);
  }

}
