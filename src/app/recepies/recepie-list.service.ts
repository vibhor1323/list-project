import { EventEmitter, Injectable } from "@angular/core";
import { Ingrediants } from "../shared/ingrediants.model";
import { ShoppingService } from "../shopping-list/shopping-list.service";
import { Recepie } from "./recepie-model";

@Injectable()
export class RecepieService{
    recipeSelected= new EventEmitter<Recepie>();

    private recipes: Recepie[]=[
        new Recepie(
            'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [
        new Ingrediants('Meat', 1),
        new Ingrediants('French Fries', 20)
      ]),
      new Recepie('Big Fat Burger',
      'What else you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [
        new Ingrediants('Buns', 2),
        new Ingrediants('Meat', 1)
      ])
    ];
    constructor(private slService:ShoppingService){
    }
    
    getRecipes(){
        return this.recipes.slice();
    
    }

    addIngrediantsToShoppingList(ingrediants:Ingrediants[]){

        this.slService.addIngredientss(ingrediants);
    }
}

