import { Link } from 'react-router-dom';
import ProductCartList from '../components/ProductCartList';

function UserCartSmall({ cart }) {
    console.log(cart)
    return (
    <>
      <p>Payed: {String(cart.payed)}</p>
      <ProductCartList cart={cart}></ProductCartList>

    </>
  );
}

export default UserCartSmall;
