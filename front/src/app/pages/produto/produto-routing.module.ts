import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoFormComponent } from './form/produto-form.component';
import { ProdutoListComponent } from './list/produto-list.component';

const routes: Routes = [
  {
    path: '',
    component: ProdutoListComponent,
  },
  {
    path: 'Cadastrar',
    component: ProdutoFormComponent,
  },
  {
    path: 'alterar/:id',
    component: ProdutoFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutoRoutingModule {}
