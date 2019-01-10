import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnswerComponent } from './answer.component';
import {MaterialsModule} from '../materials.module';

@NgModule({
  declarations: [AnswerComponent],
  imports: [
    CommonModule,
    MaterialsModule,
  ]
})
export class AnswerModule { }
