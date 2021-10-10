import { Component, OnInit } from '@angular/core';
import { Ingrediants } from '../shared/ingrediants.model';
import { ShoppingService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingrediants  !: Ingrediants[];

  constructor(private slService: ShoppingService) { }

  ngOnInit() {
    this.ingrediants=this.slService.getIncredients(); 
    this.slService.ingredientsChanged
    .subscribe(
      (ingrediants: Ingrediants[])=>{
        this.ingrediants=ingrediants;
      }
    )   
  }

  

}
