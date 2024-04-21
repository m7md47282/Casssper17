import { Injectable, signal } from '@angular/core';
import { Card } from './card-interface';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  cardSettings = signal({})

  getCardComputed(){
    return this.cardSettings
  }
  
  constructor() { }
}
