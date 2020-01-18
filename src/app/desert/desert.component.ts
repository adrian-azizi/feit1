import { Component, OnInit } from '@angular/core';
import { Dessert } from './model/models';

@Component({
  selector: 'app-desert',
  templateUrl: './desert.component.html',
  styleUrls: ['./desert.component.css']
})
export class DesertComponent implements OnInit {

    desserts: Dessert[] = [];

  constructor() {
    
    this.desserts = [
      { name:"Tiramisu",description:" $14.50 ", photoUrl: "../../assets/dishes/25.png",rating:"5.0"},
      { name:"Pumpkin Pie",description:" $14.50 ", photoUrl: "../../assets/dishes/26.png",rating:"5.0"},
      { name:"Ice Cream",description:" $14.50 ", photoUrl: "../../assets/dishes/27.png",rating:"5.0"},
    ];
   }
  ngOnInit() {
  }

}
