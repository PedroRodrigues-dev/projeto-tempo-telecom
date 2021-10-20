import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractRestService } from 'src/app/core/service/abstract-rest.service';

import { environment } from 'src/environments/environment';
import Pedido from '../Data/Pedido';

@Injectable({
  providedIn: 'root',
})
export class PedidoService extends AbstractRestService<Pedido> {
  protected url = `${environment.api.url}/Pedidos`;
  constructor(protected http: HttpClient) {
    super(http);
  }
}
