import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angularproject';

  onClick(id: string): void {
    const el: HTMLElement|null = document.getElementById(id);
    if (el) {
      setTimeout(() =>
        el.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'}), 0);
    }
  }

  pizza_flag: boolean = true;
  sandwich_flag: boolean = false;
  drinks_flag: boolean = false;
  dessert_flag: boolean = false;
  
  setPizza(){
    this.pizza_flag = true;
    this.sandwich_flag = false;
    this.drinks_flag = false;
    this.dessert_flag = false;
  }

  setSandwich(){
    this.pizza_flag = false;
    this.sandwich_flag = true;
    this.dessert_flag = false;
    this.drinks_flag = false;
  }

  setDesert(){
    this.pizza_flag = false;
    this.sandwich_flag = false;
    this.dessert_flag = true;
    this.drinks_flag = false;
  }

  setDrinks(){
    this.pizza_flag = false;
    this.sandwich_flag = false;
    this.dessert_flag = false;
    this.drinks_flag = true;
  }

  };