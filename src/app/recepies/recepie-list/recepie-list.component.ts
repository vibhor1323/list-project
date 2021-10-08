import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Recepie} from '../recepie-model'

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css']
})
export class RecepieListComponent implements OnInit {
  @Output()  recipeWasSelected= new EventEmitter<Recepie>();

  recipes: Recepie[]=[
    new Recepie('A Test Recepie' , 'this is simply a text','https://www.vegrecipesofindia.com/wp-content/uploads/2021/05/rajma-recipe-1-580x580.jpg' ),
  new Recepie('A Test Recepie' , 'this is simply a text','https://www.vegrecipesofindia.com/wp-content/uploads/2021/05/rajma-recipe-1-580x580.jpg' )
];
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recepie){
    this.recipeWasSelected.emit(recipe);
  }

}
