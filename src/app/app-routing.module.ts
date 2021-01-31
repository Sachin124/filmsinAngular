/*
 *   Copyright (c) 2021 Sachin S. Bahegavankar
 *   All rights reserved.
 */
import {
  LayoutComponent
} from "./layout/layout.component";
import { Routes } from '@angular/router';
import {} from  './Modules/submissions/submissions.module';
export const AppRouting: Routes = [{
    path: '',
    redirectTo: '/submissions',
    pathMatch: 'full'
  },
  {
    path: '',
    component: LayoutComponent,
    children: [{
      path: 'dashboard',
      loadChildren: './dashboard/dashboard.module#DashboardModule'
    }]
  },
  {
    path: '',
    component: LayoutComponent,
    children: [{
      path: 'submissions',
      loadChildren: './Modules/submissions/submissions.module#SubmissionsModule'
    }]
  }
]
