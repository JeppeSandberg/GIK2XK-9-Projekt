import { Link } from 'react-router-dom';
import { Card } from '@mui/material';
import { CustomPaper } from './smallComponents';

function UserCartSmall({ cart }) {
    return (
    <>
      <p>Payed: {String(cart.payed)}</p>
      <div>
        {cart.products &&
          cart.products.map((product) => (
            (
            <CustomPaper>
                <Card elavation={0}>
                    <div>
                        <Link to={`/products/${product.id}`}>{product.title}</Link>
                        <p key={`productId_${product.id}`}>"{product.description}"</p>
                        <p key={`productId_${product.id}`}>"{product.price}"</p>
                    </div>
                </Card>
            </CustomPaper>
            )
          ))
        }
      </div>
    </>
  );
}

export default UserCartSmall;
