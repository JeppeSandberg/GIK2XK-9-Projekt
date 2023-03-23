import { Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import ProductItemLarge from '../components/ProductItemLarge';

function ProductDetail() {
    
    const product = {
      id: 5,
      title: "Leg",
      price: 100,
      createdAt: "2023-03-21T08:15:42.000Z",
      updatedAt: "2023-03-21T08:15:42.000Z",
      imageUrl: [
          "http://urltoimage.com",
          "http://urltoimage.com",
          "http://urltoimage.com",
          "http://urltoimage.com"
      ],
      ratings: [
          {
              description: "Hopefully this works",
              rating: 3,
              createdAt: "2023-03-22T10:36:40.000Z",
              userId: 6
          },
          {
              description: "Hopefully this works",
              rating: 3,
              createdAt: "2023-03-21T09:04:42.000Z",
              userId: null
          },
          {
              description: "Hopefully this works",
              rating: 3,
              createdAt: "2023-03-21T08:59:23.000Z",
              userId: null
          },
          {
              description: "Hopefully this works",
              rating: 3,
              createdAt: "2023-03-21T08:30:28.000Z",
              userId: null
          }
      ]
  }

  const params = useParams();
  console.log(params);
  return (
    <>
      <ProductItemLarge product={product} />
      <Button variant="filled">Edit</Button>
      <Button variant="filled">Delete</Button>
    </>
  );
  }
  
  export default ProductDetail;
  