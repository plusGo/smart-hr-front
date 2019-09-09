import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {FormErrorTipComponent} from './form-error-tip/form-error-tip.component';
import {SearchBarComponent} from './search-bar/search-bar.component';


@NgModule({
  declarations: [FormErrorTipComponent, SearchBarComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    FormsModule,
    RouterModule,
    FormErrorTipComponent,
    SearchBarComponent
  ]
})
export class ShareModule {
}
