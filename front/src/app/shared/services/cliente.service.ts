import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractRestService } from 'src/app/core/service/abstract-rest.service';

import { environment } from 'src/environments/environment';
import Cliente from '../Data/Cliente';

@Injectable({
  providedIn: 'root',
})
export class ClienteService extends AbstractRestService<Cliente> {
  protected url = `${environment.api.url}/Clientes`;
  constructor(protected http: HttpClient) {
    super(http);
  }
}
