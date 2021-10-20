import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractFormComponent } from 'src/app/core/components/abstract-form-component';
import Cliente from 'src/app/shared/Data/Cliente';
import { ClienteService } from 'src/app/shared/services/cliente.service';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
})
export class ClienteFormComponent extends AbstractFormComponent<Cliente> {
  clientesForm: FormGroup;
  addBtnLabel: string = 'Salvar';

  onInit() {
    this.createForm();
    this.resultadoForm = this.clientesForm;
    this.navRoute = '/Clientes';
    if (this.route.snapshot.url[0].path == 'alterar') {
      this.addBtnLabel = 'Alterar';
    }
  }

  constructor(
    protected service: ClienteService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected builder: FormBuilder
  ) {
    super(service, router, route, builder);
  }

  createForm(): void {
    this.clientesForm = this.builder.group({
      id: null,
      nome: [null, [Validators.required, Validators.maxLength(120)]],
      telefone: [null, [Validators.required, Validators.maxLength(13)]],
      data_nascimento: [null, [Validators.required]],
    });
  }
}
