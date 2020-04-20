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
  @Input() motAudio: string;
  @Input() motAudioMarley: string;
  @Input() indexOfArray: number;
  @Output() monOutput = new EventEmitter<number>();
  @Input() quizzAAfficher: Array<{id: number, motFrancais: string, motAnglais: string, motTrouve: string}>;
  @Input() displayOk: boolean;

  constructor(private listeMotsService: ListeMotsService) {
  }

  ngOnInit() {
  }
}

