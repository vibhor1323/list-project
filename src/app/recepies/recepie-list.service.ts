import { Recepie } from "./recepie-model";

export class RecepieService{
    private recipes: Recepie[]=[
        new Recepie('A Test Recepie' , 'this is simply a text','https://www.vegrecipesofindia.com/wp-content/uploads/2021/05/rajma-recipe-1-580x580.jpg' ),
      new Recepie('A Test Recepie' , 'this is simply a text','https://www.vegrecipesofindia.com/wp-content/uploads/2021/05/rajma-recipe-1-580x580.jpg' )
    ];
    
    getRecipes(){
        return this.recipes.slice();
    
    }
}

