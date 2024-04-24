import { AfterContentInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { grapesjs } from 'grapesjs'
import basicBlocks  from 'grapesjs-blocks-basic'

import presetWebPage  from "grapesjs-preset-webpage";
import flexBox from "grapesjs-blocks-flexbox";
import gjsForms from 'grapesjs-plugin-forms';
import gradient from 'grapesjs-style-gradient';
// import grapesjsLorySlider from "grapesjs-lory-slider";

@Component({
  selector: 'app-grapesjs-editor',
  standalone: true,
  imports: [
    
  ],
  templateUrl: './grapesjs-editor.component.html',
  styleUrl: './grapesjs-editor.component.sass'
})
export class GrapesjsEditorComponent implements OnInit, AfterContentInit {
  editor: any;
  htmlData: any;
  cssData: any;

  @ViewChild('container', { static: true }) container: ElementRef<HTMLDivElement> | undefined;

  ngAfterContentInit(): void {
      console.log('this is the thing', this.container);

      this.editor = grapesjs.init({
        container: '#editor',
        fromElement: true,
        plugins: [basicBlocks, presetWebPage, gjsForms, gradient, flexBox],
        pluginsOpts: {
          'presetWebPage': {
            enable: true
          }
        }

      });

      this.editor.setComponents(this.htmlData);
      this.editor.setStyle(this.cssData);

    // this.editor.blockManager.add('h1-block', {
    //   label: 'Heading',
    //   content: '<h1>Put your title here</h1>',
    //   category: 'Basic',
    //   attributes: {
    //     title: 'Insert h1 block'
    //   }
    // });

  }

  ngOnInit(): void {


  }

}
