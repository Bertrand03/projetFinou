import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-liste-mots',
  templateUrl: './liste-mots.component.html',
  styleUrls: ['./liste-mots.component.scss']
})
export class ListeMotsComponent implements OnInit {

  score = 0;

  @Input() id: number;
  @Input() motFrancais: string;
  @Input() motAnglais: string;
  @Input() maListeDeMotsATrouver: Array<object>;
  @Input() motTrouve: string;
  @Input() data: Array<object>;


  constructor() {
  }

  ngOnInit() {
  }

  onMonOuput() {
    console.log('Appel onMonOutput');
  }

  onCalculScore() {
    console.log('Appel onCalculScore()');
    console.log('Score vaut : ');
    console.log(this.score);
    this.score++;
    console.log('Score après ++ vaut : ');
    console.log(this.score);
  }
}
