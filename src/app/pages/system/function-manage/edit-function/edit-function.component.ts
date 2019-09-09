import {Component, Input, OnInit} from '@angular/core';
import {NzMessageService, NzModalRef} from 'ng-zorro-antd';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FunctionService} from '../../../../core/service/biz/function.service';
import {PageUniqueValidator} from '../../../../core/service/validator/page-unique.validator';

@Component({
  selector: 'app-edit-function',
  templateUrl: './edit-function.component.html',
  styleUrls: ['./edit-function.component.scss']
})
export class EditFunctionComponent implements OnInit {
  @Input() strategy: 'post' | 'put' = 'post';
  @Input() model: any;
  form: FormGroup;
  submiting = false;

  constructor(private modal: NzModalRef,
              private fb: FormBuilder,
              private pageUniqueValidator: PageUniqueValidator,
              private messageService: NzMessageService,
              private functionService: FunctionService) {
  }

  private initForm() {
    this.form = this.fb.group({
      id: [null, [Validators.required],
        [this.pageUniqueValidator.fieldUnique({url: 'functions', field: 'id', selfValue: (this.model || {}).id})]
      ],
      name: [null, [Validators.required], [this.pageUniqueValidator.fieldUnique({
        url: 'functions',
        field: 'name',
        selfValue: (this.model || {}).name
      })]],
    });
    if (this.strategy === 'put') {
      this.form.patchValue(this.model);
    }
  }

  submit() {
    this.submiting = true;
    const observable = this.strategy === 'post' ? this.functionService.save(this.form.value) : this.functionService.update(this.form.value);
    observable.subscribe(model => {
      this.submiting = false;
      this.messageService.success('操作成功');
      this.modal.close(true);
    }, () => this.messageService.error('操作失败，请重试'));
  }

  cancel() {
    this.modal.close(false);
  }

  ngOnInit(): void {
    this.initForm();
  }

}
