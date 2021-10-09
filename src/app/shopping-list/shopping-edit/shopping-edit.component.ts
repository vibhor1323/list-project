import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingrediants } from 'src/app/shared/ingrediants.model'; 

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef !: ElementRef;
  @ViewChild('amountInput') amountInputRef !: ElementRef;
  @Output() incredientAdded= new EventEmitter<Ingrediants>();
  



  constructor() { }

  ngOnInit(): void {
  }

  onAddItem(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.nameInputRef.nativeElement.value;
  
    const newIngredint =new Ingrediants(ingName,ingAmount);

  }

}
