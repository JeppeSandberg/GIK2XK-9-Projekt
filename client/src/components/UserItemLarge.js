
function UserItemLarge({ user }) {
  return (
    <>
      <div>
        <p>{user.createdAt}</p>
        <p>{user.firstName}</p>
        <p>{user.lastName}</p>
        <p>{user.email}</p>
        <p>{user.cart}</p>
        
      </div>
    </>
  );
}

export default UserItemLarge;
