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

  msbapTitle = 'Audio Title';
  msbapAudioUrl = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';

  msbapDisplayTitle = false;
  msbapDisplayVolumeControls = true;

  constructor(private listeMotsService: ListeMotsService) {
  }

  ngOnInit() {
    this.maListeDeMotsATrouver = this.listeMotsService.maListeDeMotsATrouver;
    this.maListeDeMotsATrouverBis = this.listeMotsService.maListeDeMotsATrouverBis;
  }

  playAudio() {
    let audio = new Audio();
    audio.src = 'C:/Users/bertrand.cerot/Documents/Enregistrements audio/speechtotexten';
    audio.load();
    audio.play();
    }
  }

