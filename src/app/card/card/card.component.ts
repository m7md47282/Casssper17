import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, input, effect, model} from '@angular/core';
import { Card } from '../card-interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.sass'
})
export class CardComponent implements OnInit {

  card = model<Card>({
    body: {
      width: 265,
      height: 350,
      oriantation: '',
      borderWidth: 1, 
      borderColor: 'D2D2D2', 
      borderRadius: 22, 
      padding: 10, 
    },
    image: {
      width: 250
    }
  }, )

  

  cardStyle = computed(() => {
    return {
      width: `${this.card().body.width}px`,
      height: `${this.card().body.height}px`,
      border: `${this.card().body.borderWidth}px solid #${this.card().body.borderColor}`,
      'border-radius': `${this.card().body.borderRadius}px`,
      padding: `${this.card().body.padding}px`,
    }
  })

  imageStyle =  computed( () => {
    return{
      width: `100%`,
    }
  })
  
  constructor(){

  }
  ngOnInit(): void {
   
    
  }

  
  
}
