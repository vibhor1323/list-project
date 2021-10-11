import { EventEmitter } from "@angular/core";
import { Ingrediants } from "../shared/ingrediants.model";

export class ShoppingService{
    ingredientsChanged = new EventEmitter<Ingrediants[]>();
    private ingrediants : Ingrediants[] =[
        new Ingrediants('Apples',5),
        new Ingrediants('Tomatoes',10),
      ];

    getIncredients(){
        return this.ingrediants.slice();
    }

    addIncredients( ingredients: Ingrediants){
        this.ingrediants.push(ingredients);
        this.ingredientsChanged.emit(this.ingrediants.slice());
    }

    addIngredientss(ingrediants:Ingrediants[]){
        this.ingrediants.push(...ingrediants);
        this.ingredientsChanged.emit(this.ingrediants.slice());

    }

     
}