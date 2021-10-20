import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractRestService } from 'src/app/core/service/abstract-rest.service';

import { environment } from 'src/environments/environment';
import Produto from '../Data/Produto';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService extends AbstractRestService<Produto> {
  protected url = `${environment.api.url}/Produtos`;
  constructor(protected http: HttpClient) {
    super(http);
  }
}
