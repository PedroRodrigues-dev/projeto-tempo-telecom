import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbstractListComponent } from 'src/app/core/components/abstract-list-component';
import Pedido from 'src/app/shared/Data/Pedido';
import { PedidoService } from 'src/app/shared/services/pedido.service';

@Component({
  selector: 'app-pedido-list',
  templateUrl: './pedido-list.component.html',
})
export class PedidoListComponent extends AbstractListComponent<Pedido> {
  public resultados: Pedido[];

  constructor(
    protected service: PedidoService,
    protected route: ActivatedRoute
  ) {
    super(service, route);
  }

  onListar() {
    this.service
      .findAll()
      .subscribe((resultados) => (this.resultados = resultados));
  }

  deleteById(pedido: Pedido): void {
    this.service.deteleById(pedido.id).subscribe(() => {
      this.onListar();
    });
  }
}
