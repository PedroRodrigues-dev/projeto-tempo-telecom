import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbstractListComponent } from 'src/app/core/components/abstract-list-component';
import Cliente from 'src/app/shared/Data/Cliente';
import { ClienteService } from 'src/app/shared/services/cliente.service';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
})
export class ClienteListComponent extends AbstractListComponent<Cliente> {
  public resultados: Cliente[];

  constructor(
    protected service: ClienteService,
    protected route: ActivatedRoute
  ) {
    super(service, route);
  }

  onListar() {
    this.service
      .findAll()
      .subscribe((resultados) => (this.resultados = resultados));
  }

  deleteById(cliente: Cliente): void {
    this.service.deteleById(cliente.id).subscribe(() => {
      this.onListar();
    });
  }
}
