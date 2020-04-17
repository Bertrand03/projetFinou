import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ListeMotsComponent } from './liste-mots/liste-mots.component';
import { LoginFormComponent } from './login-form/login-form.component';
import {ListeMotsService} from './services/liste-mots.service';
import { AuthComponent } from './auth/auth.component';
import {AuthService} from './services/auth.service';
import {RouterModule, Routes} from '@angular/router';
import { ListeMotsBisComponent } from './liste-mots-bis/liste-mots-bis.component';
import { LoginFormBisComponent } from './login-form-bis/login-form-bis.component';
import {HttpClientModule} from '@angular/common/http';
import {NgxAudioPlayerModule} from 'ngx-audio-player';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AideComponent } from './aide/aide.component';
import { ScoreComponent } from './score/score.component';
import { ChoixQuizzComponent } from './choix-quizz/choix-quizz.component';
import { QuizzComponent } from './quizz/quizz.component';
import { TexteQuizzComponent } from './texte-quizz/texte-quizz.component';
import { ContenuQuizzComponent } from './contenu-quizz/contenu-quizz.component';
import { QuizzZeroComponent } from './quizz-zero/quizz-zero.component';

const routes: Routes = [
  {path: 'auth', component: AuthComponent},
  {path: 'liste-mots', component: ListeMotsComponent},
  {path: 'choix-quizz', component: ChoixQuizzComponent},
  {path: 'liste-mots-bis', component: ListeMotsBisComponent},
  {path: '', component: AuthComponent},
  {path: '**', component: AuthComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ListeMotsComponent,
    LoginFormComponent,
    AuthComponent,
    ListeMotsBisComponent,
    LoginFormBisComponent,
    AideComponent,
    ScoreComponent,
    ChoixQuizzComponent,
    QuizzComponent,
    TexteQuizzComponent,
    ContenuQuizzComponent,
    QuizzZeroComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxAudioPlayerModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  providers: [
    ListeMotsService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
