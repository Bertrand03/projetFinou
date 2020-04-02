import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableauComponent } from './tableau/tableau.component';
import { ItemTableauComponent } from './item-tableau/item-tableau.component';

@NgModule({
  declarations: [
    AppComponent,
    TableauComponent,
    ItemTableauComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
