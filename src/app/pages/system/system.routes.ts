import {Routes} from '@angular/router';
import {FunctionListComponent} from './function-manage/function-list/function-list.component';

export const SYSTEM_ROUTES: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'function-manage'},
  {
    path: 'function-manage', component: FunctionListComponent
  }
];
