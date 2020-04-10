import {Component, Input, OnInit} from '@angular/core';
import {ListeMotsService} from '../services/liste-mots.service';


@Component({
  selector: 'app-liste-mots-bis',
  templateUrl: './liste-mots-bis.component.html',
  styleUrls: ['./liste-mots-bis.component.scss']
})
export class ListeMotsBisComponent implements OnInit {

  @Input () indexOfArrayBis: number;

  listeMotsATrouverBis = [];

  constructor(private listeMotsService: ListeMotsService) { }

  ngOnInit() {
    this.listeMotsATrouverBis = this.listeMotsService.maListeDeMotsATrouverBis;
  }

}
