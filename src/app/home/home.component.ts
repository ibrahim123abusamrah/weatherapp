import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	weather: any;
	value: any;
	location: any = {
		city: 'Hebron',
		code: 'ps'
	};
	constructor(public _weatherService: WeatherService) {
}
	ngOnInit() {
		navigator.geolocation.getCurrentPosition(res => {
			console.log(res);
			this._weatherService.getWeather(this.location.city, this.location.code).subscribe(data => {
				console.log(data);
				this.weather=data;
			});
		});
	}
}
