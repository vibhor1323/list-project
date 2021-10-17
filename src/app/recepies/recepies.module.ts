import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { RecepieDetailComponent } from "./recepie-detail/recepie-detail.component";
import { RecepieEditComponent } from "./recepie-edit/recepie-edit.component";
import { RecepieItemComponent } from "./recepie-list/recepie-item/recepie-item.component";
import { RecepieListComponent } from "./recepie-list/recepie-list.component";
import { RecepiesRoutingModule } from "./recepies-routing.module";
import { RecepiesStartComponent } from "./recepies-start/recepies-start.component";
import { RecepiesComponent } from "./recepies.component";

@NgModule({
    declarations:[
        RecepiesComponent,
        RecepieListComponent,
        RecepieDetailComponent,
        RecepieItemComponent,
        RecepiesStartComponent,
        RecepieEditComponent
    ],
    imports:[
        RouterModule,
        ReactiveFormsModule,
        RecepiesRoutingModule,
        SharedModule
    ],
    exports:[
        RecepiesComponent,
        RecepieListComponent,
        RecepieDetailComponent,
        RecepieItemComponent,
        RecepiesStartComponent,
        RecepieEditComponent

    ]
})

export class RecepiesModule{}