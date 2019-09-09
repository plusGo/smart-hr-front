import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-form-error-tip',
  templateUrl: './form-error-tip.component.html',
  styleUrls: ['./form-error-tip.component.scss']
})
export class FormErrorTipComponent implements OnInit {
  @Input()
  control: AbstractControl;
  @Input()
  fieldName = '';
  @Input()
  field = '';
  @Input()
  errorTips = [];

  private defaultErrorTips;

  constructor() {

  }

  ngOnInit() {
    this.defaultErrorTips = [
      {error: 'required', message: '不能为空'},
      {error: `${this.field}Unique`, message: '已存在'},
    ];
  }

  public get errorMessages() {
    return [...this.errorTips, ...this.defaultErrorTips];
  }

}
