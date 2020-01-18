import { Component, OnInit } from '@angular/core';
import { Sandwich } from './model/models';

@Component({
  selector: 'app-sandwich',
  templateUrl: './sandwich.component.html',
  styleUrls: ['./sandwich.component.css']
})
export class SandwichComponent implements OnInit {

    sandwiches: Sandwich[] = [];


  constructor() {
    this.sandwiches = [
      { name:"Genovese",description:" $14.50 ", photoUrl: "../../assets/dishes/genovese.png",rating:"5.0"},
      { name:"Pizza-Sandwich",description:" $14.50 ", photoUrl: "../../assets/dishes/pizza-sandwich-ham.png",rating:"5.0"},
      { name:"Veneto",description:" $14.50 ", photoUrl: "../../assets/dishes/veneto.png",rating:"5.0"},
      { name:"Romano",description:" $14.50 ", photoUrl: "../../assets/dishes/romano.png",rating:"5.0"},
      { name:"Milano",description:" $14.50 ", photoUrl: "../../assets/dishes/milano.png",rating:"5.0"},
      { name:"Calabrese",description:" $14.50 ", photoUrl: "../../assets/dishes/calabrese.png",rating:"5.0"},
    ];
   }



  ngOnInit() {
  }

}