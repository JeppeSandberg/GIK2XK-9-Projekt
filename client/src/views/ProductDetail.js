import { Button, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import RatingForm from '../components/RatingForm'

import ProductItemLarge from '../components/ProductItemLarge';
import { addRating, addToCart, getOne } from '../models/ProductModel';

function ProductDetail() {
    const params = useParams();
    const productId = params.id;
  
    const [product, setProduct] = useState({});

    const [amount, setAmount] = useState({ amount: '1' });

    useEffect(() => {
      getOne(productId).then((product) => setProduct(product));
    }, [productId]);
  
    function onRatingAdd(rating) {
      addRating(productId, rating).then((product) => setProduct(product));
    }

    function addCart(amount){
      console.log(amount)
      addToCart(productId, 6, amount).then((product) => setProduct(product));
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
        <form>
          <TextField
            label="Amount"
            name="amount"
            value={amount.amount}
            onChange={(e) => setAmount({ ...amount, amount: e.target.value })}
          />
          <Button onClick={()=>addCart(amount.amount)}>
            Add To Cart: 
          </Button>
        </form>
        
      </>
    );
}
  
  export default ProductDetail;
  