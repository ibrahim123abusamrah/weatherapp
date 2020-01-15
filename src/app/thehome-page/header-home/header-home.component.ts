import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-header-home',
  templateUrl: './header-home.component.html',
  styleUrls: ['./header-home.component.css']
})
export class HeaderHomeComponent implements OnInit {
  @Input() currDay;
  @Input() temMin;
  @Input() temMax;
  @Input() date;


  constructor() {

  }

  ngOnInit() {
  
  }
}
