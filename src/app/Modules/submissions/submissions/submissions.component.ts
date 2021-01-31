/*
 *   Copyright (c) 2021 Sachin S. Bahegavankar
 *   All rights reserved.
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.css']
})
export class SubmissionsComponent implements OnInit {
  page: number =1;
  rows;
  constructor() { }

  ngOnInit() {
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
