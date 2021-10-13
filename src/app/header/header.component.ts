import { Component } from "@angular/core";
import { style } from '@angular/animations';
import { DataStorageService } from "../shared/data-storage.service";

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html'
})

export class HeaderComponent
{    constructor(private dataStorageService: DataStorageService){

}
    onSaveData(){
        this.dataStorageService.storeRecepie();
    }

    onFetchData(){
        this.dataStorageService.fetchRecepie().subscribe();
    }
 }