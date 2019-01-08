import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LobbyComponent} from './lobby/lobby.component';

const routes: Routes = [
  {
    path: 'public',
    component: HomeComponent,
  },
  {
    path: 'lobby',
    component: LobbyComponent,
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
