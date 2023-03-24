import { Card, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { toDateTimeString } from './FormarHelper';
import { CustomPaper } from './smallComponents';

function ProductItemSmall({ product }) {
  return (
    <CustomPaper>
      <Card elavation={0}>
      <div>
        <div>Released: {toDateTimeString(product.createdAt)}</div>
        <Typography variant="h5" component="h3">
          <Link to={`/products/${product.id}`}>{product.title}</Link>
        </Typography>
        <img alt={product.title} height="50" width="50" src={product.imageUrl[0]} />
        <p>{product.description}</p>
        <div>
        <p>Price: {product.price}</p>
        </div>
      </div>
      </Card>
    </CustomPaper>
  );
}

export default ProductItemSmall;
