import {Injectable} from '@angular/core';
import {AbstractControl} from '@angular/forms';
import {Filter, FilterGroup, Page, QueryParameter} from '../../../share/model/jpa-plus.model';
import {HttpPlusClient} from 'ng-http-plus';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PageUniqueValidator {
  fieldUnique(option: any) {
    return (control: AbstractControl) => {
      const filterGroup = FilterGroup.builder()
        .filter(new Filter(option.field, control.value))
        .filter(new Filter(option.field, option.selfValue, '!='))
        .build();
      const parameter = QueryParameter.builder()
        .filterGroup(filterGroup)
        .build();

      return HttpPlusClient.builder().url(`${option.url}/page`)
        .body(parameter)
        .post<Page<any>>()
        .pipe(
          map(page => {
            const error = {};
            error[`${option.field}Unique`] = true;
            return page.content.length > 0 ? error : null;
          })
        );
    };
  }
}
