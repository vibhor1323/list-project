import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RecepieService } from '../recepie-list.service';
import {Recepie} from '../recepie-model'

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css']
})
export class RecepieListComponent implements OnInit,OnDestroy {

  recipes !: Recepie[];
  subscription!:Subscription;
  
  constructor(private recipeService :RecepieService,
              private router:Router,
              private route:ActivatedRoute) {  }

  ngOnInit(){
    this.subscription=this.recipeService.recipesChanged
          .subscribe(
            (recipes:Recepie[])=>{
              this.recipes=recipes;
            }
          );
          this.recipes=this.recipeService.getRecipes();
    }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onNewRecepie(){
    this.router.navigate(['new'],{relativeTo:this.route});
  }

    
}
