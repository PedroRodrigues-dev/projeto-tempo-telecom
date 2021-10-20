import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ClienteService } from 'src/app/shared/services/cliente.service';
import { PedidoService } from 'src/app/shared/services/pedido.service';
import { ProdutoService } from 'src/app/shared/services/produto.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { PedidoFormComponent } from './form/pedido-form.component';
import { PedidoListComponent } from './list/pedido-list.component';
import { PedidoRoutingModule } from './pedido-routing.module';

@NgModule({
  declarations: [PedidoListComponent, PedidoFormComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    SharedModule,
    PedidoRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [PedidoService, ClienteService, ProdutoService],
})
export class PedidoModule {}
