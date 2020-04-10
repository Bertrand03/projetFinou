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

const routes: Routes = [
  {path: 'auth', component: AuthComponent},
  {path: 'liste-mots', component: ListeMotsComponent},
  {path: '', component: ListeMotsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ListeMotsComponent,
    LoginFormComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ListeMotsService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
