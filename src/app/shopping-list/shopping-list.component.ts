import { Component, OnInit } from '@angular/core';
import {  Subscription } from 'rxjs';
import { Ingrediants } from '../shared/ingrediants.model';
import { ShoppingService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingrediants  !: Ingrediants[];
  private igChangeSub !: Subscription;

  constructor(private slService: ShoppingService) { }

  ngOnInit() {
    this.ingrediants=this.slService.getIncredients(); 
    this.igChangeSub=this.slService.ingredientsChanged
    .subscribe(
      (ingrediants: Ingrediants[])=>{
        this.ingrediants=ingrediants;
      }
    )   
  }
  ngOnDestroy(){
    this.igChangeSub.unsubscribe();
  }


  

}
