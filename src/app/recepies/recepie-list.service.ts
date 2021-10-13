import {  Injectable } from "@angular/core";
import { Subject } from "rxjs";
// import { Subject } from "rxjs";
import { Ingrediants } from "../shared/ingrediants.model";
import { ShoppingService } from "../shopping-list/shopping-list.service";
import { Recepie } from "./recepie-model";

@Injectable()
export class RecepieService{
    // recipeSelected= new Subject<Recepie>();
    recipesChanged=new Subject<Recepie[]>();

    // private recipes: Recepie[]=[
    //     new Recepie(
    //         'Tasty Schnitzel',
    //   'A super-tasty Schnitzel - just awesome!',
    //   'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
    //   [
    //     new Ingrediants('Meat', 1),
    //     new Ingrediants('French Fries', 20)
    //   ]),
    //   new Recepie('Big Fat Burger',
    //   'What else you need to say?',
    //   'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
    //   [
    //     new Ingrediants('Buns', 2),
    //     new Ingrediants('Meat', 1)
    //   ])
    // ];
    private recipes: Recepie[]=[];
    constructor(private slService:ShoppingService){
    }
    setRecipes( recipes: Recepie[]){
        this.recipes=recipes;
        this.recipesChanged.next(this.recipes.slice());

    }
    
    getRecipes(){
        return this.recipes.slice();
    
    }
    getRecipe(index:number){
        return this.recipes[index];
    }

    addIngrediantsToShoppingList(ingrediants:Ingrediants[]){

        this.slService.addIngredientss(ingrediants);
    }
    addRecipe(recipe:Recepie){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());

    }
    updateRecipe(index:number,newRecipe:Recepie){

        this.recipes[index]=newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }
    deleteRecepie(index:number){
        this.recipes.splice(index,1);
        this.recipesChanged.next(this.recipes.slice());
    }
}

