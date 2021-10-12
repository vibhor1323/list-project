import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecepiesComponent } from './recepies/recepies.component';
import { RecepieListComponent } from './recepies/recepie-list/recepie-list.component';
import { RecepieDetailComponent } from './recepies/recepie-detail/recepie-detail.component';
import { RecepieItemComponent } from './recepies/recepie-list/recepie-item/recepie-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
// import { StartComponent } from './recepies/recepies/start/start.component';
import { RecepiesStartComponent } from './recepies/recepies-start/recepies-start.component';
import { RecepieEditComponent } from './recepies/recepie-edit/recepie-edit.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecepiesComponent,
    RecepieListComponent,
    RecepieDetailComponent,
    RecepieItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecepiesStartComponent,
    RecepieEditComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
