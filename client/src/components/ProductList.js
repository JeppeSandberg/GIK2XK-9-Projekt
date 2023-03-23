import ProductItemSmall from './ProductItemSmall';

function ProductList() {
  const products = [
    {
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
    },
    {
        id: 6,
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
    },
    {
        id: 7,
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
    }

  ];

  return (
    <ul>
      {products &&
        products.map((product) => {
          return (
            <li key={`productId_${product.id}`}>
              <ProductItemSmall product={product} />
            </li>
          );
        })}
    </ul>
  );
}

export default ProductList;
