import {Observable} from 'rxjs';

export interface BizService<T> {
  save(model: T): Observable<T>;

  update(model: T): Observable<T>;

  deleteAll(ids: string[]): Observable<T>;

  findOne(id: string): Observable<T>;
}
