import UserCartSmall from './UserCartSmall';

function UserItemLarge({ user }) {
  return (
    <>
      <div>
        <p>{user.createdAt}</p>
        <p>{user.firstName}</p>
        <p>{user.lastName}</p>
        <p>{user.email}</p>
        {user.carts &&
        user.carts.map((cart) => {
          return (
            <li key={`cartId_${cart}`}>
              <UserCartSmall cart={cart} />
              
            </li>

          );
        })}
        
      </div>
    </>
  );
}

export default UserItemLarge;
