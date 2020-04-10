import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ListeMotsService} from '../services/liste-mots.service';


@Component({
  selector: 'app-liste-mots-bis',
  templateUrl: './liste-mots-bis.component.html',
  styleUrls: ['./liste-mots-bis.component.scss']
})
export class ListeMotsBisComponent implements OnInit {

  @Input () indexOfArrayBis: number;
  @Input () motTrouve: string;
  @Output () monOutputBis = new EventEmitter();

  listeMotsATrouverBis = [];

  constructor(private listeMotsService: ListeMotsService) { }

  ngOnInit() {
    this.listeMotsATrouverBis = this.listeMotsService.maListeDeMotsATrouverBis;
  }
  // getStatus() {
  //   console.log('lance getStatus(), mot trouve vaut : ');
  //   console.log(this.motTrouve);
  //   this.listeMotsService.maListeDeMotsATrouverBis
  //   return this.monOutputBis.emit(this.motTrouve);
  // }

}
