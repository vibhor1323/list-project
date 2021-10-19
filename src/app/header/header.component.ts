import { Component, OnInit } from "@angular/core";
import { style } from '@angular/animations';
import { DataStorageService } from "../shared/data-storage.service";
import { AuthResponseData, AuthService } from "../auth/auth.service";
import { Subscription } from "rxjs";
import { User } from "../auth/user.model";

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html'
})

export class HeaderComponent implements OnInit{ 
    isAuthenticated =false;   
    private userSub !:Subscription;
    constructor(private dataStorageService: DataStorageService,
    private authService: AuthService){
}
    ngOnInit(){
        this.authService.user.subscribe(user =>{
            this.isAuthenticated= !!user;
        });
        
    }
    onSaveData(){
        this.dataStorageService.storeRecepie();
    }

    onFetchData(){
        this.dataStorageService.fetchRecepie().subscribe();
    }
    onLogout(){
        this.authService.logout();
    }
 }