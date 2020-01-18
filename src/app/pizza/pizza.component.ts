import { Component, OnInit } from '@angular/core';
import { Pizza} from './model/models';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {
  pizzas: Pizza[] = [];

  constructor() {
    this.pizzas = [
      { name:"Pizza Margharita",description:" $14.50 ", photoUrl: "../../assets/dishes/margherita.png",rating:"4.5"},
      { name:"Pizza Capriciosa",description:" $14.50 ", photoUrl: "../../assets/dishes/kapricioza.png",rating:"5.0"},
      { name:"Pizza Napolitana",description:" $14.50 ", photoUrl: "../../assets/dishes/neapolitan.png",rating:"5.0"},
      { name:"Pizza Pepperoni",description:" $14.50 ", photoUrl: "../../assets/dishes/pepperoni.png",rating:"5.0"},
      { name:"Pizza Olive",description:" $14.50 ", photoUrl: "../../assets/dishes/olive.png",rating:"5.0"},
      { name:"Pizza Prosciutto",description:" $14.50 ", photoUrl: "../../assets/dishes/prosciutto.png",rating:"5.0"},
      { name:"Pizza Quattro Formagi",description:" $14.50 ", photoUrl: "../../assets/dishes/quatro-formagi.png",rating:"5.0"},
      { name:"Pizza Tuna",description:" $14.50 ", photoUrl: "../../assets/dishes/tuna.png",rating:"5.0"},
      { name:"Pizza Vegetariana",description:" $14.50 ", photoUrl: "../../assets/dishes/vegetariana.png",rating:"5.0"},
      { name:"Pizza Bianca",description:" $14.50 ", photoUrl: "../../assets/dishes/bianca.png",rating:"5.0"},
      { name:"Pizza Bacon",description:" $14.50 ", photoUrl: "../../assets/dishes/bacon.png",rating:"5.0"},
      { name:"Pizza Combo",description:" $14.50 ", photoUrl: "../../assets/dishes/combo.png",rating:"5.0"}
    ];
   }



  ngOnInit() {
  }

}
