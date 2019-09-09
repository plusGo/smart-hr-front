import {Component} from '@angular/core';
import {HttpPlusConfig} from 'ng-http-plus';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {

    HttpPlusConfig.builder()
      .baseUrl('http://localhost:8090/api')
      .addInterceptor({
        request: (req) => {
          console.log('请求' + req);
        },
        response: (res) => {
          console.log('回复' + res);
        }
      });
  }
}
