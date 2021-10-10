import { Component, ElementRef,OnInit,ViewChild } from '@angular/core';
// import { Event } from '@angular/router';
import { Ingrediants } from 'src/app/shared/ingrediants.model'; 
import { ShoppingService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput',{static:false}) nameInputRef !: ElementRef;
  @ViewChild('amountInput',{static:false}) amountInputRef !: ElementRef;

  



  constructor(private slService: ShoppingService) { }

  ngOnInit(): void {
  }

  onAddItem( e: Event){
    e.preventDefault();
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient =new Ingrediants(ingName,ingAmount);
    this.slService.addIncredients(newIngredient);


  }

}
