import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';

const orders: Order[] = [
  {
    '_id': '6372e48cbcd195b0d3d0f7f3',
    'table': '123',
    'status': 'DONE',
    'products': [
      {
        'product': {
          'name': 'Pizza quatro queijos',
          'imagePath': '1668435351-quatro.png',
          'price': 40,
        },
        'quatity': 3,
        '_id': 'as3d21a3s1d3a5s1d'
      }
    ]
  }
];

export function Orders() {
  return (
    <Container>
      <OrdersBoard
        icon="🕑"
        title="Fila de espera"
        orders={orders}
      />
      <OrdersBoard
        icon="🧑‍🍳"
        title="Em preparação"
        orders={[]}
      />
      <OrdersBoard
        icon="✅"
        title="Pronto"
        orders={[]}
      />
    </Container>
  );
}
