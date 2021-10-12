import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecepieService } from '../recepie-list.service';
import {Recepie} from '../recepie-model'

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css']
})
export class RecepieListComponent implements OnInit {

  recipes !: Recepie[];
  
  constructor(private recipeService :RecepieService,
              private router:Router,
              private route:ActivatedRoute) {  }

  ngOnInit(){
    this.recipeService.recipesChanged
          .subscribe(
            (recipes:Recepie[])=>{
              this.recipes=recipes;
            }
          );
          this.recipes=this.recipeService.getRecipes();
    }

  onNewRecepie(){
    this.router.navigate(['new'],{relativeTo:this.route});
  }

    
}
