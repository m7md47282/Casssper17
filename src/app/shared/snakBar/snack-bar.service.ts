import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ISnackBar } from './snack-bar';

@Injectable({
  providedIn: 'root'
})



export class SnackBarService {


  constructor(private snackBar: MatSnackBar){}

  openSnackBar({message, type, horizontalPosition, verticalPosition, duration}: ISnackBar ) {
      type = type || "success" 
      this.snackBar.open(message, '', {
        panelClass: [type],
        horizontalPosition: horizontalPosition || 'start',
        verticalPosition: verticalPosition || 'bottom',
        duration: duration || 3000//ms
      });
    }

}
