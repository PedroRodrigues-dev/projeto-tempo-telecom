import Cliente from './Cliente';
import Produto from './Produto';

export default class Pedido {
  id: number;
  cliente: Cliente;
  produto1: Produto;
  produto2: Produto;
  produto3: Produto;
  produto4: Produto;
  createdAt: string;
}
