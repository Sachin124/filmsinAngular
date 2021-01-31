/*
 *   Copyright (c) 2021 Sachin S. Bahegavankar
 *   All rights reserved.
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingService } from 'src/app/animation/data-sharing.service';
// import {} from '../../../assets/img/'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentRoute;
  constructor(private activeRouter: DataSharingService,public router: Router) { }

  ngOnInit() {

    this.activeRouter.currentData.subscribe(res => {
      this.currentRoute = res;
      console.log('Current Route:', this.currentRoute);
      if (this.currentRoute == '/submissions') {
        let className = document.getElementById('toggleSidebar');
        className.classList.add("toggled");
      }
      })
  }
  showSidebar(){
    if(( window.innerWidth <= 800 ) && ( window.innerHeight <= 600 )){
      console.log('yes mobile detect');

    }
    let className = document.getElementById('toggleSidebar');
    className.classList.add("toggled");
  }

  navigateBack(){
    this.showSidebar();
    this.router.navigate(['/submissions']);
  }
}
