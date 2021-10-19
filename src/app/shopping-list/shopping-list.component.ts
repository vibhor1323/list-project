import { Component, OnInit } from '@angular/core';
import {  Observable, Subscription } from 'rxjs';
import { LoggingService } from '../logging.service';
import { Ingrediants } from '../shared/ingrediants.model';
import { ShoppingService } from './shopping-list.service';
import {Store} from '@ngrx/store';
import * as ShoppingListActions from './store/shopping-list.actions'
import * as fromApp from '../store/app.reducer'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingrediants  !:Observable <{ingrediants: Ingrediants[]}>;
  private igChangeSub !: Subscription;

  constructor(private slService: ShoppingService,
    private loggingService: LoggingService,
    private store :Store<fromApp.AppState>) { }

  ngOnInit() {
   this.ingrediants= this.store.select('shoppingList');
    // this.ingrediants=this.slService.getIncredients(); 
    // this.igChangeSub=this.slService.ingredientsChanged
    // .subscribe(
    //   (ingrediants: Ingrediants[])=>{
    //     this.ingrediants=ingrediants;
    //   }
    // )   
    this.loggingService.printLog('hello from shoppingList component');
  }
  ngOnDestroy(){
    //this.igChangeSub.unsubscribe();
  }

  onEditItem(index:number){
    // this.slService.startedEditing.next(index);
    this.store.dispatch(new ShoppingListActions.StartEdit(index));

  }

  

}
