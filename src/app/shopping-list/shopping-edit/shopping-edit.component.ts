import { Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingrediants } from 'src/app/shared/ingrediants.model'; 
import { ShoppingService } from '../shopping-list.service';
import {Store} from '@ngrx/store';
import * as ShoppingListActions from '../store/shopping-list.actions'
import * as FromApp  from '../../store/app.reducer';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy{
  @ViewChild('f') slForm !: NgForm;
  subscription !:Subscription;
  editMode =false;
  editedItemIndex !: number;
  editedItem !: Ingrediants;


  constructor(private slService: ShoppingService,
    private store:Store<FromApp.AppState>) { }

  ngOnInit(){
   this.subscription = this.store.select('shoppingList').subscribe(stateData => {
      if(stateData.editedIngredientIndex> -1){
        this.editMode=true;
        this.editedItem= stateData.editedIngredient;
        this.editedItemIndex=stateData.editedIngredientIndex;
        this.slForm.setValue({
          name:this.editedItem.name,
          amount:this.editedItem.amount
        })
      }
      else{
        this.editMode=false;
      }
    })
    
  }

  onAddItem(e:Event ,form:NgForm){
    e.preventDefault();
    const value =form.value;
    const newIngredient =new Ingrediants(value.name,value.amount);
    if(this.editMode)
    {
      // this.slService.updateIngredients(this.editedItemIndex,newIngredient);
          this.store.dispatch(
            new ShoppingListActions.UpdateIncredients({
              index: this.editedItemIndex,
              ingrediants: newIngredient
            })
          )
    }
    else{
    // this.slService.addIncredients(newIngredient);
    this.store.dispatch( new ShoppingListActions.AddIngredients(newIngredient));
    }
    this.editMode =false;
    form.reset();

  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
    this.store.dispatch(new ShoppingListActions.StopEdit());

  }
  onClear(){
    this.slForm.reset();
    this.editMode=false;
    this.store.dispatch(new ShoppingListActions.StopEdit());
     
  }
  onDelete(){
    // this.slService.deleteIngrediants(this.editedItemIndex);
    this.store.dispatch(
      new ShoppingListActions.DeleteIncredients(this.editedItemIndex));
    this.onClear();
  }

}
