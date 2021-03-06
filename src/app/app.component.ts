import {Component, OnInit} from '@angular/core';
import {ListeMotsService} from './services/liste-mots.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  maListeDeMotsATrouver = [];
  maListeDeMotsATrouverBis = [];
  canStart = false;

  constructor(private listeMotsService: ListeMotsService) {
  }

  ngOnInit() {
    this.maListeDeMotsATrouver = this.listeMotsService.maListeDeMotsATrouver;
    this.maListeDeMotsATrouverBis = this.listeMotsService.maListeDeMotsATrouverBis;
  }
  }

