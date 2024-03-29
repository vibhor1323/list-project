import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
// import { relative } from 'path';
// import { threadId } from 'worker_threads';
import { RecepieService } from '../recepie-list.service';
import { Recepie } from '../recepie-model';

@Component({
  selector: 'app-recepie-edit',
  templateUrl: './recepie-edit.component.html',
  styleUrls: ['./recepie-edit.component.css']
})
export class RecepieEditComponent implements OnInit {
  id !:number;
  editMode=false;
  recipeForm !: FormGroup;

  constructor(private route: ActivatedRoute,
              private recipeService: RecepieService,
              private router: Router) {

               }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params)=>{
          this.id=+params['id'];
          this.editMode=params['id']!=null;
          this.initForm();

      }
    )
  }
  onSubmit(){
    const newRecipe= new Recepie(
      this.recipeForm.value['name'],
      this.recipeForm.value['description'],
      this.recipeForm.value['imagePath'],
      this.recipeForm.value['ingredients']);
    if(this.editMode){
      this.recipeService.updateRecipe(this.id,newRecipe);
    }
      else{
        this.recipeService.addRecipe(newRecipe);
      }
      this.onCancel();
  }
  onCancel(){
    this.router.navigate(['../'],{relativeTo: this.route});
    }
  onAddIngrediant(){
    
    (<FormArray>this.recipeForm.get('ingrediants')).push(
      new  FormGroup({
        'name':new FormControl(null,Validators.required),
        'amount':new FormControl(null,[
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      
      })
    );
  }
  onDeleteIngrediant(index:number){
    (<FormArray>this.recipeForm.get('ingrediants')
    ).removeAt(index);
  }
  
  get controls() { // a getter!
    return (<FormArray>this.recipeForm.get('ingrediants')).controls;
  }

  private initForm(){
    let recipeName='';
    let recipeImagePath='';
    let recipeDescription = '';
    let recipeIngrediants= new FormArray([]);

    if(this.editMode){
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName=recipe.name;
      recipeImagePath=recipe.imagePath;
      recipeDescription= recipe.description;
      if(recipe['ingrediants'])
      {
        for(let ingredients of recipe.ingrediants)
        {
          recipeIngrediants.push(
            new FormGroup({
              'name':new FormControl(ingredients.name),
              'amount':new FormControl(ingredients.amount,[
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          )
        }
      }

    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName,Validators.required),
      'imagePath': new FormControl(recipeImagePath,Validators.required),
      'description': new FormControl(recipeDescription,Validators.required),
      'ingrediants': recipeIngrediants



    });
  }

}
