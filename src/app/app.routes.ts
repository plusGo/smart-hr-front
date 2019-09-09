import {Routes} from '@angular/router';
import {SideMenuLayoutComponent} from './normal/sidemenu-layout/side-menu-layout.component';

export const APP_ROUTES: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/system'},
  {
    path: '', component: SideMenuLayoutComponent, children: [
      {path: 'system', loadChildren: () => import('./pages/system/system.module').then(m => m.SystemModule)},
    ]
  }
];
