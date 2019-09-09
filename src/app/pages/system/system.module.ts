import {NgModule} from '@angular/core';
import {FunctionListComponent} from './function-manage/function-list/function-list.component';
import {ShareModule} from '../../share/share.module';
import {RouterModule} from '@angular/router';
import {SYSTEM_ROUTES} from './system.routes';
import {EditFunctionComponent} from './function-manage/edit-function/edit-function.component';


@NgModule({
  declarations: [FunctionListComponent, EditFunctionComponent],
  imports: [
    ShareModule,
    RouterModule.forChild(SYSTEM_ROUTES)
  ],
  entryComponents: [
    EditFunctionComponent
  ]
})
export class SystemModule {
}
