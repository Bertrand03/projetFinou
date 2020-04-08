import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ListeMotsComponent } from './liste-mots/liste-mots.component';
import { LoginFormComponent } from './login-form/login-form.component';
import {ListeMotsService} from './services/liste-mots.service';

@NgModule({
  declarations: [
    AppComponent,
    ListeMotsComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    ListeMotsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
