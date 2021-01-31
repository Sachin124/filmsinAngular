/*
 *   Copyright (c) 2021 Sachin S. Bahegavankar
 *   All rights reserved.
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingService } from 'src/app/animation/data-sharing.service';
import {
  UpperAnimations
} from '../../../animation/animation3';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
  animations: [UpperAnimations],
  host: {
    "[@pageAnimations]": ""
  }
})
export class ViewComponent implements OnInit {

  constructor(private activeRouter: DataSharingService,private router: Router) { }

  ngOnInit() {
    // console.log(this.router.url);
    this.activeRouter.changeData(this.router.url);
    let className = document.getElementById('toggleSidebar');
    if(className){
      className.classList.remove("toggled");
    }
  }

}
