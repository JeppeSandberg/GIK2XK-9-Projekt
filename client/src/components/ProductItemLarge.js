import { Card } from '@mui/material';
import { CustomPaper } from './smallComponents';

function ProductItemLarge({ product }) {
  let total = 0;
  product.ratings &&
    product.ratings.map((rating) => (
      total += parseInt(rating.rating)
  ))
 
  let numOfRatings = 0;
  product.ratings &&
    product.ratings.map((rating) => (
    numOfRatings++
  ))

  console.log(product)

  return (
    <>
      <div>
        {product.imageUrl &&
          product.imageUrl.map((imageUrl) => <img alt={product.title} height="50" width="50" src={product.imageUrl} />)}
      </div>
      <CustomPaper>
        <Card elavation={0}>
          <div>
            <p>Created at: {product.createdAt}</p>
            <p>Title: {product.title}</p>
            <p>Description: {product.description}</p>
            <p>Price: {product.price}</p>
          </div>
          <div>
            <p>Rating: {total/numOfRatings}/5</p>
          </div>
        </Card>
      </CustomPaper>
      
    </>
  );
}

export default ProductItemLarge;
