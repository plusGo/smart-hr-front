import {NgModule} from '@angular/core';
import {ShareModule} from '../share/share.module';
import {SideMenuLayoutComponent} from './sidemenu-layout/side-menu-layout.component';


@NgModule({
  declarations: [SideMenuLayoutComponent],
  imports: [
    ShareModule
  ],
  exports: [SideMenuLayoutComponent]
})
export class NormalModule {
}
