import { Component, OnInit,Input} from '@angular/core';
import { RecepieService } from '../../recepie-list.service';
import {Recepie} from'../../recepie-model';
@Component({
  selector: 'app-recepie-item',
  templateUrl: './recepie-item.component.html',
  styleUrls: ['./recepie-item.component.css']
})
export class RecepieItemComponent implements OnInit {
  @Input() recipe !: Recepie


  constructor(private recepieService: RecepieService) { }

  ngOnInit(): void {
  }

  onSelected(){
    this.recepieService.recipeSelected.emit(this.recipe);
  }

}
 