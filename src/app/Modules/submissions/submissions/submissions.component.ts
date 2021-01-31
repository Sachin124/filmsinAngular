/*
 *   Copyright (c) 2021 Sachin S. Bahegavankar
 *   All rights reserved.
 */
import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingService } from 'src/app/animation/data-sharing.service';
import {
  UpperAnimations
} from '../../../animation/animation3';
import {
  slideInDownAnimation
} from '../../../animation/animation';
@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.css'],
  animations: [UpperAnimations,slideInDownAnimation],
  host: {
    "[@pageAnimations]": ""
  }
})
export class SubmissionsComponent implements OnInit {
  @HostBinding("@routeAnimation") routeAnimation = true;

  page: number =1;
  rows;
  constructor(private activeRouter: DataSharingService,private router: Router) { }

  ngOnInit() {
    this.activeRouter.changeData(this.router.url);
    if(window.innerHeight <= 600){
     this.closeSidebar();
    }
    this.rows = [
      {
        id: 1,
        first_name: "The Countdown The CountdownThe CountdownThe CountdownThe CountdownThe CountdownThe Countdown",
        film_maker: "MSN Karthik",
        category: "SHORT",
        genre: "SCI-FI",
        length: 9,
        time: "24 Jun, 23:12:00"
      },

      {
        id: 2,
        first_name: "The Countdown",
        film_maker: "MSN Karthik",
        category: "DOCU",
        genre: "SCI-FI",
        length: 9,
        time: "24 Jun, 23:12:00"
      },
      {
        id: 3,
        first_name: "The Countdown",
        film_maker: "MSN Karthik",
        category: "TRAVEL",
        genre: "SCI-FI",
        length: 9,
        time: "24 Jun, 23:12:00"
      }
    ]
  }

  closeSidebar(){
    let className = document.getElementById('toggleSidebar');
    className.classList.remove("toggled");
    // console.log(className)
}
}
