import { Component, OnInit } from '@angular/core';
import { Drink } from './model/models';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent implements OnInit {

  drinks: Drink[] = [];

  constructor() {

    this.drinks = [
      { name:"Coca-Cola 0.33",description:" $14.50 ", photoUrl: "../../assets/dishes/coca-cola-0.33.png",rating:"5.0"},
      { name:"Coca-Cola Zero 0.33",description:" $14.50 ", photoUrl: "../../assets/dishes/coca-cola-zero-0.33.png",rating:"5.0"},
      { name:"Fanta 0.33",description:" $14.50 ", photoUrl: "../../assets/dishes/fanta-orange-0.33.png",rating:"5.0"},
      { name:"Fanta 0.5",description:" $14.50 ", photoUrl: "../../assets/dishes/fanta-orange-0.5.png",rating:"5.0"},
      { name:"Schweppes 0.33",description:" $14.50 ", photoUrl: "../../assets/dishes/schweppes-0.33.png",rating:"5.0"},
      { name:"Rosa 0.5",description:" $14.50 ", photoUrl: "../../assets/dishes/rosa-0.5.png",rating:"5.0"},
    ];
  }
  ngOnInit() {
  }

}
