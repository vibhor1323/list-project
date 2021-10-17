import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { RecepieDetailComponent } from "./recepie-detail/recepie-detail.component";
import { RecepieEditComponent } from "./recepie-edit/recepie-edit.component";
import { RecipesResolverService } from "./recepie-resolver.service";
import { RecepiesComponent } from "./recepies.component";

const routes: Routes = [
    {path:'recipes', component:RecepiesComponent,canActivate:[AuthGuard], children:[
        {path:'new',component:RecepieEditComponent},
        {path:':id',component:RecepieDetailComponent,resolve:[RecipesResolverService]},
        {path:':id/edit',component:RecepieEditComponent}]},
]
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]

})
export class RecepiesRoutingModule{

}