import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidoFormComponent } from './form/pedido-form.component';
import { PedidoListComponent } from './list/pedido-list.component';

const routes: Routes = [
  {
    path: '',
    component: PedidoListComponent,
  },
  {
    path: 'Cadastrar',
    component: PedidoFormComponent,
  },
  {
    path: 'alterar/:id',
    component: PedidoFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedidoRoutingModule {}
