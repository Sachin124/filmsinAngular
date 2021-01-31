/*
 *   Copyright (c) 2021 Sachin S. Bahegavankar
 *   All rights reserved.
 */
import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";

export const DashboardRouting: Routes = [{
  path: '',
  children:[{
    path: '',
    component: DashboardComponent
  }]
}]
