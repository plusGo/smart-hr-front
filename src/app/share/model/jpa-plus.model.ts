export type SortType = 'asc' | 'desc';

export class Sort {
  field?: string;
  order?: SortType;
}

export type CompareType = '=' | 'like' | '!=';

export class Filter {
  field?: string;
  compareType?: CompareType;
  value?: any;

  constructor(field: string, value: any, compareType: CompareType = '=') {
    this.field = field;
    this.compareType = compareType;
    this.value = value;
  }
}

export type FilterType = 'and' | 'or';

export class FilterGroup {
  type: FilterType = 'and';
  filters: Filter[] = [];
  childGroups: FilterGroup[] = [];

  public static builder(filterGroup: FilterGroup = new FilterGroup()): FilterGroupBuilder {
    return new FilterGroupBuilder(filterGroup);
  }
}

export class FilterGroupBuilder {

  constructor(private filterGroup: FilterGroup) {
  }

  build(): FilterGroup {
    return this.filterGroup;
  }

  filter(filter: Filter): FilterGroupBuilder {
    this.filterGroup.filters = this.filterGroup.filters || [];
    this.filterGroup.filters.filter($filter => $filter.field === filter.field);
    this.filterGroup.filters.push(filter);
    return this;
  }

  filters(filters: Filter[]): FilterGroupBuilder {
    this.filterGroup.filters = filters;
    return this;
  }

  childGroup(childGroup: FilterGroup): FilterGroupBuilder {
    this.filterGroup.childGroups = this.filterGroup.childGroups || [];
    this.filterGroup.childGroups.push(childGroup);
    return this;
  }

  childGroups(childGroups: FilterGroup[]): FilterGroupBuilder {
    this.filterGroup.childGroups = childGroups;
    return this;
  }

  type(type: FilterType): FilterGroupBuilder {
    this.filterGroup.type = type;
    return this;
  }
}

export class QueryParameter {
  pageIndex = 0;
  pageSize = 10;
  sorts: Sort[] = [];
  filterGroup: FilterGroup = FilterGroup.builder().build();
  includes = [];

  public static builder(queryParameter: QueryParameter = new QueryParameter()): QueryParameterBuilder {
    return new QueryParameterBuilder(queryParameter);
  }

}

class QueryParameterBuilder {

  constructor(private queryParameter: QueryParameter) {
  }

  build(): QueryParameter {
    return this.queryParameter;
  }

  filterGroup(filterGroup: FilterGroup): QueryParameterBuilder {
    this.queryParameter.filterGroup = filterGroup;
    return this;
  }

  pageIndex(pageIndex: number): QueryParameterBuilder {
    this.queryParameter.pageIndex = pageIndex;
    return this;
  }

  pageSize(pageSize: number): QueryParameterBuilder {
    this.queryParameter.pageSize = pageSize;
    return this;
  }

  includes(includes: string[]): QueryParameterBuilder {
    this.queryParameter.includes = includes;
    return this;
  }

  include(include: string): QueryParameterBuilder {
    this.queryParameter.includes = this.queryParameter.includes || [];
    this.queryParameter.includes.filter($include => $include === include);
    this.queryParameter.includes.push(include);
    return this;
  }

  sorts(sorts: Sort[]): QueryParameterBuilder {
    this.queryParameter.sorts = sorts;
    return this;
  }

  sort(sort: Sort): QueryParameterBuilder {
    this.queryParameter.sorts = this.queryParameter.sorts || [];
    this.queryParameter.sorts.filter($sort => $sort.field === sort.field);
    this.queryParameter.sorts.push(sort);
    return this;
  }
}

export interface Page<T> {
  content: T[];
  totalElements: number;
}
