import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
// import { resolve } from "path";
import { DataStorageService } from "../shared/data-storage.service";
import { RecepieService } from "./recepie-list.service";
import { Recepie } from "./recepie-model";

@Injectable({providedIn:'root'})

export class RecipesResolverService implements Resolve<Recepie[]>{
    constructor(private dataStorageService : DataStorageService,
        private recipeService: RecepieService){}
       resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
           const recipes=this.recipeService.getRecipes();
           if(recipes.length === 0){
           return this.dataStorageService.fetchRecepie();
           }else{
               return recipes;
           }
       }
    
} 