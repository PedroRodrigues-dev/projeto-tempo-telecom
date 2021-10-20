import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbstractListComponent } from 'src/app/core/components/abstract-list-component';
import Produto from 'src/app/shared/Data/Produto';
import { ProdutoService } from 'src/app/shared/services/produto.service';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
})
export class ProdutoListComponent extends AbstractListComponent<Produto> {
  public resultados: Produto[];

  constructor(
    protected service: ProdutoService,
    protected route: ActivatedRoute
  ) {
    super(service, route);
  }

  onListar() {
    this.service
      .findAll()
      .subscribe((resultados) => (this.resultados = resultados));
  }

  deleteById(produto: Produto): void {
    this.service.deteleById(produto.id).subscribe(() => {
      this.onListar();
    });
  }
}
