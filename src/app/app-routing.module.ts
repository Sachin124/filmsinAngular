import {
  LayoutComponent
} from "./layout/layout.component";
import { Routes } from '@angular/router';
// import {} from  './dashboard/dashboard.module';
export const AppRouting: Routes = [{
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: LayoutComponent,
    children: [{
      path: 'dashboard',
      loadChildren: './dashboard/dashboard.module#DashboardModule'
    }]
  }
]
