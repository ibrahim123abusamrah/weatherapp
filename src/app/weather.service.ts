
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey = 'cd98f2cf101b9fd1d6663a6e78452485';
  uri;
  constructor(private http: HttpClient) {
    this.uri = 'http://api.openweathermap.org/data/2.5/forecast?q=';
  }
  getWeather(city, code) {
    return this.http.get(this.uri + city + ',' + code + '&APPID=' + this.apiKey);
  }

}
