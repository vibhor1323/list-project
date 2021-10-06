import { Component, OnInit } from '@angular/core';
import { Ingrediants } from '../shared/ingrediants.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingrediants: Ingrediants[] =[
    new Ingrediants('Apples',5),
    new Ingrediants('Tomatoes',10),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
