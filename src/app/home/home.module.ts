import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {MaterialsModule} from '../materials.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MaterialsModule,
  ]
})
export class HomeModule { }
