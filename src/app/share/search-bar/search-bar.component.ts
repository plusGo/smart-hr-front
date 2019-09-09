import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {CompareType} from '../model/jpa-plus.model';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit, OnChanges {
  data = {};
  @Input()
  view = [];

  @Output()
  onSearch: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.view) {
      this.onSearch.emit(this.filters);
    }
  }

  get filters() {
    return null;
  }

}

export type SearchBarType = 'input';

export interface SearchItem {
  type: SearchBarType;
  field: string;
  compareType: CompareType;
  options: any;

}

export class SearcBarBuilder {
  public static buildLike(type: SearchBarType, field: string, options: any): SearchItem {
    return {
      type: type,
      field: field,
      compareType: 'like',
      options: options
    };
  }

  public static build(type: SearchBarType, field: string, compareType: CompareType, options: any): SearchItem {
    return {
      type: type,
      field: field,
      compareType: compareType,
      options: options
    };
  }
}
