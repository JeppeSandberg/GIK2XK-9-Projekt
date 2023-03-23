
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


import UserItemLarge from '../components/UserItemLarge';
import { getOne } from '../models/UserModel';

function UserDetail() {
    const params = useParams();
    const userId = params.id;
  
    const [user, setUser] = useState({});
  
    useEffect(() => {
      getOne(userId).then((user) => setUser(user));
    }, [userId]);
  
    return (
      <>
        <UserItemLarge user={user} />
      </>
    );
}
  
  export default UserDetail;
  