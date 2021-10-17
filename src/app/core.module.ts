import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthInterceptorService } from './auth/auth-intercepter';

import { ShoppingService } from './shopping-list/shopping-list.service';
import { RecepieService } from './recepies/recepie-list.service';

@NgModule({
  providers: [
    ShoppingService,
    RecepieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ]
})
export class CoreModule {}
