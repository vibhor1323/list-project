import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecepieService } from '../recepie-list.service';
import {Recepie} from '../recepie-model'

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css']
})
export class RecepieListComponent implements OnInit {
  @Output()  recipeWasSelected= new EventEmitter<Recepie>();
  recipes !: Recepie[];
  
  constructor(private recipeService :RecepieService) {  }

  ngOnInit(){
    this.recipes = this.recipeService.getRecipes();
    }

  onRecipeSelected(recipe: Recepie){
    this.recipeWasSelected.emit(recipe);
  }

}
