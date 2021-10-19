import { Action } from "@ngrx/store";
import { Ingrediants } from "src/app/shared/ingrediants.model";

export const ADD_INGREDIENTS = 'ADD_INGREDIENTS';
export const ADD_INGREDIENTSS= 'ADD_INGREDIENTSS';
export const UPDATE_INGREDIENTS= 'UPDATE_INGREDIENTS';
export const DELETE_INGREDIENTS= 'DELETE_INGREDIENTS';
export const START_EDIT  = 'START_EDIT';
export const STOP_EDIT = 'STOP_EDIT';



export class AddIngredients implements Action{
    readonly type= ADD_INGREDIENTS;
    constructor(public payload: Ingrediants){}

}
export class AddIngredientss implements Action{
    readonly type= ADD_INGREDIENTSS;
    constructor(public payload: Ingrediants[]){}
}

export class UpdateIncredients implements Action{
    readonly type= UPDATE_INGREDIENTS;
    constructor(public payload: {index:number,ingrediants:Ingrediants}){}
}

export class DeleteIncredients implements Action{
    readonly type= DELETE_INGREDIENTS;
    constructor(public payload: number){}
}
export class StartEdit implements Action{
    readonly type= START_EDIT;
    constructor(public payload :number){}
}


export class StopEdit implements Action{
    readonly type =STOP_EDIT;
}


export type ShoppingListActions =
| AddIngredients 
| AddIngredientss 
| UpdateIncredients 
| DeleteIncredients
| StartEdit
| StopEdit;