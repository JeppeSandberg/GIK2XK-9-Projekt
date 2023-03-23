import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import RatingForm from '../components/RatingForm'

import ProductItemLarge from '../components/ProductItemLarge';
import { addRating, getOne } from '../models/ProductModel';

function ProductDetail() {
    const params = useParams();
    const productId = params.id;
  
    const [product, setProduct] = useState({});
  
    useEffect(() => {
      getOne(productId).then((product) => setProduct(product));
    }, [productId]);
  
    function onRatingAdd(rating) {
      addRating(productId, rating).then((product) => setProduct(product));
    }
  
    return (
      <>
        <ProductItemLarge product={product} />
        <RatingForm onSave={onRatingAdd}></RatingForm>
        <div>
          {product.ratings &&
            product.ratings.map((rating, i) => (
              <p key={`rating_${i}`}>
                {rating.title}
                <br /> {rating.description}
                <br /> {rating.rating}
              </p>
            ))}
        </div>
        <Link to={`/products/${productId}/edit`}>
          <Button variant="filled">Edit</Button>
        </Link>
      </>
    );
}
  
  export default ProductDetail;
  