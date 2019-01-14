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
import {AskModule} from './ask/ask.module';
import {AnswerModule} from './answer/answer.module';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EmailModule} from './email/email.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    MaterialsModule,
    HomeModule,
    LobbyModule,
    PresentateurModule,
    AskModule,
    AnswerModule,
    EmailModule,
    NgxChartsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    MaterialsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
