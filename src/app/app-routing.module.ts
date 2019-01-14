import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LobbyComponent} from './lobby/lobby.component';
import {PresentateurComponent} from './presentateur/presentateur.component';
import {AskComponent} from './ask/ask.component';
import {AnswerComponent} from './answer/answer.component';
import {EmailComponent} from './email/email.component';

const routes: Routes = [
  {
    path: 'public',
    component: HomeComponent,
  },
  {
    path: 'presentateur',
    component: PresentateurComponent,
  },
  {
    path: 'ask',
    component: AskComponent,
  },
  {
    path: 'answer',
    component: AnswerComponent,
  },
  {
    path: 'lobby',
    component: LobbyComponent,
  },
  {
    path: 'email',
    component: EmailComponent,
  },
  {
    path: '**',
    redirectTo: 'public',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
