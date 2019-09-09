import {HttpPlusClient} from 'ng-http-plus';
import {Page, QueryParameter} from '../model/jpa-plus.model';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';

export abstract class SmartTableAbstract {
  abstract url: string;

  keyName = 'id';
  pageIndex = 1;
  pageSize = 10;
  total = 1;
  data = [];
  loading = true;
  selectedKeys: string[] = [];


  constructor(protected modalService: NzModalService,
              protected messageService: NzMessageService) {
  }

  isSelected(key) {
    return this.selectedKeys.indexOf(key) !== -1;
  }

  selectRow(key) {
    const isSelected = this.selectedKeys.indexOf(key) !== -1;
    if (isSelected) {
      this.selectedKeys = this.selectedKeys.filter($id => $id !== key);
    } else {
      this.selectedKeys.push(key);
    }
  }

  get isSelectedAll() {
    return this.data.length > 0 && this.selectedKeys.length === this.data.length;
  }

  get isSelectedNone() {
    return this.selectedKeys.length === 0;
  }

  get isSelectedOne() {
    return this.selectedKeys.length === 1;
  }

  get isSelectedIndeterminate() {
    return this.selectedKeys.length > 0 && this.selectedKeys.length < this.data.length;
  }

  loadData(): void {
    this.loading = true;

    const queryParameter = QueryParameter.builder()
      .pageIndex(this.pageIndex - 1)
      .pageSize(this.pageSize)
      .build();

    HttpPlusClient.builder()
      .url(`${this.url}/page`)
      .body(queryParameter)
      .post<Page<any>>()
      .subscribe((data: any) => {
        this.loading = false;
        this.total = data.totalElements;
        this.data = data.content;
      });
  }

  checkAll(checked: boolean): void {
    if (checked) {
      this.selectedKeys = [...this.data.map(obj => obj[this.keyName])];
    } else {
      this.selectedKeys = [];
    }
  }

  delete() {
    this.modalService.confirm({
      nzTitle: '警告',
      nzContent: '确认删除选中数据？',
      nzOkText: '确认',
      nzCancelText: '取消',
      nzIconType: 'info-circle',
      nzOnOk: () => {
        HttpPlusClient.builder().url(`${this.url}`)
          .param('ids', this.selectedKeys)
          .delete<void>()
          .subscribe(() => {
            this.selectedKeys = [];
            this.messageService.success('删除成功');
            this.loadData();
          });
      }
    });
  }

  get selectedRow() {
    return this.data.filter($row => $row[this.keyName] === this.selectedId)[0];
  }

  get selectedId() {
    return this.selectedKeys[0];
  }
}
