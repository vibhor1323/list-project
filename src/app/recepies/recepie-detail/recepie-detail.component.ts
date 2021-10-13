import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecepieService } from '../recepie-list.service';
import { Recepie } from '../recepie-model';

@Component({
  selector: 'app-recepie-detail',
  templateUrl: './recepie-detail.component.html',
  styleUrls: ['./recepie-detail.component.css']
})
export class RecepieDetailComponent implements OnInit {
 recipe !: Recepie;
 id !: number;
   constructor(private recepieService: RecepieService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params)=>{
        this.id= +params['id'];
         this.recipe = this.recepieService.getRecipe(this.id); 
      }
    );
  }

  onAddToShoppingList(){
      this.recepieService.addIngrediantsToShoppingList(this.recipe.ingrediants);
  }

  onEditRecipe(){
     this.router.navigate(['edit'],{relativeTo:this.route});
    // this.router.navigate(['../',this.id,'edit'],{relativeTo:this.route});

  }

  onDeleteRecepie(){
    this.recepieService.deleteRecepie(this.id);
    this.router.navigate(['/recipes']);
  }

}
