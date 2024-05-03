
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import { CommonModule } from '@angular/common';

import { GrapesjsEditorComponent } from '../../grapesJs/grapesjs-editor/grapesjs-editor.component';
import { SectionsService } from '../sections.service';
import { section } from '../section-interface';

import { GetRequest } from '../../api-interfaces';
import { SnackBarService } from '../../shared/snakBar/snack-bar.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sections-editor',
  standalone: true,
  imports: [
    GrapesjsEditorComponent,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule,
    CommonModule, 
    FormsModule,
  ],
  templateUrl: './sections-editor.component.html',
  styleUrl: './sections-editor.component.sass'
})


export class SectionsEditorComponent implements OnInit{
  sections: section[] = [];
  htmlData: string = "";
  showEditor: boolean = false
  isEdit: boolean = false
  openModal: boolean = false
  selectedSection: {_id?:string, content?:string, title?:string} = {}
  saveEvent: any;
  confirmSaveModal: boolean = false;
  confirmDeleteModal: boolean = false;
  deleteingSectionId: string = '';


  @ViewChild(GrapesjsEditorComponent) grapesjsEditorComponent!: GrapesjsEditorComponent; 



  constructor(private SectionsService: SectionsService, private SnackBar: SnackBarService){ }
  ngOnInit(): void {
    this.getSections()
  }
 
  getSections(){
    this.SectionsService.getSections({}).subscribe((response: any) => {
      if(response.success){
        this.sections = response.data
      }
      
    })

  }
  saveSection(event: any){
    this.saveEvent = event

    if(!this.isEdit){
      this.openModal = true
      return
    }
    this.confirmSaveModal = true

  } 

  save(event?: any){
    event = event || this.saveEvent
    
    let payload = {
      title: this.selectedSection.title,
      content: event.changingThisBreaksApplicationSecurity,
      _id: this.selectedSection?._id
    }
    
    this.SectionsService.saveSection(payload).subscribe((response)=>{
      if(response.success){
        this.SnackBar.openSnackBar({
          message:'Saved successfully!',
          type: 'success'
        })

        this.getSections()
        this.clearEditor()
        this.closeEditor()
        this.resetSelectedSection()
        this.openModal = false
      }
      
    })
  }
  resetSelectedSection() {
   this.selectedSection = {}
  }
  clearEditor() {
    this.grapesjsEditorComponent.clear()
  }



  setTemplate(section?: {_id?: string, content?: string}){
    if(!!!section){
      this.selectedSection = {}
      this.showEditor = true
      this.isEdit = false
      this.htmlData = ''
      return
    }
    
    this.htmlData = section?.content || ''
    this.showEditor = true
    this.isEdit = true
    this.selectedSection = section

  }

  closeEditor(){
    this.showEditor = false
  }

  setTimer(data: any){
    setTimeout(() => {
      return data
    }, 0);
    
  }

  deleteTemplate(id: string){
    if(!!!id)
      return

    this.SectionsService.deleteSection({id: id}).subscribe((response: any)=>{
      if(response.success){
        this.SnackBar.openSnackBar({
          message:'Deleted successfully!',
          type: 'success'
        })
        this.getSections()
      }
    })


  }

  openDeleteModal(sectionId: string){
    this.deleteingSectionId = sectionId;
    this.confirmDeleteModal = true
  }
}
