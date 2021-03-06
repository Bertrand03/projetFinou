import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListeMotsComponent} from './liste-mots/liste-mots.component';
import {ListeMotsBisComponent} from './liste-mots-bis/liste-mots-bis.component';
import {QuizzComponent} from './quizz/quizz.component';



const routes: Routes = [
  {
    path: 'liste-mots',
    component: ListeMotsComponent
  },

  {
    path: 'liste-mots-bis',
    component: ListeMotsBisComponent
  },
  {
    path: 'choix-quizz/quizz',
    component: QuizzComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
