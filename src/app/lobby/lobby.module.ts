import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LobbyComponent } from './lobby.component';
import {MaterialsModule} from '../materials.module';

@NgModule({
  declarations: [LobbyComponent],
  imports: [
    CommonModule,
    MaterialsModule,
  ]
})
export class LobbyModule { }
