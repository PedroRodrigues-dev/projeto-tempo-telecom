import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FieldValidationComponent } from './validation/field-validation.component';

@NgModule({
  declarations: [FieldValidationComponent],
  imports: [CommonModule, RouterModule],
  exports: [FieldValidationComponent],
})
export class SharedModule {}
