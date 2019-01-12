import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AskComponent } from './ask.component';
import {MaterialsModule} from '../materials.module';
import {NgxChartsModule} from '@swimlane/ngx-charts';

@NgModule({
  declarations: [AskComponent],
  imports: [
    CommonModule,
    MaterialsModule,
    NgxChartsModule,
  ]
})
export class AskModule { }
