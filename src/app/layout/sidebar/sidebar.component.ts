/*
 *   Copyright (c) 2021 Sachin S. Bahegavankar
 *   All rights reserved.
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

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
