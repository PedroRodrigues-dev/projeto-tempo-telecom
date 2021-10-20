import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractFormComponent } from 'src/app/core/components/abstract-form-component';
import Produto from 'src/app/shared/Data/Produto';
import { ProdutoService } from 'src/app/shared/services/produto.service';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
})
export class ProdutoFormComponent extends AbstractFormComponent<Produto> {
  produtosForm: FormGroup;
  addBtnLabel: string = 'Salvar';

  onInit() {
    this.createForm();
    this.resultadoForm = this.produtosForm;
    this.navRoute = '/Produtos';
    if (this.route.snapshot.url[0].path == 'alterar') {
      this.addBtnLabel = 'Alterar';
    }
  }

  constructor(
    protected service: ProdutoService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected builder: FormBuilder
  ) {
    super(service, router, route, builder);
  }

  createForm(): void {
    this.produtosForm = this.builder.group({
      id: null,
      nome: [null, [Validators.required, Validators.maxLength(120)]],
      valor: [null, [Validators.required]],
    });
  }
}
