import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})

export class ContentComponent implements OnInit {

  garments: Model.Garment[];
  constructor() {
    this.garments = [
      {
        id: 1,
        type: 'Худи',
        gender: 'женское',
        season: 'autumn/winter',
        color: 'red',
        price: 1200,
        photo: '2.JPG',
        presence: 'Доступна для заказа 3-5 дней'
      },
      {
        id: 2,
        type: 'Худи',
        gender: 'мужское',
        season: 'autumn/winter',
        color: 'orange',
        price: 1100,
        photo: '3.JPG',
        presence: 'Доступна для заказа 3-5 дней'
      },
      {
        id: 3,
        type: 'Худи',
        gender: 'женское',
        season: 'autumn/winter',
        color: 'black',
        price: 900,
        photo: '4.JPG'
      },
      {
        id: 4,
        type: 'Худи',
        gender: 'женское',
        season: 'autumn/winter',
        color: 'pink',
        price: 1100,
        photo: '5.JPG'
      },
   ];
  }

  ngOnInit() {
  }

}
