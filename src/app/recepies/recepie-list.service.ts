import { EventEmitter } from "@angular/core";
import { Recepie } from "./recepie-model";

export class RecepieService{
    recipeSelected= new EventEmitter<Recepie>();

    private recipes: Recepie[]=[
        new Recepie('A Test Recepie' , 'this is simply a text','https://www.vegrecipesofindia.com/wp-content/uploads/2021/05/rajma-recipe-1-580x580.jpg' ),
      new Recepie('Another Test Recepie' , 'this is simply a text','https://www.vegrecipesofindia.com/wp-content/uploads/2021/05/rajma-recipe-1-580x580.jpg' )
    ];
    
    getRecipes(){
        return this.recipes.slice();
    
    }
}

