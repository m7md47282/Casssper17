
import { Component } from '@angular/core';
import { GrapesjsEditorComponent } from '../../grapesJs/grapesjs-editor/grapesjs-editor.component';

@Component({
  selector: 'app-sections-editor',
  standalone: true,
  imports: [
    GrapesjsEditorComponent,
  ],
  templateUrl: './sections-editor.component.html',
  styleUrl: './sections-editor.component.sass'
})
export class SectionsEditorComponent {

}
