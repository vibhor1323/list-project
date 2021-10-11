import { Component, Input, OnInit } from '@angular/core';
import { RecepieService } from '../recepie-list.service';
import { Recepie } from '../recepie-model';

@Component({
  selector: 'app-recepie-detail',
  templateUrl: './recepie-detail.component.html',
  styleUrls: ['./recepie-detail.component.css']
})
export class RecepieDetailComponent implements OnInit {
@Input() recipe !: Recepie
   constructor(private recepieService: RecepieService) { }

  ngOnInit(): void {
  }

  onAddToShoppingList(){
      this.recepieService.addIngrediantsToShoppingList(this.recipe.ingrediants);
  }

}
