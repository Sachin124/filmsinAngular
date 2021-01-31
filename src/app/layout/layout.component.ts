/*
 *   Copyright (c) 2021 Sachin S. Bahegavankar
 *   All rights reserved.
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  routerUrl = false;
  constructor(private router: Router) {
   }

  ngOnInit() {
    // this.routerUrl = this.router;

    // if(this.router.url == '/submissions/view'){
    //   this.routerUrl = true;
    // }

  }

}
