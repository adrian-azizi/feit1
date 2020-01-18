import { Component, OnInit, Input } from '@angular/core';
import { Pizza,Sandwich,Drink,Dessert } from './model/models';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  

    pizzas: Pizza[] = [];
    sandwiches: Sandwich[] = [];
    drinks: Drink[] = [];
    desserts: Dessert[] = [];

  constructor() {
    this.pizzas = [
      { name:"Pizza Margharita",description:" ", photoUrl: "../../assets/dishes/margherita.png",rating:"4.5"},
      { name:"Pizza Capriciosa",description:" ", photoUrl: "../../assets/dishes/kapricioza.png",rating:"5.0"},
      { name:"Pizza Napolitana",description:" ", photoUrl: "../../assets/dishes/neapolitan.png",rating:"5.0"},
      { name:"Pizza Pepperoni",description:" ", photoUrl: "../../assets/dishes/pepperoni.png",rating:"5.0"},
      { name:"Pizza Olive",description:" ", photoUrl: "../../assets/dishes/olive.png",rating:"5.0"},
      { name:"Pizza Prosciutto",description:" ", photoUrl: "../../assets/dishes/prosciutto.png",rating:"5.0"},
      { name:"Pizza Quattro Formagi",description:" ", photoUrl: "../../assets/dishes/quatro-formagi.png",rating:"5.0"},
      { name:"Pizza Tuna",description:" ", photoUrl: "../../assets/dishes/tuna.png",rating:"5.0"},
      { name:"Pizza Vegetariana",description:" ", photoUrl: "../../assets/dishes/vegetariana.png",rating:"5.0"},
      { name:"Pizza Bianca",description:" ", photoUrl: "../../assets/dishes/bianca.png",rating:"5.0"},
      { name:"Pizza Bacon",description:" ", photoUrl: "../../assets/dishes/bacon.png",rating:"5.0"},
      { name:"Pizza Combo",description:" ", photoUrl: "../../assets/dishes/combo.png",rating:"5.0"}
    ];


    this.sandwiches = [
      { name:"Genovese",description:" ", photoUrl: "../../assets/dishes/genovese.png",rating:"5.0"},
      { name:"Pizza-Sandwich",description:" ", photoUrl: "../../assets/dishes/pizza-sandwich-ham.png",rating:"5.0"},
      { name:"Veneto",description:" ", photoUrl: "../../assets/dishes/veneto.png",rating:"5.0"},
      { name:"Romano",description:" ", photoUrl: "../../assets/dishes/romano.png",rating:"5.0"},
      { name:"Milano",description:" ", photoUrl: "../../assets/dishes/milano.png",rating:"5.0"},
      { name:"Calabrese",description:" ", photoUrl: "../../assets/dishes/calabrese.png",rating:"5.0"},
    ];


    this.drinks = [
      { name:"Coca-Cola 0.33",description:" ", photoUrl: "../../assets/dishes/coca-cola-0.33.png",rating:"5.0"},
      { name:"Coca-Cola Zero 0.33",description:" ", photoUrl: "../../assets/dishes/coca-cola-zero-0.33.png",rating:"5.0"},
      { name:"Fanta 0.33",description:" ", photoUrl: "../../assets/dishes/fanta-orange-0.33.png",rating:"5.0"},
      { name:"Fanta 0.5",description:" ", photoUrl: "../../assets/dishes/fanta-orange-0.5.png",rating:"5.0"},
      { name:"Schweppes 0.33",description:" ", photoUrl: "../../assets/dishes/schweppes-0.33.png",rating:"5.0"},
      { name:"Rosa 0.5",description:" ", photoUrl: "../../assets/dishes/rosa-0.5.png",rating:"5.0"},
    ];

    this.desserts = [
      { name:"Tiramisu",description:" ", photoUrl: "../../assets/dishes/25.png",rating:"5.0"},
      { name:"Pumpkin Pie",description:" ", photoUrl: "../../assets/dishes/26.png",rating:"5.0"},
      { name:"Ice Cream",description:" ", photoUrl: "../../assets/dishes/27.png",rating:"5.0"},

    ];
   }



  ngOnInit() {
  }

}
