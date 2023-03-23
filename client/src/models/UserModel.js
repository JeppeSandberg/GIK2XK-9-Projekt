import api from '../api.js';

export async function getAll() {
  const result = await api.get('/users');

  if (result.status === 200) return result.data;
  else {
    console.log(result.status);
    console.log(result.data);
    return [];
  }
}

export async function getOne(id) {
    const result = await api.get(`/users/${id}`);
  
    if (result.status === 200) return result.data;
    else {
      console.log(result.status);
      console.log(result.data);
      return [];
    }
}

export async function getCart(id) {
    const result = await api.get(`/users/${id}/getCart`);
  
    if (result.status === 200) return result.data;
    else {
      console.log(result.status);
      console.log(result.data);
      return [];
    }
}



export async function update(user) {
    const result = await api.put('/users/', user);
  
    if (result.status === 200) return result.data;
    else {
      console.log(result.status);
      console.log(result.data);
      return {};
    }
  }
  
  export async function create(user) {
    const result = await api.post('/users/', user);
  
    if (result.status === 200) return result.data;
    else {
      console.log(result.status);
      console.log(result.data);
      return {};
    }
  }
  
  export async function remove(id) {
    const result = await api.delete('/users/', { data: { id } });
  
    if (result.status === 200) return result.data;
    else {
      console.log(result.status);
      console.log(result.data);
      return {};
    }
  }