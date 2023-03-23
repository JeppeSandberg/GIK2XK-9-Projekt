import { useLocations } from 'react-router-dom';
import ProductList from '../components/ProductList';

function Products() {
  const locations = useLocations();
  console.log(locations);
  return <ProductList pathname={location.pathname} />;
}

export default Products;
