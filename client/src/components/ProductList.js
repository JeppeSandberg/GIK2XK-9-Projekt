import { useEffect, useState } from 'react';
import { getAll } from '../models/ProductModel';
import ProductItemSmall from './ProductItemSmall';

function ProductList({ pathname }) {
  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAll(pathname).then((products) => setProducts(products));
  }, [pathname]);

  return (
    
    <ul>
      {products &&
        products.map((product) => {
          return (
            <li key={`productId_${product.id}`}>
              <ProductItemSmall product={product} />
            </li>
          );
        })}
    </ul>
  );
}

export default ProductList;
