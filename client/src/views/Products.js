import { useParams } from 'react-router-dom';
import ProductList from '../components/ProductList';

function Products() {
  const params = useParams();
  console.log(params);
  return <ProductList />;
}

export default Products;
