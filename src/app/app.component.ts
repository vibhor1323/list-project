import { Component, OnDestroy, OnInit } from '@angular/core';
// import { AuthComponent } from './auth/auth.component';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(
    private authService:AuthService
  ){}
  ngOnInit(){
    this.authService.autoLogin();
  }


}