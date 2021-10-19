import *  as fromShoppingList from '../shopping-list/store/shopping-list.reducer'
import * as fromAuth from '../auth/store/auth.reducer'
import { ActionReducerMap } from '@ngrx/store';


export interface AppState{

    shoppingList: fromShoppingList.ShoppingListState;
    auth: fromAuth.State
}

export const appReducer : ActionReducerMap<any,any> = {
    shoppingList:fromShoppingList.shoppingListReducer,
    auth: fromAuth.authReducer

}

