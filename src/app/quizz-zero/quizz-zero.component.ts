import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ListeMotsService} from '../services/liste-mots.service';

@Component({
  selector: 'app-quizz-zero',
  templateUrl: './quizz-zero.component.html',
  styleUrls: ['./quizz-zero.component.scss']
})
export class QuizzZeroComponent implements OnInit {

  @Input() id: number;
  @Input() motFrancais: string;
  @Input() motAnglais: string;
  @Input() motTrouve: string;
  @Input() indexOfArray: number;
  @Output() monOutput = new EventEmitter<number>();
  @Input() quizzAAfficher: [];

  maListeDeMots = [];
  titreDuQuizz: string = 'quizz-zero';

  // quizzTemporel = [
  //   {id: 0, motFrancais: 'Lundi', motAnglais: 'Monday', motTrouve: 'non'},
  //   {id: 1, motFrancais: 'Janvier', motAnglais: 'Jannuary', motTrouve: 'non'},
  //   {id: 2, motFrancais: 'Minuit', motAnglais: 'Midnight', motTrouve: 'non'}
  // ];

  // quizzTemporel = [{}];
  quizzTemporel: Array<object>;

  constructor(private listeMotsService: ListeMotsService) {
  }

  ngOnInit() {
    this.maListeDeMots = this.quizzAAfficher;
    this.quizzTemporel = this.listeMotsService.quizzTemporelService;
  }

  verifDataQuizz() {
    console.log('maListeDeMots : ' + this.maListeDeMots);
    console.log('quizzAAfficher : ' + this.quizzAAfficher);
    console.log('quizzTemporel : ');
    console.log(this.quizzTemporel);
    console.log('id : ' + this.id);
  }

}

