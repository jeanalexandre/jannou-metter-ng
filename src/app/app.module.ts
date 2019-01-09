import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialsModule} from './materials.module';
import {HomeModule} from './home/home.module';
import {LobbyModule} from './lobby/lobby.module';
import {HttpClientModule} from '@angular/common/http';
import {PresentateurModule} from './presentateur/presentateur.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialsModule,
    HomeModule,
    LobbyModule,
    PresentateurModule,
  ],
  exports: [
    MaterialsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
