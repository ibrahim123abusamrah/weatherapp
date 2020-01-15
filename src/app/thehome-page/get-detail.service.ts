import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetDetailService {
  items: any;
  getItems() {
    return this.items;
  };
  setItems(item) {
    this.items = item;
  }
  constructor() { }
}
