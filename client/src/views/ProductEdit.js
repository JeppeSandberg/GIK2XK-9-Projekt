import { Button, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { addImage, create, getOne, remove, update } from '../models/ProductModel';

function ProductEdit() {
  const params = useParams();

  const productId = params.id;
  const emptyProduct = {
    id: 0,
    title: '',
    description: '', 
    price: 0,
    imageUrl: ''
  }
  const [product, setProduct] = useState({emptyProduct});

  useEffect(() => {
    if (!isNaN(productId)) {
      getOne(productId).then((product) =>
        setProduct({ ...product, imageUrl: product.imageUrl || '' })
      );
    } else {
      setProduct(emptyProduct);
    }
    // eslint-disable-next-line
  }, [productId]);

function onChange(e) {
  const name = e.target.name;
  const value = e.target.value;

  const newProduct = {...product, [name]: value };
  setProduct(newProduct);
}

function onSave() {
  if(product.id === 0) {
    create(product).then(() => console.log('sparad'));
    addImage(product.id, {imageUrl: product.imageUrl}).then(() => console.log('sparad'));
  } else {
    update(product).then(() => console.log('uppdaterad'));
    addImage(product.id, {imageUrl: product.imageUrl}).then(() => console.log('sparad'));
  }
}

function onDelete() {
  remove(product.id).then(() => console.log('borttaget'));
}

  return (
    <form>
      <TextField
        value={product.title}
        onChange={onChange}
        name="title"
        id="title" 
        label="Title" 
        variant="standard" 
      /> <br />
      <TextField
        value={product.description}
        onChange={onChange}
        name="description"
        id="description"
        label="description"
        variant="standard"
        multiline
        minRows={4}
      />{' '}
      <br />
      <TextField 
        value={product.price}
        onChange={onChange}
        name="price"
        id="price" 
        label="Price" 
        variant="standard" />
      <br />
      <TextField
        value={product.imageUrl}
        onChange={onChange}
        name="imageUrl"
        id="imageUrl" 
        label="Url till bild" 
        variant="standard" 
      /> <br />
      <Button onClick={onSave} variant="filled">Save</Button>

      {product.id !== 0 && (
        <Button onClick={onDelete} variant="filled">
          Delete
        </Button>
      )}
    </form>
  );
}

export default ProductEdit;
