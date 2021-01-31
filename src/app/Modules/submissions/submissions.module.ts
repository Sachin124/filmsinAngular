/*
 *   Copyright (c) 2021 Sachin S. Bahegavankar
 *   All rights reserved.
 */
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { SubmissionsRouting } from './submissions-routing.module';
import { SubmissionsComponent } from './submissions/submissions.component';
import { RouterModule } from '@angular/router';
import { ViewComponent } from './view/view.component';
import {NgxPaginationModule} from 'ngx-pagination';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SubmissionsRouting),
    NgxPaginationModule
  ],
  declarations: [SubmissionsComponent, ViewComponent]
})
export class SubmissionsModule { }
