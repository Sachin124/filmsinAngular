/*
 *   Copyright (c) 2021 Sachin S. Bahegavankar
 *   All rights reserved.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { DashboardRouting } from './dashboard-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardRouting)
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
