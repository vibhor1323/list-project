import { Ingrediants } from "../../shared/ingrediants.model";
import * as shoppingListAction from "./shopping-list.actions";

// export interface AppState{
//     shoppingList:ShoppingListState;
// }
export interface ShoppingListState{

    ingrediants: Ingrediants[];
    editedIngredient : Ingrediants;
    editedIngredientIndex :number;


}



// const initialState: ShoppingListState = {
//     ingrediants: [
//         new Ingrediants('Apples', 5),
//         new Ingrediants('Tomatoes', 4),
//     ]
// };

const initialState : ShoppingListState ={
    ingrediants :[
        new Ingrediants('Apples',5),
        new Ingrediants('Tomatoes',10),
      ],
    editedIngredient :new Ingrediants('',0),
    editedIngredientIndex : -1 
};

export function shoppingListReducer(
    state:ShoppingListState = initialState, 
    action : shoppingListAction.ShoppingListActions ):ShoppingListState{
        switch(action.type){
            case shoppingListAction.ADD_INGREDIENTS:
                return{
                    ...state,
                    ingrediants:[...state.ingrediants,action.payload]
                } ;
            case shoppingListAction.ADD_INGREDIENTSS:
                return {
                    ...state,
                    ingrediants:[...state.ingrediants, ...action.payload]

                }
            case shoppingListAction.UPDATE_INGREDIENTS:
                const ingrediants= state.ingrediants[action.payload.index];
                const updatedIngrediant ={
                    ...ingrediants,
                    ...action.payload.ingrediants
                }
                const updatedIngrediants = [...state.ingrediants];
                updatedIngrediants[action.payload.index]= updatedIngrediant;
                return {
                    ...state,
                    ingrediants:updatedIngrediants
                };
            case shoppingListAction.DELETE_INGREDIENTS:
                return {
                    ...state,
                    ingrediants:state.ingrediants.filter((ig,igIndex) =>{
                        return igIndex != action.payload;

                    })
                };

            case shoppingListAction.START_EDIT:
                return {
                    ...state,
                    editedIngredientIndex: action.payload,
                    editedIngredient: {...state.ingrediants[action.payload] }

                };

            case shoppingListAction.STOP_EDIT:
                return {
                    ...state,
                    editedIngredientIndex:-1,
                    editedIngredient:new Ingrediants('',0)
                    
                };
            default:
                return state;
        }

}