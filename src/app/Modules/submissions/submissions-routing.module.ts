/*
 *   Copyright (c) 2021 Sachin S. Bahegavankar
 *   All rights reserved.
 */
import { Routes } from '@angular/router';
import { SubmissionsComponent } from './submissions/submissions.component';
import { ViewComponent } from './view/view.component';


export const SubmissionsRouting: Routes = [{
  path: '',
  children:[{
    path: '',
    component: SubmissionsComponent
  },
  {
    path: 'view',
    component: ViewComponent
  }]
}]
