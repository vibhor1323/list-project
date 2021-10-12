import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";
// import { threadId } from "worker_threads";
import { Ingrediants } from "../shared/ingrediants.model";

export class ShoppingService{
    ingredientsChanged = new Subject<Ingrediants[]>();
    startedEditing =new Subject<number>();
    private ingrediants : Ingrediants[] =[
        new Ingrediants('Apples',5),
        new Ingrediants('Tomatoes',10),
      ];

    getIncredients(){
        return this.ingrediants.slice();
    }
    getIngredient(index:number){
        return this.ingrediants[index];
    }

    addIncredients( ingredients: Ingrediants){
        this.ingrediants.push(ingredients);
        this.ingredientsChanged.next(this.ingrediants.slice());
    }

    addIngredientss(ingrediants:Ingrediants[]){
        this.ingrediants.push(...ingrediants);
        this.ingredientsChanged.next(this.ingrediants.slice())

    }
    updateIngredients(index:number, newIngrediant:Ingrediants){
        this.ingrediants[index]=newIngrediant;
        this.ingredientsChanged.next(this.ingrediants.slice());
    }
    deleteIngrediants(index:number){
        this.ingrediants.splice(index,1);
        this.ingredientsChanged.next(this.ingrediants.slice());
    }

     
}