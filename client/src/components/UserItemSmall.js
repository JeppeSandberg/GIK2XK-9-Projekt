import { Link } from 'react-router-dom';

function UserItemSmall({ user }) {
  return (
    <>
      <img alt={user.email} height="50" width="50" src={user.imageUrl} />
      <Link to={`/user/${user.id}`}>{user.email}</Link>
      <p>{user.firstName} {user.lastName}</p>
    </>
  );
}

export default UserItemSmall;
