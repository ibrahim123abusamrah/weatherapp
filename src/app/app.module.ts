import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherService } from './weather.service'
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import {ThehomePageModule}from './thehome-page/thehome-page.module'
import { DayComponent } from './thehome-page/day/day.component';
import {HomeComponent} from './thehome-page/home/home.component';
import{HeaderHomeComponent} from './thehome-page/header-home/header-home.component';
import {DetailComponent} from './thehome-page/detail/detail.component'
const appRoutes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'todetail', component: DetailComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ThehomePageModule,
    
    ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
