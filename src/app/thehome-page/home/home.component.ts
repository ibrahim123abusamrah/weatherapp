import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../weather.service';
@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	weather: any;
	value: any;
	currDay: any;
	temMin: any;
	temMax: any;
	date: any;
	list = [];
	ForDays = [];
	days = [];
	location: any = {
		city: 'Hebron',
		code: 'ps'
	};
	getForDay() {
		let finDay = this.date.toString().substring(0, 8) + (parseInt(this.date.toString().substring(8, 10)) + 4) +'' ;
	
		let x = this.list.filter((item) => (this.toTimestamp((item.dt_txt).toString().substring(0, 10)) > this.toTimestamp(this.date) && this.toTimestamp((item.dt_txt).toString().substring(0, 10) < finDay)))
			.filter(item => new Date(item.dt_txt).getHours() === 12)
		console.log(x)
	}
	toTimestamp(strDate) {
		var datum = Date.parse(strDate);
		return datum / 1000;
	}

	constructor(public _weatherService: WeatherService) {

	}
	ngOnInit() {
		navigator.geolocation.getCurrentPosition(res => {
			this._weatherService.getWeather(res.coords.latitude, res.coords.longitude).subscribe(data => {

				this.weather = data;
				this.currDay = new Date(this.weather.list[0].dt_txt).toString().substring(0, 3)
				if (this.currDay == 'Wed')
					this.currDay = "Wednesday"
				this.temMin = (this.weather.list[0].main.temp_min - 273).toString().substring(0, 4);
				this.temMax = (this.weather.list[0].main.temp_max - 273).toString().substring(0, 4);
				this.date = this.weather.list[0].dt_txt.split(' ')[0];
				this.list = this.weather.list;
				this.getForDay();
				/*
					let j = 0;
				let currentTime = '';
				for (let i = 0;  i < this.weather.list.length; i++) {
					const myDate = this.weather.list[i].dt_txt.split(' ')[0];
					if (myDate == currentTime) {
						this.days.push(this.weather.list[i]);
						j++;
					}
				}*/ 
				});
		});
console.log(this.days)
	}
	
}
