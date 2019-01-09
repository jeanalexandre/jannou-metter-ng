import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentateurComponent } from './presentateur.component';
import {MaterialsModule} from '../materials.module';

@NgModule({
  declarations: [PresentateurComponent],
  imports: [
    CommonModule,
    MaterialsModule,
  ]
})
export class PresentateurModule { }
