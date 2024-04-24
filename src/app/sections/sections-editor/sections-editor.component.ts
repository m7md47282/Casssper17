
import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';

import { GrapesjsEditorComponent } from '../../grapesJs/grapesjs-editor/grapesjs-editor.component';

@Component({
  selector: 'app-sections-editor',
  standalone: true,

  imports: [
    GrapesjsEditorComponent,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule

  ],
  templateUrl: './sections-editor.component.html',
  styleUrl: './sections-editor.component.sass'
})


export class SectionsEditorComponent {
  panelOpenState = false;
 
}
