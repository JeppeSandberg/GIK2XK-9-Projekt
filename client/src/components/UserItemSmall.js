

function UserItemSmall({ user }) {
  return (
    <>
      <img alt={user.firstName} height="50" width="50" src={user.imageUrl} />
      <p>{user.firstName}</p>
      <p>{user.lastName}</p>
    </>
  );
}

export default UserItemSmall;
