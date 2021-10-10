import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { RecepieService } from './recepie-list.service';
import { Recepie } from './recepie-model';

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
  styleUrls: ['./recepies.component.css'],
  providers:[RecepieService]
  
})
export class RecepiesComponent implements OnInit {
  selectedRecipe !: Recepie;
  constructor(private recepieService : RecepieService) { }

  ngOnInit() {
    this.recepieService.recipeSelected
    .subscribe(
      (recipe : Recepie) => {
        this.selectedRecipe = recipe
      }
    );
  }

}
