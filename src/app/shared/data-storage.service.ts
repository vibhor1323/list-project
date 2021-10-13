import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Recepie } from "../recepies/recepie-model";
import {map, tap} from "rxjs/operators";

import { RecepieService } from "../recepies/recepie-list.service";

@Injectable({providedIn:'root'})
export class DataStorageService{
    
constructor(private http: HttpClient,
            private recipeService: RecepieService ) {

                
            }
    storeRecepie()
    {
            const recipes =this.recipeService.getRecipes();
            this.http.put('https://recepielist-cf1a7-default-rtdb.firebaseio.com/recipes.json',recipes)
            .subscribe(response =>{
                console.log(response);
            });
    }

    fetchRecepie(){

       return  this.http.get<Recepie[]>('https://recepielist-cf1a7-default-rtdb.firebaseio.com/recipes.json')
        .pipe (map( recipes => {
            return recipes.map(recipe =>{
                return {...recipe, ingrediants:recipe? recipe.ingrediants: []};
            });
        }),
        tap( recipes =>{
            this.recipeService.setRecipes(recipes);
        })
        )
        
    }

}