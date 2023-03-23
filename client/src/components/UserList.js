import UserItemSmall from './UserItemSmall';

function UserList() {
  const users = [
    {
        id: 6,
        email: "gustaf@jaderb.se",
        firstName: "Gustaf",
        lastName: "Jäderberg",
        password: "huitzilopochtli",
        imageUrl: "http://urltoimage.com",
        createdAt: "2023-03-21T10:51:01.000Z",
        updatedAt: "2023-03-21T10:51:01.000Z",
    }
  ];
  return (
    <ul>
      {users &&
        users.map((user) => {
          return (
            <li key={`userId_${user.id}`}>
              <UserItemSmall user={user} />
            </li>
          );
        })}
    </ul>
  );
}

export default UserList;
