import { AfterContentInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { grapesjs } from 'grapesjs'

@Component({
  selector: 'app-grapesjs-editor',
  standalone: true,
  imports: [],
  templateUrl: './grapesjs-editor.component.html',
  styleUrl: './grapesjs-editor.component.sass'
})
export class GrapesjsEditorComponent implements OnInit, AfterContentInit {
  editor: any;
  @ViewChild('container', { static: true }) container: ElementRef<HTMLDivElement> | undefined;

  ngAfterContentInit(): void {
      console.log('this is the thing', this.container);

      this.editor = grapesjs.init({
        container: '#editor',
        fromElement: true,
        blockManager: {
          blocks: [
            {
              id: 'section', // id is mandatory
              label: '<b>Section</b>', // You can use HTML/SVG inside labels
              attributes: { class:'gjs-block-section' },
              content: `<section>
                <h1>This is a simple title</h1>
                <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
              </section>`,
            }, {
              id: 'text',
              label: 'Text',
              content: '<div data-gjs-type="text">Insert your text here</div>',
            }, {
              id: 'image',
              label: 'Image',
              // Select the component once it's dropped
              select: true,
              // You can pass components as a JSON instead of a simple HTML string,
              // in this case we also use a defined component type `image`
              content: { type: 'image' },
              // This triggers `active` event on dropped components and the `image`
              // reacts by opening the AssetManager
              activate: true,
            }
          ]
        },
      });

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
