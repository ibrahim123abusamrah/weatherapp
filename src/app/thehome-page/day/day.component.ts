import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {
  @Input() days;
  temMin: any;
  temMax: any;

  constructor() { }

  ngOnInit() {
    console.log(this.days);

  }

}
