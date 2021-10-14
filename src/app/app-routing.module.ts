import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { AuthGuard } from "./auth/auth.guard";
import { RecepieDetailComponent } from "./recepies/recepie-detail/recepie-detail.component";
import { RecepieEditComponent } from "./recepies/recepie-edit/recepie-edit.component";
import { RecipesResolverService } from "./recepies/recepie-resolver.service";
// import { RecepiesStartComponent } from "./recepies/recepies-start/recepies-start.component";
import { RecepiesComponent } from "./recepies/recepies.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

const appRoutes :Routes=[
    {path:'', redirectTo:'/recipes',pathMatch:'full'},
    {path:'recipes', component:RecepiesComponent,canActivate:[AuthGuard], children:[
        {path:'new',component:RecepieEditComponent},
        {path:':id',component:RecepieDetailComponent,resolve:[RecipesResolverService]},
        {path:':id/edit',component:RecepieEditComponent}]},
    {path:'shopping-list', component:ShoppingListComponent},
    {path:'auth', component:AuthComponent}
];
@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}