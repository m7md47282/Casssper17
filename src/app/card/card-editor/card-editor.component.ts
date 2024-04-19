import { Component } from '@angular/core';
import { MatTabGroup, MatTab } from '@angular/material/tabs'
@Component({
  selector: 'app-card-editor',
  standalone: true,
  imports: [
    MatTabGroup,
    MatTab
  ],
  templateUrl: './card-editor.component.html',
  styleUrl: './card-editor.component.sass'
})
export class CardEditorComponent {

}
