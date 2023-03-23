import { Button, TextField } from '@mui/material';
import { useParams } from 'react-router-dom';

function ProductEdit() {
  const params = useParams();
  console.log(params);

  return (
    <form>
      <TextField id="title" label="Title" variant="standard" /> <br />
      <TextField
        id="description"
        multiline
        minRows={4}
        label="description"
        variant="standard"
      />{' '}
      <br />
      <TextField id="price" label="Price" variant="standard" />
      <br />
      <Button variant="filled">Spara</Button>
    </form>
  );
}

export default ProductEdit;
