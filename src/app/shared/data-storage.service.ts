import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

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

}