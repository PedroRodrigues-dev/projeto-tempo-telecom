import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractFormComponent } from 'src/app/core/components/abstract-form-component';
import Cliente from 'src/app/shared/Data/Cliente';
import Pedido from 'src/app/shared/Data/Pedido';
import Produto from 'src/app/shared/Data/Produto';
import { ClienteService } from 'src/app/shared/services/cliente.service';
import { PedidoService } from 'src/app/shared/services/pedido.service';
import { ProdutoService } from 'src/app/shared/services/produto.service';

@Component({
  selector: 'app-pedido-form',
  templateUrl: './pedido-form.component.html',
})
export class PedidoFormComponent extends AbstractFormComponent<Pedido> {
  public clienteResultados: Cliente[];
  public produtoResultados: Produto[];
  pedidosForm: FormGroup;
  addBtnLabel: string = 'Salvar';

  onInit() {
    this.onListarCliente();
    this.onListarProduto();
    this.createForm();
    this.resultadoForm = this.pedidosForm;
    this.navRoute = '/Pedidos';
    if (this.route.snapshot.url[0].path == 'alterar') {
      this.addBtnLabel = 'Alterar';
    }
  }

  constructor(
    protected service: PedidoService,
    protected clienteService: ClienteService,
    protected produtoService: ProdutoService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected builder: FormBuilder
  ) {
    super(service, router, route, builder);
  }

  createForm(): void {
    this.pedidosForm = this.builder.group({
      id: null,
      cliente: [null, [Validators.required]],
      produto1: [null, [Validators.required]],
      produto2: [null, [Validators.required]],
      produto3: [null, [Validators.required]],
      produto4: [null, [Validators.required]],
      createdAt: [null],
    });
  }

  onListarCliente() {
    this.clienteService
      .findAll()
      .subscribe((resultados: any) => (this.clienteResultados = resultados));
  }

  onListarProduto() {
    this.produtoService
      .findAll()
      .subscribe((resultados: any) => (this.produtoResultados = resultados));
  }
}
