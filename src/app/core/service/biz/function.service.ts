import {Injectable} from '@angular/core';
import {BizService} from './biz.service';
import {Observable} from 'rxjs';
import {FunctionModel} from '../../../model/function.model';
import {HttpPlusClient} from 'ng-http-plus';
import {HttpClient} from '@angular/common/http';
import {QueryParameter} from '../../../share/model/jpa-plus.model';

@Injectable({
  providedIn: 'root'
})
export class FunctionService implements BizService<FunctionModel> {

  constructor(private httpClient: HttpClient) {
  }

  deleteAll(ids: string[]): Observable<FunctionModel> {
    return undefined;
  }

  findOne(id: string): Observable<FunctionModel> {
    return null as any;
  }

  save(model: FunctionModel): Observable<FunctionModel> {
    return HttpPlusClient.builder()
      .url('functions')
      .body(model)
      .post();
  }

  update(model: FunctionModel): Observable<FunctionModel> {
    return HttpPlusClient.builder()
      .url('functions')
      .body(model)
      .put();
  }


  findPage(pageIndex, pageSize) {
    const queryParameter = QueryParameter.builder()
      .pageIndex(pageIndex - 1)
      .pageSize(pageSize)
      .build();

    return HttpPlusClient.builder()
      .url('functions/page')
      .body(queryParameter)
      .post();
  }
}
