import {Component, OnInit} from '@angular/core';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';
import {EditFunctionComponent} from '../edit-function/edit-function.component';
import {SmartTableAbstract} from '../../../../share/abstract/smart-table.abstract';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-function-list',
  templateUrl: './function-list.component.html',
  styleUrls: ['./function-list.component.scss']
})
export class FunctionListComponent extends SmartTableAbstract implements OnInit {
  url = 'functions';

  constructor(protected modalService: NzModalService,
              protected messageService: NzMessageService) {
    super(modalService, messageService);
  }

  ngOnInit() {
    this.loadData();
  }

  goToEdit(strategy: 'post' | 'put' = 'post'): void {
    this.modalService.create<EditFunctionComponent>({
      nzTitle: `${strategy === 'post' ? '新增' : '修改'}功能`,
      nzContent: EditFunctionComponent,
      nzComponentParams: {
        strategy: `${strategy}`,
        model: this.selectedRow
      },
      nzMaskClosable: false
    } as any)
      .afterClose.pipe(filter(result => result)).subscribe(result => this.loadData());
  }

}
