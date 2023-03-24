import UserCartSmall from './UserCartSmall';

function UserItemLarge({ user }) {
  let totalPrice = 0;
  const price = user.carts &&
    user.carts.map((cart) => {
      return (
        cart.products &&
          cart.products.map((product) => {
            totalPrice += parseInt(product.price);
            return (
                parseInt(product.price)
            );
          })

      );
    })
  
  return (
    <>
      <div>
        
        <p>User Name: {user.firstName} {user.lastName}</p>
        <p>User Email: {user.email}</p>
        {user.carts &&
        user.carts.map((cart) => {
          return (
            <li key={`cartId_${cart}`}>
              <UserCartSmall cart={cart} />
              
            </li>

          );
        })}
        <p>Total Price: {totalPrice}</p>
        
      </div>
      <p>User created at: {user.createdAt}</p>
    </>
  );
}

export default UserItemLarge;
