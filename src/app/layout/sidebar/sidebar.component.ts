/*
 *   Copyright (c) 2021 Sachin S. Bahegavankar
 *   All rights reserved.
 */
import { Component, HostBinding, OnInit } from '@angular/core';
import {
  slideInDownAnimation
} from '../../animation/animation';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations: [slideInDownAnimation]
})
export class SidebarComponent implements OnInit {
  @HostBinding("@routeAnimation") routeAnimation = true;

  constructor() { }

  ngOnInit() {
  }


  closeSidebar(){
      let className = document.getElementById('toggleSidebar');
      className.classList.remove("toggled");
      console.log(className)
  }

  showSidebar(){
    let className = document.getElementById('toggleSidebar');
    className.classList.add("toggled");
    console.log(className)
  }
}
