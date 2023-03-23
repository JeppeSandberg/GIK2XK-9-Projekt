import { useLocations } from 'react-router-dom';
import ProductList from '../components/ProductList';

function Products() {
  const location = useLocations();
  console.log(location);
  return <ProductList pathname={location.pathname} />;
}

export default Products;
