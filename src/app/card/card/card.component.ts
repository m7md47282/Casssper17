import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, input } from '@angular/core';
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
  emtyArray = [...Array(10)]
  px = "px";
  percent = "%";

  cardDefaultSettings = {
    body: {
      width: 265,
      height: 350,
      padding: 10,
      oriantation: 'vertical',
      borderWidth: 1,
      borderColor: '#d4d4d4',
      borderRadius: 20,
    },
    image: {
      width: 100,
      radius: 20
    },
    title: {
      fontSize: 24,
      color: '#464646',
      letterSpacing: 0
    },
    description: {
      fontSize: 24,
      color: '#464646',
      letterSpacing: 0
    },
    tags: {
      fontSize: 24,
      color: '#464646',
      letterSpacing: 0
    },
    price: {
      fontSize: 24,
      color: '#464646',
      letterSpacing: 0
    }
  };

  card = input(this.cardDefaultSettings)

  
 
  ngOnInit(): void {
  }

  
}
