import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {APP_ROUTES} from './app.routes';
import {en_US, NZ_I18N, NZ_ICONS} from 'ng-zorro-antd';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';
import {CoreModule} from './core/core.module';
import {ShareModule} from './share/share.module';
import {RouterModule} from '@angular/router';
import {DashboardOutline, FormOutline, MenuFoldOutline, MenuUnfoldOutline} from '@ant-design/icons-angular/icons';
import {NormalModule} from './normal/normal.module';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CoreModule,
    ShareModule,
    NormalModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(APP_ROUTES),
  ],
  providers: [
    {provide: NZ_I18N, useValue: en_US},
    {provide: NZ_ICONS, useValue: [MenuFoldOutline, MenuUnfoldOutline, DashboardOutline, FormOutline]}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
