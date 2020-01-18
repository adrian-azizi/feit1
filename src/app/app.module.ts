import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { PizzaComponent } from './pizza/pizza.component';
import { SandwichComponent } from './sandwich/sandwich.component';
import { DesertComponent } from './desert/desert.component';
import { DrinksComponent } from './drinks/drinks.component';
import { FooterComponent } from './footer/footer.component';
   

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PizzaComponent,
    SandwichComponent,
    DesertComponent,
    DrinksComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  entryComponents: [MenuComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
