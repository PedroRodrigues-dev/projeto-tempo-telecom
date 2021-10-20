import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Directive, OnInit } from '@angular/core';

@Directive()
export abstract class AbstractFormComponent<T> implements OnInit {
  protected resultadoForm: FormGroup;
  protected action: string;
  protected navRoute: string;

  constructor(
    protected service: any,
    protected router: Router,
    protected route: ActivatedRoute,
    protected builder: FormBuilder
  ) {}

  ngOnInit() {
    this.onInit();
    this.action = this.route.snapshot.url[0].path;
    if (this.action == 'alterar') {
      this.setValue();
    }
  }

  onInit() {}

  setValue() {
    const id = this.route.snapshot.url[1].path;
    this.service
      .findById(Number(id))
      .subscribe((response: any) => this.resultadoForm.patchValue(response));
  }

  onSave(value: T): void {
    Object.keys(this.resultadoForm.controls).forEach((field) =>
      this.resultadoForm.get(field).markAllAsTouched()
    );

    if (this.resultadoForm.invalid) {
      return;
    }

    this.service
      .save(value)
      .then((observable: any) =>
        observable.subscribe((response: any) =>
          this.router.navigate([this.navRoute])
        )
      );
  }

  onCancel(): void {
    this.router.navigate([this.navRoute]);
  }
}
