/*
 *   Copyright (c) 2021 Sachin S. Bahegavankar
 *   All rights reserved.
 */
import { Component, OnInit } from '@angular/core';
// import {} from '../../../assets/img/'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  showSidebar(){
    let className = document.getElementById('toggleSidebar');
    className.classList.add("toggled");
  }
}
