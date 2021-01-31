/*
 *   Copyright (c) 2021 Sachin S. Bahegavankar
 *   All rights reserved.
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let className = document.getElementById('toggleSidebar');
    if(className){
      className.classList.remove("toggled");

    }
  }

}
