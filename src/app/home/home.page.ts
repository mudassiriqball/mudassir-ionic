import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  name: 'Mudassir Iqbal';
  city: 'Bhakkar';
  interests: ['Football', 'Coading', 'Reading'];

  user = {
    name: 'Mudassir Iqbal',
    city: 'Bhakkar',
    interests: ['Football', 'Coading', 'Reading']
  };
  constructor() {}

}
