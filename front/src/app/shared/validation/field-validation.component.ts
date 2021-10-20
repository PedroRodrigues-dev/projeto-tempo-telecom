import {
  AfterViewInit,
  Component,
  ContentChild,
  Input,
  OnInit,
} from '@angular/core';
import { FormControlName } from '@angular/forms';

@Component({
  selector: 'app-field-validation-container',
  templateUrl: './field-validation.component.html',
  styleUrls: ['./field-validation.component.css'],
})
export class FieldValidationComponent implements OnInit, AfterViewInit {
  @Input() required = false;

  @ContentChild(HTMLElement, { static: false }) label: HTMLElement;
  @ContentChild(FormControlName, { static: true }) input: FormControlName;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  hasSuccess(): boolean | null {
    return this.input.valid && (this.input.dirty || this.input.touched);
  }

  hasError(): boolean | null {
    return this.input.invalid && (this.input.dirty || this.input.touched);
  }

  optionClass(): any {
    if (this.hasError()) {
      return 'has-error';
    }

    if (this.hasSuccess()) {
      return 'has-success';
    }
  }
}
