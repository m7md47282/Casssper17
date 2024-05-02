import { AfterContentInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, input, effect, model, computed, signal } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

import { grapesjs } from 'grapesjs'

import basicBlocks  from 'grapesjs-blocks-basic'
import flexBox from "grapesjs-blocks-flexbox";
import gjsForms from 'grapesjs-plugin-forms';
import gradient from 'grapesjs-style-gradient';
import presetWebPage  from "grapesjs-preset-webpage";

// import grapesjsLorySlider from "grapesjs-lory-slider";

@Component({
  selector: 'app-grapesjs-editor',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIcon,
  ],
  templateUrl: './grapesjs-editor.component.html',
  styleUrl: './grapesjs-editor.component.sass'
})
export class GrapesjsEditorComponent implements OnInit, AfterContentInit {

  @Output('save') save = new EventEmitter<any>()
  @Output('hideEditor') close = new EventEmitter<boolean>()
  @Output('clearCanvas') clearAll = new EventEmitter<any>()


  cssData: string | any = input('')
  htmlData: string | any = input('')
  showEditor: boolean | any = input(false)

  editor: any;
  changeHappend: boolean = false;
  template: SafeHtml = ""
 


  @ViewChild('container', { static: true }) container: ElementRef<HTMLDivElement> | undefined;


  constructor(private sanitizer: DomSanitizer) {
    effect(()=>{
      this.editor.setComponents(this.htmlData());
    })
  }


  ngAfterContentInit(): void {
    this.initGrapesJs()

    this.editor.on('component:update', () => {
      this.changeHappend = true
    });

  } 

  initGrapesJs(){
    this.editor = grapesjs.init({
      container: '#editor',
      fromElement: true,
      blockManager: {
        blocks: [
          {
            id: 'tetstt',
            label: 'testtt',
            media: `texttt`,
            // Use `image` component
            content: `<style>
            body {
              margin: 0;
              padding: 0;
              font-family: Arial, sans-serif;
              background-color: #f3f3f3;
            }
            input {
              border: 1px solid gray
            }
          
            .cool-form {
              width: 300px;
              margin: 50px auto;
              padding: 20px;
              background-color: #fff;
              border-radius: 10px;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
          
            .cool-form h2 {
              color: #333;
              font-size: 24px;
              margin-bottom: 20px;
              text-align: center;
            }
          
            .cool-form input {
              width: 100%;
              margin-bottom: 20px;
              padding: 10px;
              border: 1px solid #ccc;
              border-radius: 5px;
              box-sizing: border-box;
            }
          
            .cool-form button {
              display: block;
              width: 100%;
              padding: 10px;
              color: #fff;
              background-color: #007bff;
              border: none;
              border-radius: 5px;
              font-size: 18px;
              cursor: pointer;
              transition: background-color 0.3s;
            }
          
            .cool-form button:hover {
              background-color: #0056b3;
            }
          </style>
          <div class="cool-form">
            <h2>Sign Up</h2>
            <input type="text" placeholder="Name">
            <input type="email" placeholder="Email">
            <input type="password" placeholder="Password">
            <a href="google.com" target="_blank" >Sign Up</a>
          </div>`,
            // The component `image` is activatable (shows the Asset Manager).
            // We want to activate it once dropped in the canvas.
            activate: true,
            // select: true, // Default with `activate: true`
          }
        ],
      },
      plugins: [basicBlocks, presetWebPage, gjsForms, gradient, flexBox],
      pluginsOpts: {},

    });

    this.editor.setComponents(this.htmlData());
    this.editor.setStyle(this.cssData());
  }

  

  openFullSecreen = () => {
    this.editor.Commands.run('fullscreen', { open: true }); // Open fullscreen
  }

  
  savetemplate(){
    const newHtmlData = this.editor.getHtml();
    const newCssData = this.editor.getCss();
    this.template = this.sanitizer.bypassSecurityTrustHtml(`${this.editor.getHtml()} \n <style> ${this.editor.getCss()} </style>`)

    this.save.emit(this.template)
    
  }

  closeEditor(){
    this.close.emit()
  }

  clear(){
    this.editor.runCommand('core:canvas-clear');
  }


  ngOnInit(): void {
   

  }


}
