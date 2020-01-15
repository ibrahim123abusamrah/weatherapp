import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DayComponent } from './day/day.component';
import {HomeComponent} from './home/home.component';
import{HeaderHomeComponent} from './header-home/header-home.component'
import { AppRoutingModule } from '../app-routing.module';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [DayComponent,HomeComponent,HeaderHomeComponent, DetailComponent],
  imports: [
    CommonModule,AppRoutingModule,
  ]
})
export class ThehomePageModule { }
