import { Card } from './Card';
import { Product } from '../types/Product';
import { Thumbnail } from './Thumbnail';
import { Link } from 'react-router-dom';

interface Props{
  product: Product
}

export const ProductListRow = ({ product }: Props) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Card
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '50%',
          alignItems: 'center',
          border: "solid 1px", 
          padding: "10px",
          margin: "10px",
          textDecoration: 'none'
        }}
      >
        <Thumbnail description={product.description} image={product.image} width={100} />
        <Link key={product.id} to={`${product.id}`} style={{ textDecoration: 'none' }}>
          {product.title}
        </Link>
      </Card>
    </div>
  );
};
