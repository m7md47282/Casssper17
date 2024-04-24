import { AfterContentInit, Component, ElementRef, OnInit, ViewChild, input } from '@angular/core';
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
  editor: any;
  cssData: any;
  showEditor: boolean = false;
  changeHappend: boolean = false;
  htmlData: string | any = input('')

  @ViewChild('container', { static: true }) container: ElementRef<HTMLDivElement> | undefined;


  constructor(private sanitizer: DomSanitizer) {}
  ngAfterContentInit(): void {

      this.editor = grapesjs.init({
        container: '#editor',
        fromElement: true,
        plugins: [basicBlocks, presetWebPage, gjsForms, gradient, flexBox],
        pluginsOpts: {},

      });

      this.editor.setComponents(this.htmlData);
      this.editor.setStyle(this.cssData);

    this.editor.on('component:update', () => {
      this.changeHappend = true
    });

  }

  

  openFullSecreen = () => {
    this.editor.Commands.run('fullscreen', { open: true }); // Open fullscreen
  }

  
  savetemplate(){
    const newHtmlData = this.editor.getHtml();
    const newCssData = this.editor.getCss();
     this.template = this.sanitizer.bypassSecurityTrustHtml(`${this.editor.getHtml()} \n <style> ${this.editor.getCss()} </style>`)
    console.log(newHtmlData, newCssData);
    
  }
  template: SafeHtml = ""

  ngOnInit(): void {


  }

}
