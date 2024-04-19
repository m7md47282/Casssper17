import { Component } from '@angular/core';

import { Menu } from '../menu-interface';

import { MatSidenavModule } from '@angular/material/sidenav'
import { MatIconModule } from "@angular/material/icon";

import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [
    MatSidenavModule,
    CommonModule,
    MatIconModule,
    RouterLink,
    RouterModule
  ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.sass'
})
export class SideBarComponent {
  sideBarDefaultWidth: string = '50px'
  sideBarOpenedWidth: string = '260px'
  sideBarWidth: string = this.sideBarDefaultWidth
  isSideBarOpen: boolean = false
  menu: Menu[]  

  constructor() {
    this.menu = [
      {
        title: 'Dashboard',
        icon: 'dashboard',
        routerLink: '/'
      },
      {
        title: 'Settings',
        icon: 'engineering',
        subMenu:  [{
          title: 'Product card',
          icon: 'view_carousel',
          routerLink: '/card-editor'
        }],
      },
      {
        title: 'Support',
        icon: 'support_agentw'
      }
    ]
  }

  ngOnInit(){
  }

  toggleSideBarOut = () =>{
    this.sideBarWidth = this.sideBarDefaultWidth
    this.isSideBarOpen = false
  }

  toggleSideBarIn = () =>{
    this.sideBarWidth = this.sideBarOpenedWidth 
    this.isSideBarOpen = true
  }

  toggleSubMenu(item: any): void {
    item.showSubMenu = !item.showSubMenu;
    
  }
  isSubMenuOpen(item: any): boolean {
    return !!item.showSubMenu;
  }



}
