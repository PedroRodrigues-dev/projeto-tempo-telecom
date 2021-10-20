import { Routes } from '@angular/router';

export const HOME_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../../pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'Clientes',
    loadChildren: () =>
      import('../../pages/cliente/cliente.module').then((m) => m.ClienteModule),
  },
  {
    path: 'Produtos',
    loadChildren: () =>
      import('../../pages/produto/produto.module').then((m) => m.ProdutoModule),
  },
  {
    path: 'Pedidos',
    loadChildren: () =>
      import('../../pages/pedido/pedido.module').then((m) => m.PedidoModule),
  },
];
