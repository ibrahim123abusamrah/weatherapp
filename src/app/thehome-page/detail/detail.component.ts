import { Component, OnInit } from '@angular/core';
import { GetDetailService } from '../../thehome-page/get-detail.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  mainDetail: any;
  constructor(public getdetail: GetDetailService) { }

  ngOnInit() {
    this.mainDetail = this.getdetail.getItems();
    console.log((this.mainDetail));
  }

}
