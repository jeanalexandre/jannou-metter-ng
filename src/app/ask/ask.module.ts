import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AskComponent } from './ask.component';
import {MaterialsModule} from '../materials.module';

@NgModule({
  declarations: [AskComponent],
  imports: [
    CommonModule,
    MaterialsModule,
  ]
})
export class AskModule { }
