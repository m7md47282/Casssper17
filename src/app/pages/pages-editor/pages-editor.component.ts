import { Component } from '@angular/core';
import { SectionsService } from '../../sections/sections.service';
import { CommonModule } from '@angular/common';
import { section } from '../../sections/section-interface';


@Component({
  selector: 'app-pages-editor',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './pages-editor.component.html',
  styleUrl: './pages-editor.component.sass'
})



export class PagesEditorComponent {

  sections: section[] = [];

  constructor(private sectionService: SectionsService) { }

  ngOnInit() {
    // this.sections = this.sectionService.getSections().sort((a, b) => a.order - b.order);
    this.sectionService.getSections({}).subscribe((response: any) => {
      if(response?.success)
        this.sections = response.data

    })
  }


  editSection(section: section){
    console.log(section);
    
  }

  deleteSection(section: section){}

}