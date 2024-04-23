import { Component } from '@angular/core';
import { MatTabGroup, MatTab } from '@angular/material/tabs'
import { FormsModule } from "@angular/forms";
import { MatChipsModule } from "@angular/material/chips";

import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-card-editor',
  standalone: true,
  imports: [
    CommonModule,
    MatTabGroup,
    MatTab,
    FormsModule,
    MatChipsModule,
    CardComponent
  ],
  templateUrl: './card-editor.component.html',
  styleUrl: './card-editor.component.sass'
})
export class CardEditorComponent {
  emtyArray = [...Array(10)]

  cardSettings = {
    body: {
      width: 265,
      height: 350,
      padding: 10,
      oriantation: 'vertical',
      borderWidth: 1,
      borderColor: '#d4d4d4',
      borderRadius: 10,
    },
    image: {
      width: 100,
      radius: 5
    },
    title: {
      fontSize: 24,
      color: '#464646',
      letterSpacing: 0
    },
    description: {
      fontSize: 14,
      color: '#464646',
      letterSpacing: 0
    },
    tags: {
      fontSize: 10,
      color: '#464646',
      letterSpacing: 0
    },
    price: {
      fontSize: 16,
      color: '#464646',
      letterSpacing: 0
    }
  };


  constructor(){
  }


  setDefaultDimensions(event: any){
    if(event.value == "horizantal"){
      this.cardSettings.body.width = 500
      this.cardSettings.body.height = 214
    } else {
      this.cardSettings.body.width = 265
      this.cardSettings.body.height = 350
    }
  }



  
  
}
